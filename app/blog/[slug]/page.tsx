import { notFound } from "next/navigation"
import { posts } from "../../lib/posts"

type PageProps = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
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

  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <article>
        <header className="mb-10">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <p className="text-gray-600">{post.description}</p>
        </header>

        <section className="prose max-w-none text-gray-800 leading-relaxed whitespace-pre-line">
          {post.content}
        </section>
      </article>
    </main>
  )
}