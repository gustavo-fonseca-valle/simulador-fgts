"use client"

import { useState } from "react"
import AdsenseBlock from "@/components/AdsenseBlock"
import Link from "next/link"

export default function SimuladorFGTS() {
  const [salario, setSalario] = useState("")
  const [meses, setMeses] = useState("")
  const [resultado, setResultado] = useState<number | null>(null)
  const [erro, setErro] = useState("")

  // 🔥 LEAD GATE
  const [showLeadGate, setShowLeadGate] = useState(false)
  const [unlocked, setUnlocked] = useState(false)
  const [nome, setNome] = useState("")
  const [whatsapp, setWhatsapp] = useState("")

  function formatarWhatsapp(valor: string) {
    valor = valor.replace(/\D/g, "")

    valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2")
    valor = valor.replace(/(\d{5})(\d)/, "$1-$2")

    return valor
  }

  function formatarMoeda(valor: number) {
    return valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    })
  }

  function calcularValor() {
    const s = parseFloat(salario)
    const m = parseInt(meses)

    if (isNaN(s) || isNaN(m) || s <= 0 || m <= 0) {
      setErro("Informe valores válidos.")
      return null
    }

    setErro("")
    return s * 0.08 * m
  }

  function handleCalcular() {
    const total = calcularValor()

    if (!total) {
      setResultado(null)
      return
    }

    // 🔥 Intercepta antes de mostrar resultado
    if (!unlocked) {
      setShowLeadGate(true)
      return
    }

    setResultado(total)
  }

  async function liberarResultado(e: React.FormEvent) {
    e.preventDefault()

    // 🔒 Validação simples
    if (!nome || !whatsapp) {
      alert("Preencha nome e WhatsApp")
      return
    }

    try {
      // 🔥 Calcula novamente (garante consistência)
      const total = calcularValor()

      if (!total) {
        alert("Erro ao calcular valores")
        return
      }

      // 📡 Envia lead para backend
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome,
          whatsapp,
          valor: total,
        }),
      })

      // ⚠️ Se falhar, não bloqueia usuário (IMPORTANTE)
      if (!response.ok) {
        console.error("Erro ao enviar lead")
      }

      // 🔓 Libera resultado
      setUnlocked(true)
      setShowLeadGate(false)
      setResultado(total)

    } catch (error) {
      console.error("Erro geral:", error)

      // 🔓 Mesmo com erro, libera resultado (UX primeiro)
      const total = calcularValor()
      setUnlocked(true)
      setShowLeadGate(false)
      setResultado(total || null)
    }
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
          onClick={handleCalcular}
          className="bg-green-600 text-white px-6 py-3 rounded font-bold w-full hover:bg-green-700"
        >
          Calcular FGTS
        </button>

        {/* 🔒 LEAD GATE */}
        {showLeadGate && (
          <div className="bg-white p-6 rounded-2xl shadow-lg border text-center mt-6">
            <h2 className="text-xl font-bold mb-2">
              🔒 Veja seu saldo FGTS liberado
            </h2>

            <p className="text-gray-600 mb-4">
              Você tem saldo disponível. Informe seu WhatsApp para liberar o valor completo 👇
            </p>

            <form onSubmit={liberarResultado} className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Seu nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="border p-2 rounded"
              />

              <input
                type="tel"
                placeholder="WhatsApp"
                value={whatsapp}
                onChange={(e) => setWhatsapp(formatarWhatsapp(e.target.value))}
                className="border p-2 rounded"
              />

              <button
                type="submit"
                className="bg-green-600 text-white py-2 rounded font-semibold hover:bg-green-700"
              >
                Liberar resultado
              </button>
            </form>
          </div>
        )}

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

            {/* 💰 CTA MONETIZAÇÃO */}
            <a
              href="#"
              target="_blank"
              className="block mt-6 bg-green-600 text-white text-center py-3 rounded-lg font-bold hover:bg-green-700"
            >
              💰 Antecipar saque FGTS agora
            </a>

            {/* 🔥 CTA ORIGINAL */}
            <div className="mt-6 text-blue-600 text-sm">
              👉{" "}
              <Link href="/simuladores/multa-40" className="underline">
                Veja quanto você recebe na demissão
              </Link>
            </div>

            {/* 🔥 ANÚNCIO */}
            <div className="mt-6">
              <AdsenseBlock />
            </div>
          </>
        )}

      </div>

      {/* 🔥 CONTEÚDO SEO (MANTIDO) */}
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