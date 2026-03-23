import type { ReactNode } from "react"
import type { Metadata } from "next"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Script from "next/script"
import Link from "next/link"
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* 🔥 FAVICONS (IMPORTANTE PRA GOOGLE + MOBILE) */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icon-192.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* 🔥 GOOGLE ADSENSE */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5817280149271380"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />

        {/* 🔥 STRUCTURED DATA (LOGO + BRAND) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Simulador FGTS",
              url: "https://simuladorfgts.com.br",
              logo: "https://simuladorfgts.com.br/logo.png",
            }),
          }}
        />

        {/* 🔥 WEBSITE STRUCTURE */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Simulador FGTS",
              url: "https://simuladorfgts.com.br",
            }),
          }}
        />
      </head>

      <body className="bg-gray-50 text-gray-900 antialiased">

        <Header />

        {/* 🔥 CONTAINER PRINCIPAL */}
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* 🔥 CONTEÚDO */}
            <div className="lg:col-span-2">
              {children}
            </div>

            {/* 🔥 SIDEBAR (FOCADA EM CONVERSÃO) */}
            <aside className="hidden lg:block space-y-6">

              {/* 🔥 BLOCO CTA (CLIQUE = DINHEIRO) */}
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <h3 className="font-semibold mb-3">
                  🔥 Simule agora
                </h3>

                <div className="space-y-2">
                  <Link
                    href="/simuladores/fgts"
                    className="block bg-green-600 text-white text-center py-2 rounded-lg hover:bg-green-700 transition"
                  >
                    📊 Calcular FGTS
                  </Link>

                  <Link
                    href="/simuladores/multa-40"
                    className="block bg-blue-600 text-white text-center py-2 rounded-lg hover:bg-blue-700 transition"
                  >
                    💰 Multa 40%
                  </Link>

                  <Link
                    href="/simuladores/saque-aniversario"
                    className="block bg-purple-600 text-white text-center py-2 rounded-lg hover:bg-purple-700 transition"
                  >
                    🎂 Saque-Aniversário
                  </Link>
                </div>
              </div>

              {/* 🔥 ESPAÇO DE ANÚNCIO (PADRÃO 300x250) */}
              <div className="bg-white p-4 rounded-xl shadow-sm min-h-[250px] flex items-center justify-center">
                {/* <AdsenseBlock /> */}
                <span className="text-gray-400 text-sm">
                  Espaço para anúncio
                </span>
              </div>

            </aside>
          </div>
        </main>

        <Footer />

      </body>
    </html>
  )
}