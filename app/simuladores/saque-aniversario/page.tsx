import SaqueAniversarioForm from "./SaqueAniversarioForm"
import AdsenseBlock from "@/components/AdsenseBlock"

export const metadata = {
  title: "Simulador de Saque-Aniversário do FGTS",
  description:
    "Calcule quanto você pode sacar no saque-aniversário do FGTS com base no saldo atual. Simulador atualizado com percentuais oficiais.",
}

export default function SaqueAniversarioPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12">

      <h1 className="text-4xl font-bold mb-6">
        Simulador de Saque-Aniversário do FGTS
      </h1>

      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        O saque-aniversário é uma modalidade que permite ao trabalhador retirar
        anualmente uma parte do saldo do FGTS no mês de seu aniversário.
      </p>

      <p className="text-gray-700 mb-8">
        O valor disponível depende da faixa de saldo na conta vinculada.
        Utilize o simulador abaixo para estimar quanto você poderá sacar.
      </p>

      {/* ANÚNCIO */}
      <div className="my-10">
        <AdsenseBlock />
      </div>

      {/* FORMULÁRIO */}
      <SaqueAniversarioForm />

      {/* ANÚNCIO */}
      <div className="my-10">
        <AdsenseBlock />
      </div>

      {/* CONTEÚDO EDUCATIVO */}
      <section className="mt-12 space-y-6 text-gray-700 leading-relaxed">

        <h2 className="text-2xl font-semibold">
          Como funciona o cálculo do saque-aniversário?
        </h2>

        <p>
          O valor é calculado aplicando um percentual sobre o saldo total do
          FGTS, acrescido de uma parcela adicional fixa, conforme a faixa de
          saldo.
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Até R$ 500 → 50%</li>
          <li>De R$ 500,01 a R$ 1.000 → 40% + R$ 50</li>
          <li>De R$ 1.000,01 a R$ 5.000 → 30% + R$ 150</li>
          <li>De R$ 5.000,01 a R$ 10.000 → 20% + R$ 650</li>
          <li>De R$ 10.000,01 a R$ 15.000 → 15% + R$ 1.150</li>
          <li>De R$ 15.000,01 a R$ 20.000 → 10% + R$ 1.900</li>
          <li>Acima de R$ 20.000 → 5% + R$ 2.900</li>
        </ul>

        <h2 className="text-2xl font-semibold">
          O que acontece em caso de demissão?
        </h2>

        <p>
          Quem opta pelo saque-aniversário não pode sacar o valor total do FGTS
          em caso de demissão sem justa causa. Nessa situação, o trabalhador
          recebe apenas a multa rescisória de 40%, permanecendo o saldo retido
          para saques futuros.
        </p>

        <h2 className="text-2xl font-semibold">
          Vale a pena aderir?
        </h2>

        <p>
          A decisão depende da necessidade de liquidez imediata e do planejamento
          financeiro pessoal. É importante avaliar os riscos antes de optar pela
          modalidade.
        </p>

      </section>

    </main>
  )
}