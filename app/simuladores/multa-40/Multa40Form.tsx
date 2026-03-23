"use client"

import { useState } from "react"
import Link from "next/link"

export default function Multa40Form() {
  const [saldo, setSaldo] = useState("")
  const [resultado, setResultado] = useState<number | null>(null)
  const [erro, setErro] = useState("")

  function formatarMoeda(valor: number) {
    return valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    })
  }

  function calcularMulta(e: React.FormEvent) {
    e.preventDefault()

    const saldoNumerico = parseFloat(saldo)

    if (isNaN(saldoNumerico) || saldoNumerico <= 0) {
      setResultado(null)
      setErro("Informe um valor válido maior que zero.")
      return
    }

    setErro("")
    setResultado(saldoNumerico * 0.4)
  }

  const totalReceber =
    resultado !== null ? resultado + parseFloat(saldo) : null

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

        {erro && (
          <p className="text-red-600 text-sm">{erro}</p>
        )}

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Calcular Multa
        </button>
      </form>

      {resultado !== null && (
        <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg space-y-2">

          <p className="text-lg font-semibold">
            Multa de 40%:
          </p>

          <p className="text-2xl font-bold text-green-700">
            {formatarMoeda(resultado)}
          </p>

          <hr />

          <p className="text-md font-medium">
            Total que você pode receber:
          </p>

          <p className="text-xl font-bold text-gray-900">
            {formatarMoeda(totalReceber!)}
          </p>

          {/* 🔥 CTA */}
          <p className="mt-3 text-sm text-blue-600">
            👉{" "}
            <Link href="/simuladores/saque-aniversario" className="underline">
              Veja também o saque-aniversário
            </Link>
          </p>

        </div>
      )}
    </section>
  )
}