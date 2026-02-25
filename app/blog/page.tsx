import Link from "next/link"
import { posts } from "@/lib/posts"

export const metadata = {
  title: "Blog FGTS 2026 | Guias e Simuladores Atualizados",
  description:
    "Artigos completos sobre FGTS 2026, saque-aniversário, multa de 40% e saque-rescisão. Conteúdo atualizado e explicativo.",
}

export default function BlogPage() {
  return (
    <main
      style={{
        maxWidth: 900,
        margin: "0 auto",
        padding: 20,
        lineHeight: 1.6,
      }}
    >
      <h1>Artigos sobre FGTS 2026</h1>

      <p>
        Confira nossos guias completos sobre <strong>FGTS</strong>,
        <strong> saque-aniversário</strong>, <strong>multa de 40%</strong> e
        outras dúvidas frequentes dos trabalhadores brasileiros.
      </p>

      <hr style={{ margin: "30px 0" }} />

      {posts.map((post) => (
        <article
          key={post.slug}
          style={{
            marginBottom: 30,
            paddingBottom: 20,
            borderBottom: "1px solid #eee",
          }}
        >
          <Link
            href={`/blog/${post.slug}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <h2 style={{ marginBottom: 10 }}>{post.title}</h2>
          </Link>

          <p style={{ color: "#555" }}>{post.description}</p>

          <Link href={`/blog/${post.slug}`}>
            <span style={{ fontSize: 14 }}>Ler artigo completo →</span>
          </Link>
        </article>
      ))}
    </main>
  )
}