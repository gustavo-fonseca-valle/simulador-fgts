import { notFound } from "next/navigation"
import { posts } from "../../lib/posts"

type PageProps = {
  params: { slug: string }
}

export const dynamic = "force-dynamic"

export function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export function generateMetadata({ params }: PageProps) {
  const { slug } = params
  const post = posts.find((p) => p.slug === slug)

  if (!post) {
    return {
      title: "Artigo não encontrado",
    }
  }

  return {
    title: `${post.title} | Guia FGTS 2026`,
    description: post.description,
  }
}

export default function BlogPostPage({ params }: PageProps) {
  const { slug } = params
  const post = posts.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  const url = `https://www.simuladorfgts.com.br/blog/${post.slug}`

  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      {/* 🔥 SCHEMA: Article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.description,
            author: {
              "@type": "Organization",
              name: "Simulador FGTS",
            },
            publisher: {
              "@type": "Organization",
              name: "Simulador FGTS",
            },
            datePublished: post.date,
            dateModified: post.date,
            mainEntityOfPage: url,
          }),
        }}
      />

      {/* 🔥 SCHEMA: Breadcrumb */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://www.simuladorfgts.com.br",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Blog",
                item: "https://www.simuladorfgts.com.br/blog",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: post.title,
                item: url,
              },
            ],
          }),
        }}
      />

      {/* 🔥 SCHEMA: FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Quanto é o FGTS por mês?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "O FGTS corresponde a 8% do salário bruto do trabalhador.",
                },
              },
              {
                "@type": "Question",
                name: "Posso sacar o FGTS na demissão?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sim, na demissão sem justa causa é possível sacar o saldo total.",
                },
              },
            ],
          }),
        }}
      />

      {/* Breadcrumb visual */}
      <nav className="text-sm text-gray-500 mb-6">
        <a href="/">Home</a> › <a href="/blog">Blog</a> › {post.title}
      </nav>

      <article>
        <header className="mb-10">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

          <p className="text-gray-500 text-sm">
            Atualizado em {post.date} • Por Simulador FGTS
          </p>

          <p className="text-gray-600 mt-4">{post.description}</p>
        </header>

        {/* CTA SIMULADOR */}
        <div className="my-8 p-6 bg-green-50 rounded-xl text-center">
          <p className="font-semibold mb-3">
            Quer saber quanto você tem de FGTS?
          </p>

          <a
            href="/simuladores"
            className="bg-green-600 text-white px-6 py-3 rounded-lg font-bold"
          >
            Simular FGTS agora
          </a>
        </div>

        {/* CONTEÚDO */}
        <section
          className="prose max-w-none text-gray-800 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* FAQ VISUAL */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Perguntas frequentes</h2>

          <h3 className="font-semibold">Quanto é o FGTS por mês?</h3>
          <p>O FGTS corresponde a 8% do salário bruto.</p>

          <h3 className="font-semibold mt-4">
            Posso sacar o FGTS na demissão?
          </h3>
          <p>Sim, na demissão sem justa causa.</p>
        </div>

        {/* ARTIGOS RELACIONADOS */}
        <div className="mt-12">
          <h3 className="text-xl font-bold mb-4">Leia também</h3>

          <ul className="space-y-2">
            {posts.slice(0, 3).map((p) => (
              <li key={p.slug}>
                <a
                  href={`/blog/${p.slug}`}
                  className="text-blue-600 hover:underline"
                >
                  {p.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </article>
    </main>
  )
}