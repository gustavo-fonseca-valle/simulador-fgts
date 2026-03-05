export const metadata = {
  title: "Tabela Saque-Aniversário FGTS 2026",
  description:
    "Veja a tabela atualizada do saque-aniversário do FGTS em 2026 e descubra quanto você pode sacar de acordo com seu saldo.",
}

export default function TabelaSaqueAniversarioPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">
        Tabela do Saque-Aniversário do FGTS 2026
      </h1>

      <p className="mb-4">
        O saque-aniversário do FGTS permite que trabalhadores retirem uma parte
        do saldo do Fundo de Garantia todos os anos, no mês do seu aniversário.
        O valor disponível para saque depende do saldo total existente nas
        contas do FGTS.
      </p>

      <p className="mb-6">
        A seguir você pode conferir a tabela atual utilizada para calcular o
        valor disponível no saque-aniversário.
      </p>

      <h2 className="text-2xl font-semibold mb-4">
        Tabela oficial do saque-aniversário
      </h2>

      <div className="overflow-x-auto mb-8">
        <table className="w-full border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2 text-left">Faixa de saldo (R$)</th>
              <th className="border px-4 py-2 text-left">Alíquota</th>
              <th className="border px-4 py-2 text-left">Parcela adicional</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Até 500</td>
              <td className="border px-4 py-2">50%</td>
              <td className="border px-4 py-2">—</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">De 500,01 até 1.000</td>
              <td className="border px-4 py-2">40%</td>
              <td className="border px-4 py-2">R$ 50</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">De 1.000,01 até 5.000</td>
              <td className="border px-4 py-2">30%</td>
              <td className="border px-4 py-2">R$ 150</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">De 5.000,01 até 10.000</td>
              <td className="border px-4 py-2">20%</td>
              <td className="border px-4 py-2">R$ 650</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">De 10.000,01 até 15.000</td>
              <td className="border px-4 py-2">15%</td>
              <td className="border px-4 py-2">R$ 1.150</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">De 15.000,01 até 20.000</td>
              <td className="border px-4 py-2">10%</td>
              <td className="border px-4 py-2">R$ 1.900</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Acima de 20.000</td>
              <td className="border px-4 py-2">5%</td>
              <td className="border px-4 py-2">R$ 2.900</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-semibold mb-4">
        Como calcular o valor do saque-aniversário
      </h2>

      <p className="mb-4">
        Para calcular o valor disponível para saque, é necessário aplicar a
        alíquota correspondente à faixa de saldo e depois somar a parcela
        adicional indicada na tabela.
      </p>

      <p className="mb-4">
        Por exemplo: se o trabalhador possui R$ 3.000 de saldo no FGTS, ele se
        enquadra na faixa de 30%. Nesse caso o cálculo seria:
      </p>

      <p className="mb-6 font-medium">
        30% de R$ 3.000 + R$ 150 = R$ 1.050 disponíveis para saque.
      </p>

      <h2 className="text-2xl font-semibold mb-4">
        Vale a pena aderir ao saque-aniversário?
      </h2>

      <p className="mb-4">
        A escolha pelo saque-aniversário pode ser interessante para quem deseja
        receber uma parte do saldo do FGTS todos os anos. Porém, quem opta por
        essa modalidade perde o direito de sacar o saldo total do FGTS em caso
        de demissão sem justa causa, mantendo apenas o direito à multa
        rescisória.
      </p>

      <p className="mb-4">
        Antes de aderir, é importante avaliar sua situação financeira e
        considerar se o saque anual realmente é vantajoso para seu planejamento.
      </p>

      <h2 className="text-2xl font-semibold mb-4">
        Simule seu saque do FGTS
      </h2>

      <p>
        Para descobrir quanto você poderia sacar utilizando a tabela acima,
        utilize nosso simulador de FGTS disponível na página inicial do site.
        Ele calcula automaticamente o valor aproximado com base no seu saldo
        informado.
      </p>
    </main>
  )
}