import Multa40Form from "./Multa40Form"
import AdsenseBlock from "@/components/AdsenseBlock"

export const metadata = {
  title: "Simulador de Multa de 40% do FGTS | Calcule sua rescisão",
  description:
    "Calcule online a multa de 40% do FGTS em caso de demissão sem justa causa. Simulador gratuito, rápido e atualizado.",
}

export default function Multa40Page() {
  const url = "https://www.simuladorfgts.com.br/simuladores/multa-40"

  return (
    <main className="max-w-3xl mx-auto px-6 py-12">

      {/* 🔥 SCHEMA CALCULADORA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Simulador de Multa de 40% do FGTS",
            applicationCategory: "FinanceApplication",
            operatingSystem: "Web",
            description:
              "Calcule a multa de 40% do FGTS em caso de demissão sem justa causa.",
            url: url,
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "BRL",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.8",
              ratingCount: "124",
            },
          }),
        }}
      />

      {/* 🔥 SCHEMA FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Como calcular a multa de 40% do FGTS?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Multiplique o saldo total do FGTS por 0,4.",
                },
              },
              {
                "@type": "Question",
                name: "Quem tem direito à multa de 40%?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Trabalhadores demitidos sem justa causa têm direito à multa de 40% sobre o saldo do FGTS.",
                },
              },
            ],
          }),
        }}
      />

      <h1 className="text-4xl font-bold mb-6">
        Simulador de Multa de 40% do FGTS
      </h1>

      <p className="text-gray-700 mb-8">
        Utilize o simulador abaixo para calcular o valor da multa rescisória
        de 40% sobre o saldo do FGTS em caso de demissão sem justa causa.
      </p>

      {/* ANÚNCIO */}
      <div className="my-10">
        <AdsenseBlock />
      </div>

      <Multa40Form />

      {/* ANÚNCIO */}
      <div className="my-10">
        <AdsenseBlock />
      </div>

      {/* 🔥 CONTEÚDO SEO (ESSENCIAL) */}
      <section className="prose max-w-none mt-12">
        <h2>Como calcular a multa de 40% do FGTS?</h2>
        <p>
          A multa de 40% do FGTS é calculada com base no saldo total acumulado
          durante o período de trabalho. Basta multiplicar o valor total do FGTS por 0,4.
        </p>

        <h2>Quando a multa de 40% é paga?</h2>
        <p>
          A multa é paga ao trabalhador em caso de demissão sem justa causa.
          Esse valor é uma compensação adicional ao saldo do FGTS.
        </p>

        <h2>Quem tem direito à multa do FGTS?</h2>
        <p>
          Todo trabalhador com carteira assinada que for demitido sem justa causa
          tem direito à multa de 40% sobre o saldo do FGTS.
        </p>
      </section>

      {/* 🔥 FAQ VISÍVEL */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Perguntas frequentes</h2>

        <h3 className="font-semibold">
          Como calcular a multa de 40% do FGTS?
        </h3>
        <p>Multiplique o saldo total do FGTS por 0,4.</p>

        <h3 className="font-semibold mt-4">
          Quem tem direito à multa?
        </h3>
        <p>Trabalhadores demitidos sem justa causa.</p>
      </section>

    </main>
  )
}