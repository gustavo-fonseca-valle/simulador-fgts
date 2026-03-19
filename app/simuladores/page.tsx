import Link from "next/link"

export default function SimuladoresPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">
        Simuladores de FGTS
      </h1>

      <p className="mb-8 text-gray-600">
        Escolha um simulador para calcular seus direitos.
      </p>

      <div className="grid gap-6">

        <Link href="/simuladores/fgts" className="p-6 border rounded-xl hover:shadow">
          <h2 className="text-xl font-semibold">
            Simulador de FGTS total
          </h2>
          <p>Descubra quanto você tem acumulado.</p>
        </Link>

        <Link href="/simuladores/multa-40" className="p-6 border rounded-xl hover:shadow">
          <h2 className="text-xl font-semibold">
            Multa de 40% do FGTS
          </h2>
          <p>Calcule quanto você recebe na demissão.</p>
        </Link>

        <Link href="/simuladores/saque-aniversario" className="p-6 border rounded-xl hover:shadow">
          <h2 className="text-xl font-semibold">
            Saque-aniversário
          </h2>
          <p>Veja quanto pode sacar por ano.</p>
        </Link>

      </div>
    </main>
  )
}