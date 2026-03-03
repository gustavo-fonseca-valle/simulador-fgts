"use client"

import { useState } from "react"

export const metadata = {
  title: "Simulador de Multa de 40% do FGTS",
  description:
    "Calcule online o valor da multa de 40% do FGTS em caso de demissão sem justa causa. Simulador gratuito e atualizado.",
}

export default function Multa40Page() {
  const [saldo, setSaldo] = useState("")
  const [resultado, setResultado] = useState<number | null>(null)

  function calcularMulta(e: React.FormEvent) {
    e.preventDefault()

    const saldoNumerico = parseFloat(saldo.replace(",", "."))

    if (!isNaN(saldoNumerico) && saldoNumerico > 0) {
      const multa = saldoNumerico * 0.4
      setResultado(multa)
    } else {
      setResultado(null)
    }
  }

  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-6">
        Simulador da Multa de 40% do FGTS
      </h1>

      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        A multa de 40% do FGTS é um direito do trabalhador dispensado sem justa
        causa. O valor corresponde a 40% sobre todo o saldo acumulado na conta
        do FGTS durante o contrato de trabalho.
      </p>

      <p className="text-gray-700 mb-8">
        Utilize o simulador abaixo para estimar quanto você poderá receber de
        multa rescisória.
      </p>

      {/* FORMULÁRIO */}
      <section className="bg-gray-50 p-6 rounded-xl shadow-sm mb-10">
        <form onSubmit={calcularMulta} className="space-y-4">
          <div>
            <label className="block mb-2 font-medium">
              Informe o saldo total do FGTS (R$):
            </label>
            <input
              type="number"
              step="0.01"
              min="0"
              placeholder="Ex: 15000"
              value={saldo}
              onChange={(e) => setSaldo(e.target.value)}
              className="w-full border rounded-lg px-4 py-2"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Calcular Multa
          </button>
        </form>

        {resultado !== null && (
          <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-lg font-semibold">
              Valor estimado da multa:
            </p>
            <p className="text-2xl font-bold text-green-700">
              R$ {resultado.toFixed(2)}
            </p>
          </div>
        )}
      </section>

      {/* CONTEÚDO ADICIONAL */}
      <section className="space-y-6 text-gray-700 leading-relaxed">
        <h2 className="text-2xl font-semibold">
          Quando a multa de 40% é paga?
        </h2>

        <p>
          A multa é devida quando ocorre demissão sem justa causa. O empregador
          deve pagar 40% sobre todos os depósitos realizados na conta do FGTS
          durante o período de trabalho.
        </p>

        <p>
          Em caso de acordo entre empregador e empregado, o percentual pode ser
          reduzido para 20%, conforme previsto na legislação trabalhista.
        </p>

        <h2 className="text-2xl font-semibold">
          O que entra no cálculo?
        </h2>

        <p>
          O cálculo considera o saldo total disponível na conta vinculada do
          FGTS. Valores já sacados anteriormente não entram na base da multa.
        </p>

        <p>
          Para obter o valor exato, recomenda-se consultar o extrato oficial do
          FGTS junto à Caixa Econômica Federal.
        </p>
      </section>
    </main>
  )
}