import Link from "next/link"
import AdsenseBlock from "@/components/AdsenseBlock"

export const metadata = {
  title: "Simulador FGTS 2026 | Multa 40% e Saque-Aniversário",
  description:
    "Simule FGTS, multa de 40% e saque-aniversário. Ferramentas gratuitas e guias completos atualizados para 2026.",
}

export default function HomePage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-10">

      {/* HERO */}
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-6 leading-tight">
          Simulador FGTS 2026 e Guias Atualizados
        </h1>

        <p className="text-lg text-gray-700 mb-4">
          Calcule valores do FGTS de forma simples e rápida.
          Utilize nossos simuladores gratuitos e entenda seus direitos trabalhistas.
        </p>

        <p className="text-gray-700">
          Disponibilizamos ferramentas para calcular multa de 40%, saque-aniversário
          e conteúdos explicativos atualizados.
        </p>
      </section>

      {/* SIMULADORES (FOCO PRINCIPAL) */}
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
              Multa de 40% do FGTS
            </h3>
            <p className="text-gray-600">
              Calcule o valor da multa rescisória em caso de demissão sem justa causa.
            </p>
          </Link>

          <Link
            href="/simuladores/saque-aniversario"
            className="border rounded-xl p-6 hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold mb-2">
              Saque-Aniversário FGTS
            </h3>
            <p className="text-gray-600">
              Descubra quanto você pode sacar todos os anos.
            </p>
          </Link>

        </div>
      </section>

      {/* GUIAS (SEO FORTE) */}
      <section className="mb-12">

        <h2 className="text-2xl font-semibold mb-6">
          Guias sobre FGTS
        </h2>

        <div className="space-y-3 text-blue-600">

          <Link href="/blog/como-calcular-fgts" className="block hover:underline">
            Como calcular FGTS passo a passo
          </Link>

          <Link href="/blog/fgts-demissao" className="block hover:underline">
            FGTS na demissão: quanto você recebe
          </Link>

          <Link href="/blog/tabela-saque-aniversario-2026" className="block hover:underline">
            Tabela saque-aniversário FGTS 2026
          </Link>

        </div>

      </section>

      {/* ANÚNCIO */}
      <div className="my-12">
        <AdsenseBlock />
      </div>

      {/* CONTEÚDO (E-E-A-T) */}
      <section className="space-y-6 text-gray-800">

        <h2 className="text-2xl font-semibold">
          Como funcionam nossos simuladores?
        </h2>

        <p>
          Nossos simuladores utilizam regras públicas do FGTS para gerar estimativas
          baseadas em depósitos mensais, saldo acumulado e percentuais oficiais.
        </p>

        <h2 className="text-2xl font-semibold">
          Informações confiáveis
        </h2>

        <p>
          O conteúdo é baseado em regras oficiais divulgadas pelo governo e serve
          como apoio educacional para trabalhadores que desejam entender melhor seus direitos.
        </p>

        <p className="text-sm text-gray-500">
          Este site não possui vínculo com a Caixa Econômica Federal.
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
              O FGTS rende 3% ao ano mais distribuição de lucros.
              Veja detalhes em{" "}
              <Link href="/blog/fgts-rende-quanto-por-ano" className="text-blue-600 underline">
                nosso guia completo
              </Link>.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              Quem recebe multa de 40%?
            </h3>
            <p className="text-gray-700">
              Trabalhadores demitidos sem justa causa têm direito à multa
              sobre o saldo do FGTS.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              Saque-aniversário vale a pena?
            </h3>
            <p className="text-gray-700">
              Depende do seu planejamento financeiro, pois reduz o valor disponível
              em caso de demissão.
            </p>
          </div>

        </div>

      </section>

    </main>
  )
}