import type { ReactNode } from "react"
import type { Metadata } from "next"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Script from "next/script"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://simuladorfgts.com.br"),
  title: {
    default: "Simulador FGTS 2026",
    template: "%s | Simulador FGTS",
  },
  description:
    "Simuladores e guias completos sobre FGTS, multa de 40%, saque-aniversário e direitos trabalhistas atualizados para 2026.",
  keywords: [
    "FGTS",
    "simulador FGTS",
    "multa 40 FGTS",
    "saque aniversário FGTS",
    "tabela FGTS 2026",
    "quanto rende o FGTS",
    "cálculo FGTS demissão",
  ],
  openGraph: {
    title: "Simulador FGTS 2026",
    description:
      "Simuladores e guias completos sobre FGTS, multa de 40% e saque-aniversário.",
    url: "https://simuladorfgts.com.br",
    siteName: "Simulador FGTS",
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <head>
        {/* Meta viewport para responsividade */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Fonts otimizadas */}
        <link
          rel="preload"
          href="/fonts/YourFont.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />

        {/* Script AdSense: não bloqueia renderização */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5817280149271380"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />

        {/* Structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Simulador FGTS",
              url: "https://simuladorfgts.com.br",
              description:
                "Simuladores e guias completos sobre FGTS, multa de 40% e saque-aniversário.",
            }),
          }}
        />
      </head>
      <body className="bg-gray-50 text-gray-900 antialiased">
        {/* Header responsivo */}
        <Header />

        {/* Conteúdo principal */}
        <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  )
}