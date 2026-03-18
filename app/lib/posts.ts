export type Post = {
  slug: string
  title: string
  description: string
  content: string
  date: string
  keywords?: string[]
}

export const posts: Post[] = [
  {
    slug: "como-calcular-fgts",
    title: "Como calcular o FGTS corretamente em 2026",
    description: "Aprenda a calcular seu FGTS passo a passo e veja quanto você deveria ter acumulado.",
    date: "2026-03-01",
    keywords: ["calcular fgts", "fgts como calcular", "fgts 2026"],
    content: `
      <p>O FGTS é um direito de todo trabalhador CLT. A empresa deposita mensalmente <strong>8% do salário bruto</strong>.</p>

      <h2>Fórmula do FGTS</h2>
      <pre>salário × 0,08 × meses trabalhados</pre>

      <p><strong>Exemplo prático:</strong></p>
      <ul>
        <li>Salário: R$ 3.000</li>
        <li>Tempo: 24 meses</li>
      </ul>

      <p><strong>Total acumulado: R$ 5.760</strong></p>

      <div style="margin:20px 0;padding:20px;background:#f0fdf4;">
        👉 <a href="/simuladores"><strong>Simule seu FGTS agora</strong></a>
      </div>
    `,
  },

  {
    slug: "fgts-demissao",
    title: "FGTS na demissão: quanto você recebe?",
    description: "Veja como calcular o saldo do FGTS e a multa de 40% na demissão sem justa causa.",
    date: "2026-03-01",
    keywords: ["fgts demissão", "multa 40 fgts"],
    content: `
      <p>Na demissão sem justa causa, você pode sacar todo o FGTS + multa de 40%.</p>

      <h2>Exemplo</h2>
      <ul>
        <li>Saldo: R$ 10.000</li>
        <li>Multa: R$ 4.000</li>
      </ul>

      <p><strong>Total: R$ 14.000</strong></p>

      <div style="margin:20px 0;padding:20px;background:#fef3c7;">
        👉 <a href="/simuladores"><strong>Calcular rescisão</strong></a>
      </div>
    `,
  },

  // =========================
  // 🔥 ARTIGOS DE LONG TAIL (SEO FORTE)
  // =========================

  {
    slug: "fgts-salario-3000",
    title: "FGTS de quem ganha R$ 3.000: quanto recebe por mês e por ano?",
    description: "Descubra quanto é depositado de FGTS para salário de R$ 3.000.",
    date: "2026-03-01",
    keywords: ["fgts 3000", "salario 3000 fgts quanto da"],
    content: `
      <p>Se você ganha <strong>R$ 3.000</strong>, seu FGTS será:</p>

      <ul>
        <li>Mensal: <strong>R$ 240</strong></li>
        <li>Anual: <strong>R$ 2.880</strong></li>
      </ul>

      <h2>Em 5 anos</h2>
      <p><strong>R$ 14.400</strong> (sem juros)</p>

      <div style="margin:20px 0;padding:20px;background:#ecfeff;">
        👉 <a href="/simuladores"><strong>Simular com aumento salarial</strong></a>
      </div>
    `,
  },

  {
    slug: "fgts-salario-2000",
    title: "FGTS de quem ganha R$ 2.000: quanto dá?",
    description: "Veja quanto você acumula de FGTS ganhando R$ 2.000.",
    date: "2026-03-01",
    keywords: ["fgts 2000", "salario 2000 fgts"],
    content: `
      <p>Para salário de R$ 2.000:</p>

      <ul>
        <li>Mensal: <strong>R$ 160</strong></li>
        <li>Anual: <strong>R$ 1.920</strong></li>
      </ul>
    `,
  },

  {
    slug: "fgts-salario-5000",
    title: "FGTS de quem ganha R$ 5.000: valor mensal e acumulado",
    description: "Veja quanto o FGTS rende para salário de R$ 5.000.",
    date: "2026-03-01",
    keywords: ["fgts 5000", "salario 5000 fgts"],
    content: `
      <p>Salário de R$ 5.000 gera:</p>

      <ul>
        <li>Mensal: <strong>R$ 400</strong></li>
        <li>Anual: <strong>R$ 4.800</strong></li>
      </ul>
    `,
  },

  {
    slug: "fgts-2-anos-trabalho",
    title: "Quanto tenho de FGTS com 2 anos de trabalho?",
    description: "Veja quanto você pode ter acumulado em 2 anos.",
    date: "2026-03-01",
    keywords: ["fgts 2 anos", "quanto tenho fgts"],
    content: `
      <p>Exemplo com salário de R$ 3.000:</p>

      <p><strong>R$ 5.760</strong></p>
    `,
  },

  {
    slug: "fgts-5-anos-trabalho",
    title: "FGTS com 5 anos de trabalho: quanto dá?",
    description: "Descubra quanto você acumulou em 5 anos de FGTS.",
    date: "2026-03-01",
    keywords: ["fgts 5 anos", "fgts acumulado"],
    content: `
      <p>Salário de R$ 3.000:</p>

      <p><strong>R$ 14.400</strong></p>
    `,
  },

  {
    slug: "fgts-multa-40-calculo",
    title: "Como calcular a multa de 40% do FGTS",
    description: "Aprenda a calcular a multa rescisória do FGTS.",
    date: "2026-03-01",
    keywords: ["multa fgts 40", "calcular multa fgts"],
    content: `
      <p>A multa é:</p>

      <pre>saldo × 0,4</pre>

      <p>Exemplo:</p>

      <p>R$ 10.000 → <strong>R$ 4.000</strong></p>
    `,
  },

  {
    slug: "fgts-quanto-recebo-demissao",
    title: "Quanto vou receber de FGTS na demissão?",
    description: "Veja quanto você recebe ao ser demitido sem justa causa.",
    date: "2026-03-01",
    keywords: ["fgts demissao quanto recebo"],
    content: `
      <p>Você recebe:</p>

      <ul>
        <li>Saldo total</li>
        <li>+ 40% de multa</li>
      </ul>

      <div style="margin:20px 0;">
        👉 <a href="/simuladores"><strong>Simular agora</strong></a>
      </div>
    `,
  },
]

/**
 * Helpers (MUITO IMPORTANTE pro Next.js)
 */

export function getAllPosts() {
  return posts
}

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug)
}

export function getAllSlugs() {
  return posts.map((post) => ({
    slug: post.slug,
  }))
}