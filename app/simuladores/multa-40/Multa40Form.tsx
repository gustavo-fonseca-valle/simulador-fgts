"use client"

import { useState } from "react"

export default function Multa40Form() {
  const [saldo, setSaldo] = useState("")
  const [resultado, setResultado] = useState<number | null>(null)

  function calcularMulta(e: React.FormEvent) {
    e.preventDefault()

    const saldoNumerico = parseFloat(saldo)

    if (!isNaN(saldoNumerico) && saldoNumerico > 0) {
      setResultado(saldoNumerico * 0.4)
    } else {
      setResultado(null)
    }
  }

  return (
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
  )
}