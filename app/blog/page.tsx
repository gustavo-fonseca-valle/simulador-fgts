import Link from "next/link"
import { posts } from "../lib/posts"
import AdsenseBlock from "@/components/AdsenseBlock"

export const metadata = {
  title: "Blog FGTS 2026 | Direitos Trabalhistas e Cálculos",
  description:
    "Aprenda como calcular FGTS, multa de 40%, saque-aniversário e direitos trabalhistas com exemplos práticos.",
}

export default function BlogPage() {
  const url = "https://www.simuladorfgts.com.br/blog"

  return (
    <main className="max-w-5xl mx-auto px-6 py-12">

      {/* 🔥 SCHEMA BLOG */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "Blog FGTS",
            url: url,
            description:
              "Conteúdos sobre FGTS, demissão, multa de 40% e direitos trabalhistas.",
          }),
        }}
      />

      {/* 🔥 SCHEMA BREADCRUMB */}
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
                item: url,
              },
            ],
          }),
        }}
      />

      {/* Breadcrumb visual */}
      <nav className="text-sm text-gray-500 mb-6">
        <a href="/">Home</a> › Blog
      </nav>

      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-4">
          Blog sobre FGTS e Direitos Trabalhistas
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed">
          Aqui você encontra conteúdos completos e atualizados sobre multa de
          40% do FGTS, saque-aniversário, demissão sem justa causa e outros
          direitos do trabalhador.
        </p>

        <p className="text-gray-600 mt-4">
          Nosso objetivo é explicar de forma simples o que muitas vezes parece
          complicado, ajudando você a tomar decisões financeiras mais seguras.
        </p>
      </header>

      {/* 🔥 LISTA DE POSTS */}
      <section className="grid md:grid-cols-2 gap-8">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="border rounded-xl p-6 hover:shadow-md transition"
          >
            <h2 className="text-2xl font-semibold mb-3">
              <Link href={`/blog/${post.slug}`} className="hover:underline">
                {post.title}
              </Link>
            </h2>

            <p className="text-gray-700 mb-4">{post.description}</p>

            {/* 🔥 DATA (SEO ajuda muito) */}
            <p className="text-sm text-gray-400 mb-3">
              Atualizado em {post.date}
            </p>

            <Link
              href={`/blog/${post.slug}`}
              className="text-green-600 font-semibold hover:underline"
            >
              Ler artigo completo →
            </Link>
          </article>
        ))}
      </section>

      {/* 🔥 ANÚNCIO */}
      <div className="my-16">
        <AdsenseBlock />
      </div>

      {/* 🔥 CONTEÚDO SEO (expandido) */}
      <section className="mt-16 text-gray-700 leading-relaxed">
        <h2 className="text-2xl font-bold mb-4">
          Por que entender o FGTS é importante?
        </h2>

        <p>
          O FGTS é um direito garantido ao trabalhador brasileiro, mas muitas
          pessoas ainda têm dúvidas sobre como ele funciona na prática.
        </p>

        <p className="mt-4">
          Saber calcular corretamente valores como a multa de 40% e entender as
          regras do saque-aniversário pode evitar prejuízos e ajudar no
          planejamento financeiro.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          O que você vai aprender aqui
        </h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>Como calcular o FGTS mensal</li>
          <li>Como funciona a multa de 40%</li>
          <li>Regras do saque-aniversário</li>
          <li>Direitos na demissão sem justa causa</li>
        </ul>
      </section>

      {/* 🔥 FAQ VISÍVEL */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-4">
          Perguntas frequentes
        </h2>

        <h3 className="font-semibold">
          Quanto é o depósito do FGTS por mês?
        </h3>
        <p>O valor corresponde a 8% do salário bruto.</p>

        <h3 className="font-semibold mt-4">
          Posso sacar o FGTS na demissão?
        </h3>
        <p>Sim, em caso de demissão sem justa causa.</p>
      </section>

      {/* 🔥 SCHEMA FAQ */}
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
                  text: "O FGTS corresponde a 8% do salário bruto.",
                },
              },
              {
                "@type": "Question",
                name: "Posso sacar o FGTS na demissão?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sim, na demissão sem justa causa.",
                },
              },
            ],
          }),
        }}
      />

      {/* 🔥 ANÚNCIO FINAL */}
      <div className="my-16">
        <AdsenseBlock />
      </div>

    </main>
  )
}