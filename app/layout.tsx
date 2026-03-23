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
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* 🔥 FAVICON (IMPORTANTE PRA CONFIANÇA) */}
        <link rel="icon" href="/favicon.ico" />

        {/* 🔥 GOOGLE ADSENSE */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5817280149271380"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />

        {/* 🔥 STRUCTURED DATA */}
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

        {/* 🔥 ÁREA PRINCIPAL (MAIS LARGA E PROFISSIONAL) */}
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

          {/* 🔥 ESPAÇO PARA ANÚNCIO TOPO (OPCIONAL FUTURO) */}
          {/* <div className="mb-6">
            <AdsenseBlock />
          </div> */}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* 🔥 CONTEÚDO PRINCIPAL */}
            <div className="lg:col-span-2">
              {children}
            </div>

            {/* 🔥 SIDEBAR (OURO PRO ADSENSE) */}
            <aside className="hidden lg:block space-y-6">

              {/* Links internos (SEO + retenção) */}
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <h3 className="font-semibold mb-3">
                  🔥 Simuladores populares
                </h3>

                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="/simuladores/multa-40" className="hover:underline">
                      Multa de 40% do FGTS
                    </a>
                  </li>
                  <li>
                    <a href="/simuladores/fgts" className="hover:underline">
                      Calcular FGTS
                    </a>
                  </li>
                  <li>
                    <a href="/simuladores/saque-aniversario" className="hover:underline">
                      Saque-Aniversário
                    </a>
                  </li>
                </ul>
              </div>

            </aside>
          </div>
        </main>

        <Footer />

      </body>
    </html>
  )
}