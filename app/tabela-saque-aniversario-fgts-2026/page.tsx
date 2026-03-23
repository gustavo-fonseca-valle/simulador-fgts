export const metadata = {
  title: "Saque Aniversário 2026: Tabela completa e como calcular",
  description:
    "Confira a tabela do saque-aniversário FGTS 2026 e descubra quanto você pode sacar. Aprenda a calcular e use nosso simulador atualizado para 2026.",
}

export default function TabelaSaqueAniversarioPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">

      <h1 className="text-3xl font-bold mb-6">
        Saque Aniversário 2026: Tabela do saque-aniversario e cálculo
      </h1>

      <p className="mb-4">
        O <strong>saque-aniversário do FGTS 2026</strong> permite retirar uma parte do saldo todos os anos, no mês do seu aniversário. O valor depende do total disponível nas suas contas do FGTS.
      </p>

      <p className="mb-4">
        👉 <strong>Confira a tabela do saque-aniversario 2026 abaixo ou use o simulador para calcular automaticamente seu valor.</strong>
      </p>

      {/* CTA */}
      <p className="mb-6">
        👉{" "}
        <a href="/simuladores/saque-aniversario" className="text-blue-600 underline font-semibold">
          Calcular agora meu saque-aniversário
        </a>
      </p>

      <h2 className="text-2xl font-semibold mb-4">
        Tabela oficial do saque-aniversário FGTS 2026
      </h2>

      <div className="overflow-x-auto mb-8">
        <table className="min-w-full bg-white rounded-lg shadow-md border border-gray-200">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="px-4 py-3 text-left font-semibold text-sm uppercase">
                Faixa de saldo (R$)
              </th>
              <th className="px-4 py-3 text-left font-semibold text-sm uppercase">
                Alíquota
              </th>
              <th className="px-4 py-3 text-left font-semibold text-sm uppercase">
                Parcela adicional
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {[
              ["Até 500", "50%", "—"],
              ["De 500,01 até 1.000", "40%", "R$ 50"],
              ["De 1.000,01 até 5.000", "30%", "R$ 150"],
              ["De 5.000,01 até 10.000", "20%", "R$ 650"],
              ["De 10.000,01 até 15.000", "15%", "R$ 1.150"],
              ["De 15.000,01 até 20.000", "10%", "R$ 1.900"],
              ["Acima de 20.000", "5%", "R$ 2.900"],
            ].map((row, idx) => (
              <tr
                key={idx}
                className="hover:bg-blue-50 transition-colors duration-200"
              >
                {row.map((cell, cellIdx) => (
                  <td
                    key={cellIdx}
                    className={`px-4 py-3 text-gray-800 ${
                      idx === 6 ? "font-semibold text-blue-700" : ""
                    }`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-semibold mb-4">
        Como calcular o saque-aniversário (exemplos práticos)
      </h2>

      <p className="mb-4">
        O cálculo é simples: aplique a alíquota sobre o saldo e some a parcela adicional.
      </p>

      <div className="bg-gray-50 border rounded-lg p-4 mb-6">
        <p className="mb-2 font-semibold">Exemplo 1 (saldo de R$ 3.000):</p>
        <p className="mb-2">30% de R$ 3.000 = R$ 900</p>
        <p className="mb-2">+ R$ 150</p>
        <p className="font-semibold">Total: R$ 1.050</p>
      </div>

      <div className="bg-gray-50 border rounded-lg p-4 mb-6">
        <p className="mb-2 font-semibold">Exemplo 2 (saldo de R$ 8.000):</p>
        <p className="mb-2">20% de R$ 8.000 = R$ 1.600</p>
        <p className="mb-2">+ R$ 650</p>
        <p className="font-semibold">Total: R$ 2.250</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">
        Saque-aniversário ou saque-rescisão: qual escolher?
      </h2>

      <p className="mb-4">
        Ao optar pelo <strong>saque-aniversário 2026</strong>, você pode retirar valores todos os anos. Porém, em caso de demissão sem justa causa, não poderá sacar o saldo total do FGTS — apenas a multa de 40%.
      </p>

      <p className="mb-6">
        Já no saque-rescisão, você mantém o direito de sacar todo o saldo em caso de demissão. Avalie seu perfil antes de escolher.
      </p>

      <h2 className="text-2xl font-semibold mb-4">
        Vale a pena aderir ao saque-aniversário?
      </h2>

      <p className="mb-4">
        O saque-aniversário pode ser vantajoso para quem deseja acesso antecipado ao dinheiro. Porém, pode ser desvantajoso em caso de demissão.
      </p>

      <p className="mb-6">
        A decisão depende do seu planejamento financeiro e estabilidade no emprego.
      </p>

      {/* CTA FINAL */}
      <h2 className="text-2xl font-semibold mb-4">
        Descubra quanto você pode sacar agora
      </h2>

      <p>
        👉{" "}
        <a href="/simuladores/saque-aniversario" className="text-blue-600 underline font-semibold">
          Use nosso simulador gratuito
        </a>{" "}
        e veja o valor exato do seu saque em poucos segundos.
      </p>
    </main>
  )
}