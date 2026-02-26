import Link from "next/link"
import { posts } from "../lib/posts"

export const metadata = {
  title: "Blog FGTS 2026",
  description:
    "Artigos atualizados sobre FGTS, saque-aniversário, multa de 40% e direitos trabalhistas.",
}

export default function BlogPage() {
  return (
    <main
      style={{
        maxWidth: 800,
        margin: "0 auto",
        padding: 20,
      }}
    >
      <h1 style={{ marginBottom: 30 }}>Blog FGTS 2026</h1>

      {posts.map((post) => (
        <article
          key={post.slug}
          style={{
            marginBottom: 30,
            paddingBottom: 20,
            borderBottom: "1px solid #eee",
          }}
        >
          <h2 style={{ marginBottom: 10 }}>
            <Link
              href={`/blog/${post.slug}`}
              style={{
                textDecoration: "none",
                color: "#1d4ed8",
              }}
            >
              {post.title}
            </Link>
          </h2>

          <p style={{ color: "#666" }}>{post.description}</p>

          <Link
            href={`/blog/${post.slug}`}
            style={{
              display: "inline-block",
              marginTop: 10,
              fontWeight: "bold",
              color: "#2563eb",
            }}
          >
            Ler artigo →
          </Link>
        </article>
      ))}
    </main>
  )
}