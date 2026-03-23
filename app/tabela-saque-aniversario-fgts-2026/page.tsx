export const metadata = {
  title: "Tabela Saque-Aniversário FGTS 2026: veja quanto você pode sacar",
  description:
    "Confira a tabela do saque-aniversário FGTS 2026 e veja quanto você pode sacar com base no seu saldo. Cálculo atualizado e exemplos práticos.",
}

export default function TabelaSaqueAniversarioPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      
      <h1 className="text-3xl font-bold mb-6">
        Tabela Saque-Aniversário FGTS 2026: veja quanto você pode sacar
      </h1>

      <p className="mb-4">
        O saque-aniversário do FGTS permite retirar uma parte do saldo todos os anos, no mês do seu aniversário. O valor depende do total disponível nas suas contas do FGTS.
      </p>

      <p className="mb-4">
        👉 <strong>Use a tabela abaixo para descobrir quanto você pode sacar ou utilize o simulador para calcular automaticamente.</strong>
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
        Ao optar pelo saque-aniversário, você pode retirar valores todos os anos. Porém, em caso de demissão sem justa causa, não poderá sacar o saldo total do FGTS — apenas a multa de 40%.
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