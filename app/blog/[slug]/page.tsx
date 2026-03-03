import { notFound } from "next/navigation"
import AdsenseBlock from "@/components/AdsenseBlock"
import { posts } from "../../lib/posts"

type Props = {
  params: { slug: string }
}

// Geração estática dos slugs
export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

// SEO dinâmico
export async function generateMetadata({ params }: Props) {
  const post = posts.find((p) => p.slug === params.slug)

  if (!post) return {}

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
    },
  }
}

export default function BlogPost({ params }: Props) {
  const post = posts.find((p) => p.slug === params.slug)

  if (!post) return notFound()

  return (
    <main className="max-w-3xl mx-auto px-4 py-10">

      {/* Título */}
      <h1 className="text-4xl font-bold mb-6 leading-tight">
        {post.title}
      </h1>

      {/* Introdução */}
      <p className="text-lg text-gray-700 mb-6 leading-relaxed">
        {post.description}
      </p>

      <section className="prose prose-lg max-w-none text-gray-800">
        {post.content}
      </section>

      {/* Anúncio no meio do conteúdo */}
      <div className="my-10">
        <AdsenseBlock />
      </div>

      {/* Seção complementar */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">
          Perguntas Frequentes
        </h2>

        <div className="space-y-4 text-gray-700">
          <div>
            <h3 className="font-semibold">
              Este conteúdo substitui consultoria profissional?
            </h3>
            <p>
              Não. O conteúdo tem caráter informativo e educacional.
              Para decisões financeiras importantes, consulte um especialista.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              As regras podem mudar?
            </h3>
            <p>
              Sim. Sempre consulte fontes oficiais para verificar
              atualizações recentes.
            </p>
          </div>
        </div>
      </section>

    </main>
  )
}