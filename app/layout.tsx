import type { ReactNode } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Script from "next/script"
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
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5817280149271380"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>

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