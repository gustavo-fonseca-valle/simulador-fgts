"use client"

import { useState } from "react"

export default function SaqueAniversarioForm() {
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

    const valor = saldoNumerico * percentual + parcelaAdicional
    setResultado(valor)
  }

  return (
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
            Valor estimado do saque:
          </p>
          <p className="text-2xl font-bold text-green-700">
            R$ {resultado.toFixed(2)}
          </p>
        </div>
      )}
    </section>
  )
}