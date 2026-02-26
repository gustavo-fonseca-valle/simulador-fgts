"use client"

import { useState } from "react"

export default function Page() {
  const [saldoFgts, setSaldoFgts] = useState<number | "">("")
  const [resultado, setResultado] = useState<number | null>(null)

  function calcularMulta() {
    if (!saldoFgts || saldoFgts <= 0) {
      setResultado(null)
      return
    }

    const multa = Number(saldoFgts) * 0.4
    setResultado(multa)
  }

  return (
    <div style={{ maxWidth: 600, margin: "40px auto", padding: 20 }}>
      <h1 style={{ fontSize: 28, fontWeight: "bold", marginBottom: 20 }}>
        Simulador de Multa de 40% do FGTS
      </h1>

      <p style={{ marginBottom: 20 }}>
        Calcule quanto você receberia de multa em caso de demissão sem justa
        causa.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <input
          type="number"
          placeholder="Digite o saldo total do FGTS"
          value={saldoFgts}
          onChange={(e) =>
            setSaldoFgts(e.target.value ? Number(e.target.value) : "")
          }
          style={{
            padding: 10,
            fontSize: 16,
            borderRadius: 8,
            border: "1px solid #ccc",
          }}
        />

        <button
          onClick={calcularMulta}
          style={{
            padding: 12,
            fontSize: 16,
            borderRadius: 8,
            border: "none",
            backgroundColor: "#16a34a",
            color: "white",
            cursor: "pointer",
          }}
        >
          Calcular multa
        </button>
      </div>

      {resultado !== null && (
        <div
          style={{
            marginTop: 30,
            padding: 20,
            backgroundColor: "#f0fdf4",
            borderRadius: 10,
            border: "1px solid #bbf7d0",
          }}
        >
          <h2 style={{ fontSize: 20, marginBottom: 10 }}>
            Valor da multa (40%)
          </h2>
          <p style={{ fontSize: 22, fontWeight: "bold", color: "#15803d" }}>
            R$ {resultado.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
          </p>
        </div>
      )}
    </div>
  )
}