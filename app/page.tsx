"use client"

import { useState, useEffect } from "react"

function calcularSaqueAniversario(saldo: number) {
  if (saldo <= 500) return saldo * 0.5
  if (saldo <= 1000) return saldo * 0.4 + 50
  if (saldo <= 5000) return saldo * 0.3 + 150
  if (saldo <= 10000) return saldo * 0.2 + 650
  if (saldo <= 15000) return saldo * 0.15 + 1150
  return saldo * 0.1 + 1900
}

export default function ComparativoFGTSPage() {
  const [saldo, setSaldo] = useState<number>(10000)

  const saqueAniversario = calcularSaqueAniversario(saldo)
  const saqueRescisao = saldo + saldo * 0.4

  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (err) {
      console.log(err)
    }
  }, [])

  return (
    <main style={{ maxWidth: 800, margin: "40px auto", padding: 20 }}>
      <h1>Saque-Aniversário vs Saque-Rescisão</h1>

      <p>
        Digite o saldo do seu FGTS e veja a simulação das duas modalidades.
      </p>

      <div style={{ marginTop: 20 }}>
        <label>Saldo do FGTS (R$):</label>
        <input
          type="number"
          value={saldo}
          onChange={(e) => setSaldo(Number(e.target.value))}
          style={{
            display: "block",
            padding: 10,
            marginTop: 10,
            width: "100%",
            fontSize: 16,
          }}
        />
      </div>

      <div
        style={{
          border: "1px solid #ddd",
          padding: 20,
          marginTop: 30,
        }}
      >
        <h3>Saque-Aniversário</h3>
        <p>
          Valor liberado anual: <strong>R$ {saqueAniversario.toFixed(2)}</strong>
        </p>
      </div>

      <div
        style={{
          border: "1px solid #ddd",
          padding: 20,
          marginTop: 20,
          background: "#f5f5f5",
        }}
      >
        <h3>Saque-Rescisão</h3>
        <p>
          Valor total em caso de demissão:
          <strong> R$ {saqueRescisao.toFixed(2)}</strong>
        </p>
      </div>

      {/* BLOCO DE ANÚNCIO */}
      <div style={{ marginTop: 40 }}>
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-5817280149271380"
          data-ad-slot="1234567890"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
    </main>
  )
}