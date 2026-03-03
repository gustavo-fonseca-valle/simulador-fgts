type ArticleCardProps = {
  title: string
  description: string
  slug: string
  category?: string
  updatedAt?: string
}

export default function ArticleCard({
  title,
  description,
  slug,
  category = "Finanças",
  updatedAt
}: ArticleCardProps) {
  return (
    <article className="border rounded-2xl p-6 shadow-sm bg-white hover:shadow-md transition">
      
      {/* Categoria */}
      <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
        {category}
      </span>

      {/* Título */}
      <h2 className="text-2xl font-bold mt-2 mb-3 leading-snug">
        {title}
      </h2>

      {/* Descrição principal */}
      <p className="text-gray-700 mb-4 leading-relaxed">
        {description}
      </p>

      {/* Conteúdo complementar */}
      <p className="text-gray-600 text-sm mb-3">
        Neste conteúdo você encontrará explicações detalhadas, exemplos práticos
        e orientações claras para entender como o tema funciona na prática.
        Nosso objetivo é ajudar você a tomar decisões mais conscientes,
        evitando erros comuns e aproveitando melhor as oportunidades disponíveis.
      </p>

      {/* Lista de benefícios */}
      <ul className="list-disc pl-5 text-gray-700 text-sm mb-5 space-y-1">
        <li>Entenda os conceitos de forma simples</li>
        <li>Veja simulações e exemplos reais</li>
        <li>Descubra vantagens e possíveis riscos</li>
        <li>Aprenda estratégias aplicáveis no dia a dia</li>
      </ul>

      {/* Data de atualização */}
      {updatedAt && (
        <p className="text-xs text-gray-500 mb-4">
          Atualizado em {updatedAt}
        </p>
      )}

      {/* Botão */}
      <a
        href={`/blog/${slug}`}
        className="inline-block bg-blue-600 text-white px-5 py-2 rounded-xl font-medium hover:bg-blue-700 transition"
      >
        Ler artigo completo →
      </a>
    </article>
  )
}