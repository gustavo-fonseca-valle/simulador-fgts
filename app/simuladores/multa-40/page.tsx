import Multa40Form from "./Multa40Form"
import AdsenseBlock from "@/components/AdsenseBlock"

export const metadata = {
  title: "Simulador de Multa de 40% do FGTS",
  description:
    "Calcule online o valor da multa de 40% do FGTS em caso de demissão sem justa causa. Simulador gratuito e atualizado.",
}

export default function Multa40Page() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12">

      <h1 className="text-4xl font-bold mb-6">
        Simulador de Multa de 40% do FGTS
      </h1>

      <p className="text-gray-700 mb-8">
        Utilize o simulador abaixo para calcular o valor da multa rescisória
        de 40% sobre o saldo do FGTS em caso de demissão sem justa causa.
      </p>

      {/* ANÚNCIO */}
      <div className="my-10">
        <AdsenseBlock />
      </div>

      <Multa40Form />

      {/* ANÚNCIO */}
      <div className="my-10">
        <AdsenseBlock />
      </div>

    </main>
  )
}