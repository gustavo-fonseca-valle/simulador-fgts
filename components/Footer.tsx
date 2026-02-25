import Link from "next/link"

export default function Footer() {
  return (
    <footer
      style={{
        marginTop: 60,
        padding: "40px 20px",
        borderTop: "1px solid #ddd",
        background: "#f9f9f9",
        fontSize: 14,
      }}
    >
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <div style={{ marginBottom: 20 }}>
          <strong>Guia FGTS 2026</strong>
          <p style={{ marginTop: 10 }}>
            Portal informativo com simuladores e conteúdos atualizados sobre
            FGTS, Saque-Aniversário e Saque-Rescisão.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 20,
            marginBottom: 20,
          }}
        >
          <Link href="/">Home</Link>
          <Link href="/blog">Artigos</Link>
          <Link href="/sobre">Sobre</Link>
          <Link href="/contato">Contato</Link>
          <Link href="/politica-de-privacidade">Política de Privacidade</Link>
          <Link href="/termos-de-uso">Termos de Uso</Link>
        </div>

        <hr style={{ margin: "20px 0" }} />

        <p style={{ color: "#666" }}>
          © {new Date().getFullYear()} Guia FGTS. Todos os direitos reservados.
        </p>

        <p style={{ marginTop: 10, color: "#666" }}>
          Este site possui caráter exclusivamente informativo e não possui vínculo
          com órgãos governamentais.
        </p>
      </div>
    </footer>
  )
}