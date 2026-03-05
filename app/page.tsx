import Link from "next/link"
import AdsenseBlock from "@/components/AdsenseBlock"

export const metadata = {
  title: "Simulador FGTS 2026 | Multa 40% e Saque-Aniversário",
  description:
    "Use simuladores gratuitos de FGTS e entenda multa de 40%, saque-aniversário e quanto rende o FGTS por ano.",
}

export default function HomePage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-10">

      {/* HERO */}
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-6 leading-tight">
          Simulador FGTS 2026 e Guias Completos
        </h1>

        <p className="text-lg text-gray-700 mb-4">
          Utilize nossos simuladores gratuitos para calcular valores
          relacionados ao FGTS e entender melhor seus direitos
          trabalhistas.
        </p>

        <p className="text-gray-700">
          O site oferece ferramentas para calcular multa de 40%,
          saque-aniversário e conteúdos explicativos sobre como
          funciona o Fundo de Garantia.
        </p>
      </section>

      {/* SIMULADORES */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">
          Simuladores de FGTS
        </h2>

        <div className="grid gap-6 md:grid-cols-2">

          <Link
            href="/simuladores/multa-40"
            className="border rounded-xl p-6 hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold mb-2">
              Simulador Multa 40% FGTS
            </h3>
            <p className="text-gray-600">
              Calcule o valor estimado da multa de 40% do FGTS
              em caso de demissão sem justa causa.
            </p>
          </Link>

          <Link
            href="/simuladores/saque-aniversario"
            className="border rounded-xl p-6 hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold mb-2">
              Simulador Saque-Aniversário
            </h3>
            <p className="text-gray-600">
              Descubra quanto você pode sacar anualmente
              escolhendo a modalidade saque-aniversário.
            </p>
          </Link>

        </div>
      </section>

      {/* GUIAS IMPORTANTES */}
      <section className="mb-12">

        <h2 className="text-2xl font-semibold mb-6">
          Guias sobre FGTS
        </h2>

        <div className="space-y-3 text-blue-600">

          <Link href="/fgts-rende-quanto-por-ano" className="block hover:underline">
            Quanto rende o FGTS por ano?
          </Link>

          <Link href="/como-calcular-fgts-de-demissao" className="block hover:underline">
            Como calcular o FGTS na demissão
          </Link>

          <Link href="/tabela-saque-aniversario-fgts-2026" className="block hover:underline">
            Tabela saque-aniversário FGTS 2026
          </Link>

        </div>

      </section>

      {/* ANÚNCIO */}
      <div className="my-12">
        <AdsenseBlock />
      </div>

      {/* CONTEÚDO */}
      <section className="space-y-6 text-gray-800">

        <h2 className="text-2xl font-semibold">
          Como funcionam nossos simuladores?
        </h2>

        <p>
          Os simuladores utilizam regras públicas conhecidas
          do Fundo de Garantia do Tempo de Serviço (FGTS)
          para gerar estimativas aproximadas.
        </p>

        <h2 className="text-2xl font-semibold">
          Informação clara e responsável
        </h2>

        <p>
          Nosso objetivo é explicar de forma simples como
          funcionam regras trabalhistas e financeiras,
          facilitando o entendimento dos cálculos.
        </p>

      </section>

      {/* FAQ SEO */}
      <section className="mt-16">

        <h2 className="text-2xl font-semibold mb-6">
          Perguntas frequentes sobre FGTS
        </h2>

        <div className="space-y-6">

          <div>
            <h3 className="font-semibold">
              Quanto rende o FGTS por ano?
            </h3>
            <p className="text-gray-700">
              O FGTS rende 3% ao ano mais a distribuição
              anual de lucros definida pelo governo.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              Quem tem direito à multa de 40%?
            </h3>
            <p className="text-gray-700">
              Trabalhadores demitidos sem justa causa
              recebem 40% sobre o saldo do FGTS.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              Vale a pena aderir ao saque-aniversário?
            </h3>
            <p className="text-gray-700">
              Depende da sua estratégia financeira,
              pois ao aderir você perde o direito ao
              saque total do FGTS em caso de demissão.
            </p>
          </div>

        </div>

      </section>

    </main>
  )
}