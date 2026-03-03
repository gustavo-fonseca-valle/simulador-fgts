"use client"

import { useState } from "react"

export const metadata = {
  title: "Simulador de Saque-Aniversário do FGTS",
  description:
    "Calcule quanto você pode sacar no saque-aniversário do FGTS. Simulador atualizado com as faixas e parcelas adicionais.",
}

export default function SaqueAniversarioPage() {
  const [saldo, setSaldo] = useState("")
  const [resultado, setResultado] = useState<number | null>(null)

  function calcularSaque(e: React.FormEvent) {
    e.preventDefault()

    const saldoNumerico = parseFloat(saldo)

    if (isNaN(saldoNumerico) || saldoNumerico <= 0) {
      setResultado(null)
      return
    }

    let percentual = 0
    let parcelaAdicional = 0

    if (saldoNumerico <= 500) {
      percentual = 0.5
    } else if (saldoNumerico <= 1000) {
      percentual = 0.4
      parcelaAdicional = 50
    } else if (saldoNumerico <= 5000) {
      percentual = 0.3
      parcelaAdicional = 150
    } else if (saldoNumerico <= 10000) {
      percentual = 0.2
      parcelaAdicional = 650
    } else if (saldoNumerico <= 15000) {
      percentual = 0.15
      parcelaAdicional = 1150
    } else if (saldoNumerico <= 20000) {
      percentual = 0.1
      parcelaAdicional = 1900
    } else {
      percentual = 0.05
      parcelaAdicional = 2900
    }

    const valorSaque = saldoNumerico * percentual + parcelaAdicional
    setResultado(valorSaque)
  }

  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-6">
        Simulador de Saque-Aniversário do FGTS
      </h1>

      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        O saque-aniversário permite ao trabalhador retirar anualmente uma parte
        do saldo do FGTS no mês do seu aniversário. O valor liberado depende da
        faixa de saldo disponível na conta.
      </p>

      <p className="text-gray-700 mb-8">
        Utilize o simulador abaixo para estimar quanto você poderá sacar.
      </p>

      {/* FORMULÁRIO */}
      <section className="bg-gray-50 p-6 rounded-xl shadow-sm mb-10">
        <form onSubmit={calcularSaque} className="space-y-4">
          <div>
            <label className="block mb-2 font-medium">
              Informe o saldo total do FGTS (R$):
            </label>
            <input
              type="number"
              step="0.01"
              min="0"
              placeholder="Ex: 8000"
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
            Calcular Saque
          </button>
        </form>

        {resultado !== null && (
          <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-lg font-semibold">
              Valor estimado do saque-aniversário:
            </p>
            <p className="text-2xl font-bold text-green-700">
              R$ {resultado.toFixed(2)}
            </p>
          </div>
        )}
      </section>

      {/* TABELA EXPLICATIVA */}
      <section className="space-y-6 text-gray-700 leading-relaxed">
        <h2 className="text-2xl font-semibold">
          Como funciona o cálculo?
        </h2>

        <p>
          O valor do saque-aniversário é calculado aplicando um percentual sobre
          o saldo total do FGTS, acrescido de uma parcela adicional fixa,
          conforme a faixa de saldo.
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
          Vale a pena optar pelo saque-aniversário?
        </h2>

        <p>
          Ao optar pelo saque-aniversário, o trabalhador deixa de ter direito ao
          saque integral do FGTS em caso de demissão sem justa causa, podendo
          retirar apenas a multa de 40%.
        </p>

        <p>
          Por isso, é importante avaliar a necessidade de liquidez imediata
          versus a segurança financeira em caso de desligamento.
        </p>
      </section>
    </main>
  )
}