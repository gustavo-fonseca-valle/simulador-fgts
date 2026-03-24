import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const { nome, whatsapp, valor } = await req.json()

  const telefone = whatsapp.replace(/\D/g, "")

  const payload = {
    name: nome,
    phone: telefone,
    income: valor, // 🔥 importante
    source: "simuladorfgts"
  }

  try {
    const response = await fetch(process.env.EASYCREDITO_API_URL!, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.EASYCREDITO_TOKEN}`,
      },
      body: JSON.stringify(payload),
    })

    const data = await response.json()

    console.log("Resposta EasyCrédito:", data)

    return NextResponse.json({ success: true, data })

  } catch (error) {
    console.error("Erro EasyCrédito:", error)

    return NextResponse.json({ success: false })
  }
}