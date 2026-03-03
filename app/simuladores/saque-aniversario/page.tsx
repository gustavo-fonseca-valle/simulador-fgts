import AdsenseBlock from "@/components/AdsenseBlock"

export const metadata = {
  title: "Simulador Saque-Aniversário FGTS 2026 - Calcule seu valor",
  description:
    "Calcule quanto você pode sacar no saque-aniversário do FGTS e entenda as vantagens, riscos e regras atualizadas.",
}

export default function SaqueAniversarioPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">

      <h1 className="text-4xl font-bold mb-6">
        Simulador do Saque-Aniversário do FGTS
      </h1>

      <p className="text-lg text-gray-700 mb-6">
        O saque-aniversário permite retirar parte do saldo do FGTS todos
        os anos. Use nosso simulador para estimar o valor disponível e
        entenda se essa modalidade realmente vale a pena para sua situação.
      </p>

      {/* ========================= */}
      {/* AQUI ENTRA SEU FORM REAL  */}
      {/* ========================= */}

      <section className="my-8 p-6 border rounded-xl">
        <h2 className="text-xl font-semibold mb-4">
          Calcule seu saque
        </h2>

        <p className="text-gray-600">
          (Insira aqui seu formulário e cálculo atual)
        </p>
      </section>

      {/* Anúncio após conteúdo inicial */}
      <div className="my-10">
        <AdsenseBlock />
      </div>

      {/* Conteúdo educativo */}
      <section className="mt-10 space-y-6 text-gray-800">

        <h2 className="text-2xl font-semibold">
          O que é o saque-aniversário?
        </h2>

        <p>
          O saque-aniversário é uma modalidade do FGTS que permite ao
          trabalhador sacar anualmente uma parte do saldo disponível
          no mês do seu aniversário. Ao optar por essa modalidade,
          o trabalhador abre mão do saque integral em caso de demissão
          sem justa causa.
        </p>

        <h2 className="text-2xl font-semibold">
          Como o valor é calculado?
        </h2>

        <p>
          O valor depende da faixa de saldo do trabalhador.
          Quanto maior o saldo, menor o percentual aplicado,
          mas há uma parcela adicional fixa.
        </p>

        <p>
          O cálculo combina:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Percentual sobre o saldo total</li>
          <li>Parcela adicional fixa por faixa</li>
        </ul>

        <h2 className="text-2xl font-semibold">
          Vantagens
        </h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>Acesso anual ao dinheiro</li>
          <li>Possibilidade de antecipação via bancos</li>
          <li>Alternativa para organização financeira</li>
        </ul>

        <h2 className="text-2xl font-semibold">
          Riscos e desvantagens
        </h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>Perda do saque integral na demissão</li>
          <li>Pode comprometer reserva de segurança</li>
          <li>Antecipações geram juros</li>
        </ul>

        <h2 className="text-2xl font-semibold">
          Saque-aniversário ou saque-rescisão?
        </h2>

        <p>
          O saque-rescisão permite sacar todo o saldo do FGTS
          em caso de demissão sem justa causa.
          Já o saque-aniversário permite retiradas anuais,
          mas limita o saque em caso de demissão.
        </p>

        <p>
          A escolha ideal depende do seu perfil profissional,
          estabilidade no emprego e necessidade de liquidez.
        </p>

      </section>

      {/* FAQ */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">
          Perguntas Frequentes
        </h2>

        <div className="space-y-4">

          <div>
            <h3 className="font-semibold">
              Posso cancelar o saque-aniversário?
            </h3>
            <p>
              Sim, mas o retorno ao saque-rescisão pode ter período de carência.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              Quem escolhe saque-aniversário perde a multa de 40%?
            </h3>
            <p>
              Não. A multa continua sendo paga normalmente pelo empregador.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              Vale a pena aderir?
            </h3>
            <p>
              Depende do seu planejamento financeiro e estabilidade profissional.
              Avalie riscos antes de decidir.
            </p>
          </div>

        </div>
      </section>

    </main>
  )
}