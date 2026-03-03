import AdsenseBlock from "@/components/AdsenseBlock"

export const metadata = {
  title: "Simulador de Multa de 40% do FGTS - Cálculo Atualizado",
  description:
    "Calcule a multa de 40% do FGTS em caso de demissão sem justa causa. Veja como funciona o cálculo e exemplos práticos.",
}

export default function Multa40Page() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">

      <h1 className="text-4xl font-bold mb-6">
        Simulador de Multa de 40% do FGTS
      </h1>

      <p className="text-lg text-gray-700 mb-6">
        A multa de 40% do FGTS é um direito garantido ao trabalhador
        demitido sem justa causa. Nesta página você pode calcular
        rapidamente o valor estimado e entender como funciona o cálculo.
      </p>

      {/* ===================== */}
      {/* AQUI ENTRA SEU FORM */}
      {/* ===================== */}

      <section className="my-8 p-6 border rounded-xl">
        <h2 className="text-xl font-semibold mb-4">
          Calcule agora
        </h2>

        {/* Seu formulário existente aqui */}
        <p className="text-gray-600">
          (Insira aqui seu formulário de cálculo)
        </p>
      </section>

      {/* Anúncio após conteúdo inicial */}
      <div className="my-10">
        <AdsenseBlock />
      </div>

      {/* Conteúdo Educativo */}
      <section className="mt-10 space-y-6 text-gray-800">

        <h2 className="text-2xl font-semibold">
          Como funciona a multa de 40% do FGTS?
        </h2>

        <p>
          A multa de 40% é paga pelo empregador quando ocorre demissão
          sem justa causa. O valor é calculado sobre todos os depósitos
          realizados na conta do FGTS durante o contrato de trabalho,
          incluindo correções monetárias.
        </p>

        <h2 className="text-2xl font-semibold">
          Como calcular?
        </h2>

        <p>
          O cálculo é simples:
        </p>

        <div className="bg-gray-100 p-4 rounded-lg font-mono">
          Total depositado no FGTS × 0,40
        </div>

        <p>
          Por exemplo, se o total depositado foi de R$ 30.000,
          a multa será de R$ 12.000.
        </p>

        <h2 className="text-2xl font-semibold">
          Quem tem direito?
        </h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>Trabalhadores demitidos sem justa causa</li>
          <li>Casos de rescisão indireta</li>
          <li>Encerramento das atividades da empresa</li>
        </ul>

        <h2 className="text-2xl font-semibold">
          Quem NÃO tem direito?
        </h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>Pedido de demissão</li>
          <li>Demissão por justa causa</li>
          <li>Alguns acordos formais previstos em lei</li>
        </ul>

      </section>

      {/* FAQ */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">
          Perguntas Frequentes
        </h2>

        <div className="space-y-4">

          <div>
            <h3 className="font-semibold">
              A multa é descontada do trabalhador?
            </h3>
            <p>
              Não. A multa é paga integralmente pelo empregador.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              Quem escolheu saque-aniversário recebe a multa?
            </h3>
            <p>
              Sim. A multa de 40% continua sendo devida normalmente.
            </p>
          </div>

        </div>
      </section>

    </main>
  )
}