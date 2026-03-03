import Link from "next/link"
import AdsenseBlock from "@/components/AdsenseBlock"

export const metadata = {
  title: "Simuladores FGTS e Guias Financeiros Atualizados",
  description:
    "Utilize nossos simuladores de FGTS e leia guias completos sobre multa de 40%, saque-aniversário e planejamento financeiro.",
}

export default function HomePage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-10">

      {/* HERO */}
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-6 leading-tight">
          Simuladores e Guias sobre FGTS e Direitos Trabalhistas
        </h1>

        <p className="text-lg text-gray-700 mb-4">
          Nosso objetivo é ajudar você a entender seus direitos
          trabalhistas e tomar decisões financeiras mais conscientes.
          Aqui você encontra simuladores práticos e conteúdos explicativos
          atualizados.
        </p>

        <p className="text-gray-700">
          Todas as ferramentas possuem caráter informativo e educativo,
          com explicações claras para facilitar o entendimento.
        </p>
      </section>

      {/* SIMULADORES */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">
          Simuladores Disponíveis
        </h2>

        <div className="grid gap-6 md:grid-cols-2">

          <Link
            href="/simuladores/multa-40"
            className="border rounded-xl p-6 hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold mb-2">
              Multa de 40% do FGTS
            </h3>
            <p className="text-gray-600">
              Calcule o valor estimado da multa em caso de demissão
              sem justa causa e entenda como o cálculo funciona.
            </p>
          </Link>

          <Link
            href="/simuladores/saque-aniversario"
            className="border rounded-xl p-6 hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold mb-2">
              Saque-Aniversário
            </h3>
            <p className="text-gray-600">
              Descubra quanto você pode sacar anualmente e
              avalie se essa modalidade vale a pena.
            </p>
          </Link>

        </div>
      </section>

      {/* BLOCO DE ANÚNCIO */}
      <div className="my-12">
        <AdsenseBlock />
      </div>

      {/* CONTEÚDO EDITORIAL */}
      <section className="space-y-6 text-gray-800">

        <h2 className="text-2xl font-semibold">
          Como funcionam nossos simuladores?
        </h2>

        <p>
          Nossos simuladores utilizam regras públicas e fórmulas
          conhecidas para gerar estimativas aproximadas. Eles foram
          desenvolvidos para facilitar o entendimento de cálculos
          que muitas vezes geram dúvidas.
        </p>

        <h2 className="text-2xl font-semibold">
          Informação clara e responsável
        </h2>

        <p>
          Todo conteúdo publicado tem caráter informativo.
          Recomendamos sempre consultar fontes oficiais
          antes de tomar decisões importantes.
        </p>

        <h2 className="text-2xl font-semibold">
          Por que usar nossos guias?
        </h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>Explicações simples e diretas</li>
          <li>Exemplos práticos</li>
          <li>Comparações entre modalidades</li>
          <li>Atualizações frequentes</li>
        </ul>

      </section>

    </main>
  )
}