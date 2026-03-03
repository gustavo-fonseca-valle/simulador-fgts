import Link from "next/link"
import { posts } from "../lib/posts"

export const metadata = {
  title: "Blog - Guia Trabalhista e Financeiro",
  description:
    "Artigos completos sobre FGTS, demissão, multa de 40%, saque-aniversário e direitos trabalhistas explicados de forma clara.",
}

export default function BlogPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
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

            <Link
              href={`/blog/${post.slug}`}
              className="text-blue-600 font-medium hover:underline"
            >
              Ler artigo completo →
            </Link>
          </article>
        ))}
      </section>

      <section className="mt-16 text-gray-700 leading-relaxed">
        <h2 className="text-2xl font-bold mb-4">
          Por que entender o FGTS é importante?
        </h2>

        <p>
          O FGTS é um direito de todo trabalhador com carteira assinada.
          Entretanto, muitos brasileiros não sabem como calcular corretamente
          valores como a multa rescisória ou as regras do saque-aniversário.
        </p>

        <p className="mt-4">
          Ao compreender essas regras, você evita prejuízos e pode planejar
          melhor suas finanças em momentos de transição profissional.
        </p>
      </section>
    </main>
  )
}