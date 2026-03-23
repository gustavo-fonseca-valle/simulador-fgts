import Multa40Form from "./Multa40Form"
import AdsenseBlock from "@/components/AdsenseBlock"
import Link from "next/link"

export const metadata = {
  title: "Simulador de Multa de 40% do FGTS | Calcule sua rescisão",
  description:
    "Calcule online a multa de 40% do FGTS em caso de demissão sem justa causa. Veja exemplos reais e descubra quanto você vai receber.",
}

export default function Multa40Page() {
  const url = "https://www.simuladorfgts.com.br/simuladores/multa-40"

  return (
    <main className="max-w-3xl mx-auto px-6 py-12">

      {/* SCHEMA */}
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
          }),
        }}
      />

      <h1 className="text-4xl font-bold mb-6">
        Simulador de Multa de 40% do FGTS
      </h1>

      {/* 🔥 RESPOSTA DIRETA (SEO FORTE) */}
      <p className="text-lg text-gray-700 mb-4">
        A multa de 40% do FGTS é um valor pago ao trabalhador em caso de demissão sem justa causa.
        Ela corresponde a <strong>40% de todo o saldo acumulado</strong> na conta do FGTS.
      </p>

      <p className="text-gray-700 mb-8">
        Use o simulador abaixo para descobrir rapidamente quanto você pode receber na rescisão.
      </p>

      {/* CTA */}
      <div className="mb-10 p-4 bg-green-50 border border-green-200 rounded-lg">
        👉 <strong>Calcule agora sua multa e veja quanto você vai receber</strong>
      </div>

      {/* ANÚNCIO */}
      <div className="my-10">
        <AdsenseBlock />
      </div>

      {/* FORM */}
      <Multa40Form />

      {/* ANÚNCIO */}
      <div className="my-10">
        <AdsenseBlock />
      </div>

      {/* 🔥 EXEMPLOS (SEO MUITO FORTE) */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">
          Exemplos de cálculo da multa de 40%
        </h2>

        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Saldo R$ 5.000 → Multa: <strong>R$ 2.000</strong></li>
          <li>Saldo R$ 10.000 → Multa: <strong>R$ 4.000</strong></li>
          <li>Saldo R$ 20.000 → Multa: <strong>R$ 8.000</strong></li>
        </ul>
      </section>

      {/* 🔥 EXPLICAÇÃO */}
      <section className="mt-12 space-y-6 text-gray-700">
        <h2 className="text-2xl font-semibold">
          Como calcular a multa de 40% do FGTS?
        </h2>

        <p>O cálculo é simples:</p>

        <pre className="bg-gray-100 p-4 rounded">
saldo do FGTS × 0,4
        </pre>

        <p>
          Após calcular a multa, você deve somar esse valor ao saldo total
          para saber quanto receberá na demissão.
        </p>

        <h2 className="text-2xl font-semibold">
          Quando a multa de 40% é paga?
        </h2>

        <p>
          A multa é paga quando ocorre demissão sem justa causa.
          Esse valor é uma compensação ao trabalhador.
        </p>

        <h2 className="text-2xl font-semibold">
          Quem tem direito à multa do FGTS?
        </h2>

        <p>
          Todo trabalhador com carteira assinada demitido sem justa causa
          tem direito à multa de 40% sobre o saldo do FGTS.
        </p>
      </section>

      {/* 🔥 INTERLINK (DINHEIRO) */}
      <section className="mt-12">
        <p className="text-blue-600">
          👉{" "}
          <Link href="/simuladores/saque-aniversario" className="underline">
            Veja também quanto você pode sacar no saque-aniversário
          </Link>
        </p>
      </section>

      {/* 🔥 FAQ */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4">
          Perguntas frequentes
        </h2>

        <div className="space-y-4 text-gray-700">
          <div>
            <h3 className="font-semibold">
              Como calcular a multa de 40% do FGTS?
            </h3>
            <p>Basta multiplicar o saldo total do FGTS por 0,4.</p>
          </div>

          <div>
            <h3 className="font-semibold">
              Quem tem direito à multa?
            </h3>
            <p>Trabalhadores demitidos sem justa causa.</p>
          </div>

          <div>
            <h3 className="font-semibold">
              A multa é obrigatória?
            </h3>
            <p>Sim, é prevista na legislação trabalhista.</p>
          </div>
        </div>
      </section>

    </main>
  )
}