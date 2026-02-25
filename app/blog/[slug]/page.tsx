import { posts } from "@/lib/posts"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}) {
  const post = posts.find((p) => p.slug === params.slug)

  if (!post) {
    return {
      title: "Artigo não encontrado",
    }
  }

  return {
    title: post.title + " | FGTS 2026",
    description: post.description,
  }
}

export default function PostPage({
  params,
}: {
  params: { slug: string }
}) {
  const post = posts.find((p) => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <main
      style={{
        maxWidth: 800,
        margin: "0 auto",
        padding: 20,
        lineHeight: 1.7,
      }}
    >
      <h1>{post.title}</h1>

      <p style={{ color: "#666" }}>{post.description}</p>

      <hr style={{ margin: "30px 0" }} />

      <article style={{ whiteSpace: "pre-line" }}>
        {post.content}
      </article>
    </main>
  )
}