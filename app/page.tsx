import Link from "next/link"
import AdsenseBlock from "@/components/AdsenseBlock"
import EducationalContent from "@/components/EducationalContent"

export const metadata = {
  title:
    "Simulador FGTS 2026: Calcule Saldo, Multa de 40% e Saque-Aniversário",
  description:
    "Calcule seu FGTS atualizado em 2026. Simule saldo acumulado, multa rescisória de 40%, saque-aniversário e descubra quanto você pode receber.",
}

export default function HomePage() {
  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

      {/* HERO */}
      <section className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Simulador FGTS 2026
        </h1>

        <p className="text-lg text-gray-700 mb-4">
          Calcule gratuitamente seu saldo de FGTS, multa rescisória de 40%,
          saque-aniversário e entenda seus direitos trabalhistas.
        </p>

        <p className="text-gray-700">
          Além dos simuladores, oferecemos guias completos para ajudar
          trabalhadores brasileiros a entender melhor o funcionamento
          do Fundo de Garantia do Tempo de Serviço.
        </p>
      </section>

      {/* SIMULADORES */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">
          Simuladores de FGTS
        </h2>

        <div className="grid gap-6 md:grid-cols-2">

          <Link
            href="/simuladores/multa-40"
            className="border rounded-xl p-6 hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold mb-2">
              Simulador de Multa de 40%
            </h3>

            <p className="text-gray-600">
              Descubra quanto poderá receber em caso de demissão sem justa causa.
            </p>
          </Link>

          <Link
            href="/simuladores/saque-aniversario"
            className="border rounded-xl p-6 hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold mb-2">
              Simulador de Saque-Aniversário
            </h3>

            <p className="text-gray-600">
              Consulte os valores aproximados de saque conforme a tabela vigente.
            </p>
          </Link>

        </div>
      </section>

      {/* ARTIGOS */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">
          Guias e Artigos sobre FGTS
        </h2>

        <div className="grid gap-6 md:grid-cols-2">

          <div>
            <Link
              href="/blog/quem-pede-demissao-perde-fgts"
              className="font-semibold text-blue-600 hover:underline"
            >
              Quem pede demissão perde o FGTS?
            </Link>

            <p className="text-sm text-gray-600 mt-1">
              Entenda o que acontece com o saldo do FGTS quando o trabalhador pede demissão.
            </p>
          </div>

          <div>
            <Link
              href="/blog/como-consultar-fgts-pelo-cpf"
              className="font-semibold text-blue-600 hover:underline"
            >
              Como consultar o FGTS pelo CPF
            </Link>

            <p className="text-sm text-gray-600 mt-1">
              Aprenda a consultar saldo e extrato utilizando os canais oficiais.
            </p>
          </div>

          <div>
            <Link
              href="/blog/empresa-nao-depositou-fgts"
              className="font-semibold text-blue-600 hover:underline"
            >
              Empresa não depositou meu FGTS
            </Link>

            <p className="text-sm text-gray-600 mt-1">
              Saiba como identificar irregularidades e quais medidas tomar.
            </p>
          </div>

          <div>
            <Link
              href="/blog/fgts-contrato-experiencia"
              className="font-semibold text-blue-600 hover:underline"
            >
              Contrato de experiência tem FGTS?
            </Link>

            <p className="text-sm text-gray-600 mt-1">
              Descubra os direitos do trabalhador durante o período de experiência.
            </p>
          </div>

          <div>
            <Link
              href="/blog/saque-aniversario-vale-a-pena"
              className="font-semibold text-blue-600 hover:underline"
            >
              Saque-aniversário vale a pena?
            </Link>

            <p className="text-sm text-gray-600 mt-1">
              Veja vantagens, desvantagens e exemplos práticos.
            </p>
          </div>

          <div>
            <Link
              href="/blog/fgts-compra-imovel"
              className="font-semibold text-blue-600 hover:underline"
            >
              Como usar o FGTS para comprar imóvel
            </Link>

            <p className="text-sm text-gray-600 mt-1">
              Entenda quando o saldo do FGTS pode ser usado na casa própria.
            </p>
          </div>

        </div>

        <div className="mt-8">
          <Link
            href="/blog"
            className="font-semibold text-blue-600 hover:underline"
          >
            Ver todos os artigos →
          </Link>
        </div>

      </section>

      {/* TABELA */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">
          Quanto a empresa deposita no FGTS?
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border border-collapse">

            <thead>
              <tr>
                <th className="border p-3 text-left">
                  Salário
                </th>

                <th className="border p-3 text-left">
                  Depósito Mensal de FGTS
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border p-3">R$ 2.000</td>
                <td className="border p-3">R$ 160</td>
              </tr>

              <tr>
                <td className="border p-3">R$ 3.000</td>
                <td className="border p-3">R$ 240</td>
              </tr>

              <tr>
                <td className="border p-3">R$ 5.000</td>
                <td className="border p-3">R$ 400</td>
              </tr>

              <tr>
                <td className="border p-3">R$ 10.000</td>
                <td className="border p-3">R$ 800</td>
              </tr>
            </tbody>

          </table>
        </div>
      </section>

      {/* CONTEÚDO LONGO */}
      <EducationalContent />

      {/* ADSENSE */}
      <div className="my-16 min-h-[120px]">
        <AdsenseBlock />
      </div>

      {/* FAQ */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold mb-8">
          Perguntas Frequentes
        </h2>

        <div className="space-y-8">

          <div>
            <h3 className="font-semibold mb-2">
              Quem tem direito ao FGTS?
            </h3>

            <p>
              Trabalhadores contratados pela CLT e outras categorias previstas em lei.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">
              Posso sacar o FGTS sem ser demitido?
            </h3>

            <p>
              Sim. Existem hipóteses como compra de imóvel, aposentadoria e saque-aniversário.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">
              Quem recebe a multa de 40%?
            </h3>

            <p>
              Trabalhadores dispensados sem justa causa.
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
          O Simulador FGTS é um projeto independente criado para ajudar trabalhadores
          brasileiros a entender seus direitos e tomar decisões mais informadas.
        </p>

        <p>
          Conheça mais sobre o projeto em nossa{" "}
          <Link
            href="/sobre"
            className="text-blue-600 hover:underline"
          >
            página Sobre
          </Link>.
        </p>
      </section>

    </main>
  )
}