"use client"

import { useState } from "react"

export default function Page() {
  const [saldo, setSaldo] = useState<number | "">("")
  const [resultado, setResultado] = useState<number | null>(null)

  function calcularSaque() {
    if (!saldo || saldo <= 0) {
      setResultado(null)
      return
    }

    let percentual = 0
    let adicional = 0
    const valor = Number(saldo)

    if (valor <= 500) {
      percentual = 0.5
      adicional = 0
    } else if (valor <= 1000) {
      percentual = 0.4
      adicional = 50
    } else if (valor <= 5000) {
      percentual = 0.3
      adicional = 150
    } else if (valor <= 10000) {
      percentual = 0.2
      adicional = 650
    } else if (valor <= 15000) {
      percentual = 0.15
      adicional = 1150
    } else if (valor <= 20000) {
      percentual = 0.1
      adicional = 1900
    } else {
      percentual = 0.05
      adicional = 2900
    }

    const valorSaque = valor * percentual + adicional
    setResultado(valorSaque)
  }

  return (
    <div style={{ maxWidth: 600, margin: "40px auto", padding: 20 }}>
      <h1 style={{ fontSize: 28, fontWeight: "bold", marginBottom: 20 }}>
        Simulador Saque-Aniversário FGTS
      </h1>

      <p style={{ marginBottom: 20 }}>
        Descubra quanto você pode sacar anualmente no saque-aniversário.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <input
          type="number"
          placeholder="Digite o saldo total do FGTS"
          value={saldo}
          onChange={(e) =>
            setSaldo(e.target.value ? Number(e.target.value) : "")
          }
          style={{
            padding: 10,
            fontSize: 16,
            borderRadius: 8,
            border: "1px solid #ccc",
          }}
        />

        <button
          onClick={calcularSaque}
          style={{
            padding: 12,
            fontSize: 16,
            borderRadius: 8,
            border: "none",
            backgroundColor: "#2563eb",
            color: "white",
            cursor: "pointer",
          }}
        >
          Calcular saque
        </button>
      </div>

      {resultado !== null && (
        <div
          style={{
            marginTop: 30,
            padding: 20,
            backgroundColor: "#eff6ff",
            borderRadius: 10,
            border: "1px solid #bfdbfe",
          }}
        >
          <h2 style={{ fontSize: 20, marginBottom: 10 }}>
            Valor disponível para saque
          </h2>
          <p style={{ fontSize: 22, fontWeight: "bold", color: "#1d4ed8" }}>
            R$ {resultado.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
          </p>
        </div>
      )}
    </div>
  )
}