"use client"

import { useState } from "react"
import AdsenseBlock from "@/components/AdsenseBlock"
import Link from "next/link"

export default function SimuladorFGTS() {
  const [salario, setSalario] = useState("")
  const [meses, setMeses] = useState("")
  const [resultado, setResultado] = useState<number | null>(null)
  const [erro, setErro] = useState("")

  function formatarMoeda(valor: number) {
    return valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    })
  }

  function calcular() {
    const s = parseFloat(salario)
    const m = parseInt(meses)

    if (isNaN(s) || isNaN(m) || s <= 0 || m <= 0) {
      setErro("Informe valores válidos.")
      setResultado(null)
      return
    }

    setErro("")
    const total = s * 0.08 * m
    setResultado(total)
  }

  const depositoMensal =
    salario && !isNaN(parseFloat(salario))
      ? parseFloat(salario) * 0.08
      : null

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">

      <h1 className="text-3xl font-bold mb-6">
        Simulador de FGTS
      </h1>

      {/* 🔥 RESPOSTA DIRETA (SEO FORTE) */}
      <p className="text-gray-700 mb-4">
        O FGTS é calculado com base em <strong>8% do salário bruto mensal</strong>,
        depositado pela empresa todos os meses.
      </p>

      <p className="text-gray-700 mb-8">
        Use o simulador abaixo para estimar quanto você já acumulou.
      </p>

      {/* 🔥 ANÚNCIO */}
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

        {erro && <p className="text-red-600 text-sm">{erro}</p>}

        <button
          onClick={calcular}
          className="bg-green-600 text-white px-6 py-3 rounded font-bold w-full hover:bg-green-700"
        >
          Calcular FGTS
        </button>

        {resultado !== null && (
          <>
            <div className="mt-6 p-4 bg-green-50 rounded space-y-2">

              {depositoMensal && (
                <>
                  <p className="text-sm text-gray-600">
                    Depósito mensal:
                  </p>
                  <p className="text-lg font-semibold">
                    {formatarMoeda(depositoMensal)}
                  </p>
                </>
              )}

              <hr />

              <p className="text-lg font-semibold">
                Total acumulado:
              </p>

              <p className="text-2xl font-bold text-green-700">
                {formatarMoeda(resultado)}
              </p>

            </div>

            {/* 🔥 CTA (DINHEIRO) */}
            <div className="mt-6 text-blue-600 text-sm">
              👉{" "}
              <Link href="/simuladores/multa-40" className="underline">
                Veja quanto você recebe na demissão
              </Link>
            </div>

            {/* 🔥 ANÚNCIO (alta conversão) */}
            <div className="mt-6">
              <AdsenseBlock />
            </div>
          </>
        )}

      </div>

      {/* 🔥 CONTEÚDO SEO */}
      <section className="mt-12 space-y-6 text-gray-700">

        <h2 className="text-xl font-semibold">
          Como calcular o FGTS?
        </h2>

        <pre className="bg-gray-100 p-4 rounded">
salário × 0,08 × meses trabalhados
        </pre>

        <h2 className="text-xl font-semibold">
          Exemplo de cálculo
        </h2>

        <ul className="list-disc pl-6">
          <li>Salário: R$ 3.000</li>
          <li>Depósito mensal: R$ 240</li>
          <li>Em 12 meses: R$ 2.880</li>
        </ul>

        <h2 className="text-xl font-semibold">
          Quanto rende o FGTS?
        </h2>

        <p>
          O FGTS rende cerca de 3% ao ano + Taxa Referencial (TR),
          sendo considerado um rendimento baixo comparado a outros investimentos.
        </p>

      </section>

    </main>
  )
}