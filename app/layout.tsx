import type { ReactNode } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import "./globals.css"

export const metadata = {
  title: "Guia FGTS 2026",
  description: "Simuladores e guia completo sobre FGTS.",
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="pt-br">
      <body>
        <Header />
        <main style={{ maxWidth: 900, margin: "0 auto", padding: 20 }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}