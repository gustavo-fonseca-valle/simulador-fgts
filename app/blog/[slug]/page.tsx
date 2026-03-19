import { notFound } from "next/navigation"
import { posts } from "../../lib/posts"
import AdsenseBlock from "@/components/AdsenseBlock"
import Link from "next/link"

type PageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
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

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = posts.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  const url = `https://www.simuladorfgts.com.br/blog/${post.slug}`

  // 🔥 SPLIT DO CONTEÚDO PRA INSERIR ANÚNCIO NO MEIO
  const contentParts = post.content.split("</p>")

  return (
    <main className="max-w-3xl mx-auto px-6 py-12">

      {/* SCHEMA: Article */}
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

      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/">Home</Link> › <Link href="/blog">Blog</Link> › {post.title}
      </nav>

      <article>

        {/* HEADER */}
        <header className="mb-10">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

          <p className="text-gray-500 text-sm">
            Atualizado em {post.date} • Por Simulador FGTS
          </p>

          <p className="text-gray-600 mt-4">{post.description}</p>

          {/* 🔥 ANÚNCIO TOPO */}
          <div className="mt-6">
            <AdsenseBlock />
          </div>
        </header>

        {/* CTA */}
        <div className="my-8 p-6 bg-green-50 rounded-xl text-center">
          <p className="font-semibold mb-3">
            Quer saber quanto você tem de FGTS?
          </p>

          <Link
            href="/simuladores"
            className="bg-green-600 text-white px-6 py-3 rounded-lg font-bold"
          >
            Simular FGTS agora
          </Link>
        </div>

        {/* CONTEÚDO COM ANÚNCIO NO MEIO */}
        <section className="prose max-w-none text-gray-800 leading-relaxed">
          {contentParts.map((part, index) => (
            <div key={index}>
              <div dangerouslySetInnerHTML={{ __html: part + "</p>" }} />

              {/* 🔥 ANÚNCIO NO MEIO (após 2º parágrafo) */}
              {index === 2 && (
                <div className="my-8">
                  <AdsenseBlock />
                </div>
              )}
            </div>
          ))}
        </section>

        {/* 🔥 ANÚNCIO FINAL */}
        <div className="mt-10">
          <AdsenseBlock />
        </div>

        {/* FAQ */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Perguntas frequentes</h2>

          <h3 className="font-semibold">Quanto é o FGTS por mês?</h3>
          <p>O FGTS corresponde a 8% do salário bruto.</p>

          <h3 className="font-semibold mt-4">
            Posso sacar o FGTS na demissão?
          </h3>
          <p>Sim, na demissão sem justa causa.</p>
        </div>

        {/* RELACIONADOS */}
        <div className="mt-12">
          <h3 className="text-xl font-bold mb-4">Leia também</h3>

          <ul className="space-y-2">
            {posts
              .filter((p) => p.slug !== post.slug)
              .slice(0, 3)
              .map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/blog/${p.slug}`}
                    className="text-blue-600 hover:underline"
                  >
                    {p.title}
                  </Link>
                </li>
              ))}
          </ul>
        </div>

      </article>
    </main>
  )
}