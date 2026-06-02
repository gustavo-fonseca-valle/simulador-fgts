import Link from "next/link"
import AdsenseBlock from "@/components/AdsenseBlock"
import EducationalContent from "@/components/EducationalContent"

export const metadata = {
  title:
    "Simulador FGTS 2026: Calcule Saldo, Multa de 40% e Saque-Aniversário",
  description:
    "Calcule seu FGTS atualizado em 2026. Simule saldo acumulado, multa rescisória de 40%, saque-aniversário e descubra quanto você pode receber na demissão.",
}

export default function HomePage() {
  return (
    <main className="max-w-screen-sm sm:max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

      {/* HERO */}
      <section className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Simulador FGTS 2026: Calcule seu saldo, multa de 40% e saque-aniversário
        </h1>

        <p className="text-lg text-gray-700 mb-4">
          Descubra quanto você pode receber do FGTS utilizando nossos
          simuladores gratuitos e atualizados.
        </p>

        <p className="text-gray-700 mb-4">
          Faça simulações de multa rescisória, saque-aniversário,
          saldo acumulado e entenda seus direitos trabalhistas com
          conteúdos explicativos desenvolvidos para trabalhadores brasileiros.
        </p>

        <p className="font-medium">
          Utilize os simuladores abaixo gratuitamente.
        </p>
      </section>

      {/* SIMULADORES */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">
          Simuladores de FGTS Online
        </h2>

        <div className="grid gap-6 md:grid-cols-2">

          <Link
            href="/simuladores/multa-40"
            className="border rounded-xl p-6 hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold mb-2">
              Simulador Multa de 40%
            </h3>

            <p className="text-gray-600">
              Descubra quanto poderá receber de multa rescisória em caso de
              demissão sem justa causa.
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
              Consulte os valores aproximados disponíveis para saque conforme
              a tabela vigente.
            </p>
          </Link>

        </div>
      </section>

      {/* GUIAS */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">
          Guias e Artigos sobre FGTS
        </h2>

        <div className="grid gap-4">

          <Link
            href="/blog/como-calcular-fgts"
            className="text-blue-600 hover:underline"
          >
            Como calcular FGTS em 2026 passo a passo
          </Link>

          <Link
            href="/blog/fgts-demissao"
            className="text-blue-600 hover:underline"
          >
            FGTS na demissão: quanto você recebe
          </Link>

          <Link
            href="/blog/tabela-saque-aniversario-2026"
            className="text-blue-600 hover:underline"
          >
            Tabela saque-aniversário FGTS 2026
          </Link>

          <Link
            href="/blog/fgts-rende-quanto"
            className="text-blue-600 hover:underline"
          >
            Quanto rende o FGTS por ano
          </Link>

        </div>
      </section>

      {/* CONTEÚDO LONGO PARA SEO E ADSENSE */}
      <EducationalContent />

      {/* ANÚNCIO */}
      <div className="my-16 min-h-[120px]">
        <AdsenseBlock />
      </div>

      {/* FAQ */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold mb-8">
          Perguntas Frequentes sobre FGTS
        </h2>

        <div className="space-y-8">

          <div>
            <h3 className="font-semibold mb-2">
              Quem tem direito ao FGTS?
            </h3>

            <p>
              Trabalhadores contratados pelo regime CLT, empregados
              domésticos e outras categorias previstas na legislação.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">
              Como consultar o saldo do FGTS?
            </h3>

            <p>
              O saldo pode ser consultado pelos canais oficiais da Caixa
              Econômica Federal.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">
              Quanto rende o FGTS?
            </h3>

            <p>
              O FGTS possui rendimento anual definido pela legislação e pode
              receber distribuição adicional de resultados.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">
              Quem recebe a multa de 40%?
            </h3>

            <p>
              Trabalhadores dispensados sem justa causa possuem direito à
              multa rescisória sobre o saldo do FGTS.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">
              Posso sacar o FGTS sem ser demitido?
            </h3>

            <p>
              Sim. Existem situações previstas em lei, como compra da casa
              própria, aposentadoria e saque-aniversário.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">
              O saque-aniversário vale a pena?
            </h3>

            <p>
              A resposta depende do planejamento financeiro de cada
              trabalhador e da necessidade de acesso antecipado aos recursos.
            </p>
          </div>

        </div>
      </section>

      {/* SOBRE */}
      <section className="border-t mt-20 pt-10 text-gray-600">
        <h2 className="text-2xl font-semibold mb-4">
          Sobre o Simulador FGTS
        </h2>

        <p className="mb-4">
          O Simulador FGTS foi criado para ajudar trabalhadores brasileiros
          a entender melhor seus direitos por meio de simuladores gratuitos,
          guias explicativos e conteúdos educacionais.
        </p>

        <p className="mb-4">
          Nosso objetivo é fornecer informações claras, atualizadas e de fácil
          compreensão para auxiliar no planejamento financeiro e na tomada de
          decisões relacionadas ao Fundo de Garantia do Tempo de Serviço.
        </p>

        <p className="text-sm">
          Este site possui caráter exclusivamente informativo e não possui
          vínculo com a Caixa Econômica Federal, Ministério do Trabalho ou
          qualquer órgão governamental.
        </p>
      </section>

    </main>
  )
}