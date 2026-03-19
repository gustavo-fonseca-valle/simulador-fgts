"use client"
import { useState } from "react"
import AdsenseBlock from "@/components/AdsenseBlock"

export default function SimuladorFGTS() {
  const [salario, setSalario] = useState("")
  const [meses, setMeses] = useState("")
  const [resultado, setResultado] = useState<number | null>(null)

  function calcular() {
    const s = parseFloat(salario)
    const m = parseInt(meses)

    if (!s || !m) return

    const total = s * 0.08 * m
    setResultado(total)
  }

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">

      <h1 className="text-3xl font-bold mb-6">
        Simulador de FGTS
      </h1>

      {/* 🔥 ANÚNCIO 1 (topo leve) */}
      <div className="mb-8">
        <AdsenseBlock />
      </div>

      <div className="space-y-4">

        <input
          type="number"
          placeholder="Salário (R$)"
          value={salario}
          onChange={(e) => setSalario(e.target.value)}
          className="w-full border p-3 rounded"
        />

        <input
          type="number"
          placeholder="Meses trabalhados"
          value={meses}
          onChange={(e) => setMeses(e.target.value)}
          className="w-full border p-3 rounded"
        />

        <button
          onClick={calcular}
          className="bg-green-600 text-white px-6 py-3 rounded font-bold w-full"
        >
          Calcular
        </button>

        {resultado !== null && (
          <>
            <div className="mt-6 p-4 bg-green-50 rounded">
              <p className="text-lg font-semibold">
                Total estimado: R$ {resultado.toFixed(2)}
              </p>
            </div>

            {/* 🔥 ANÚNCIO 2 (alta conversão) */}
            <div className="mt-6">
              <AdsenseBlock />
            </div>
          </>
        )}

      </div>
    </main>
  )
}