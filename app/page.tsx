"use client"

import { useState } from "react"

function calcularSaqueAniversario(saldo: number) {
  if (saldo <= 500) return saldo * 0.5
  if (saldo <= 1000) return saldo * 0.4 + 50
  if (saldo <= 5000) return saldo * 0.3 + 150
  if (saldo <= 10000) return saldo * 0.2 + 650
  if (saldo <= 15000) return saldo * 0.15 + 1150
  return saldo * 0.1 + 1900
}

function formatarMoeda(valor: number) {
  return valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })
}

export default function HomePage() {
  const [saldo, setSaldo] = useState<number>(10000)

  const saqueAniversario = calcularSaqueAniversario(saldo)
  const saqueRescisao = saldo + saldo * 0.4

  return (
    <main style={{ maxWidth: 900, margin: "0 auto", padding: 20, lineHeight: 1.6 }}>
      
      <h1>Simulador FGTS 2026 Atualizado: Saque-Aniversário vs Saque-Rescisão</h1>

      <p>
        Quer saber quanto pode sacar do seu FGTS em 2026? 
        Use nosso <strong>Simulador FGTS atualizado</strong> para comparar 
        o <strong>Saque-Aniversário</strong> com o <strong>Saque-Rescisão</strong> 
        e entender qual opção pode ser mais vantajosa para você.
      </p>

      <p>
        O Fundo de Garantia do Tempo de Serviço (FGTS) é um direito garantido aos 
        trabalhadores com carteira assinada no Brasil. Ele funciona como uma 
        reserva financeira para momentos importantes, como demissão sem justa causa, 
        compra de imóvel ou aposentadoria.
      </p>

      <hr />

      <h2>📌 O que é o FGTS?</h2>

      <p>
        O FGTS é um fundo criado para proteger o trabalhador demitido sem justa causa. 
        Mensalmente, o empregador deposita 8% do salário em uma conta vinculada ao contrato de trabalho.
      </p>

      <p>
        Em caso de demissão sem justa causa, o trabalhador pode sacar o saldo total 
        e ainda recebe a <strong>multa de 40% do FGTS</strong>, paga pelo empregador.
      </p>

      <hr />

      <h2>💰 Simulador FGTS 2026</h2>

      <p>
        Digite o saldo atual do seu FGTS e veja quanto poderia receber 
        no Saque-Aniversário ou no Saque-Rescisão:
      </p>

      <div style={{ marginTop: 20 }}>
        <label>Saldo do FGTS (R$):</label>
        <input
          type="number"
          value={saldo}
          onChange={(e) => setSaldo(Math.max(0, Number(e.target.value)))}
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
          borderRadius: 8,
        }}
      >
        <h3>🎂 Saque-Aniversário</h3>
        <p>
          Valor liberado anual:
          <strong> {formatarMoeda(saqueAniversario)}</strong>
        </p>
      </div>

      <div
        style={{
          border: "1px solid #ddd",
          padding: 20,
          marginTop: 20,
          background: "#f5f5f5",
          borderRadius: 8,
        }}
      >
        <h3>📦 Saque-Rescisão</h3>
        <p>
          Valor total em caso de demissão:
          <strong> {formatarMoeda(saqueRescisao)}</strong>
        </p>
      </div>

      <hr />

      <h2>🎂 O que é o Saque-Aniversário?</h2>

      <p>
        O Saque-Aniversário permite retirar parte do saldo do FGTS todos os anos, 
        no mês do aniversário. Porém, ao aderir, o trabalhador não poderá sacar 
        o valor total da conta em caso de demissão sem justa causa, apenas a multa de 40%.
      </p>

      <h3>Tabela Oficial do Saque-Aniversário</h3>

      <ul>
        <li>Até R$ 500: 50%</li>
        <li>De R$ 500,01 até R$ 1.000: 40% + R$ 50</li>
        <li>De R$ 1.000,01 até R$ 5.000: 30% + R$ 150</li>
        <li>De R$ 5.000,01 até R$ 10.000: 20% + R$ 650</li>
        <li>De R$ 10.000,01 até R$ 15.000: 15% + R$ 1.150</li>
        <li>Acima de R$ 15.000: 10% + R$ 1.900</li>
      </ul>

      <hr />

      <h2>📦 O que é o Saque-Rescisão?</h2>

      <p>
        O Saque-Rescisão é a modalidade tradicional. Em caso de demissão sem justa causa,
        o trabalhador pode sacar todo o saldo acumulado mais a multa de 40%.
      </p>

      <hr />

      <h2>❓ Perguntas Frequentes sobre o FGTS</h2>

      <h3>Como calcular a multa de 40% do FGTS?</h3>
      <p>
        A multa de 40% é calculada sobre todos os depósitos realizados durante 
        o contrato de trabalho.
      </p>

      <h3>Vale a pena optar pelo Saque-Aniversário?</h3>
      <p>
        Depende do seu planejamento financeiro. Quem precisa de liquidez anual pode se beneficiar,
        mas é importante considerar o impacto em caso de demissão.
      </p>

      <hr />

      <p style={{ fontSize: 14, color: "#666" }}>
        Este site possui caráter informativo e não possui vínculo com órgãos governamentais.
        Consulte sempre fontes oficiais antes de tomar decisões financeiras.
      </p>

    </main>
  )
}