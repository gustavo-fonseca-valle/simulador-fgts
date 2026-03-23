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
      <p>O FGTS (Fundo de Garantia do Tempo de Serviço) é um direito de todo trabalhador CLT. Todos os meses, a empresa deposita um valor na sua conta — e você pode sacar esse dinheiro em situações específicas, como demissão sem justa causa.</p>

      <p>Mas afinal, <strong>como calcular o FGTS corretamente?</strong> Veja o passo a passo simples abaixo.</p>

      <h2>Como calcular o FGTS (fórmula)</h2>

      <p>O cálculo do FGTS é baseado em uma regra simples:</p>

      <pre>Salário bruto × 0,08 × meses trabalhados</pre>

      <p>Ou seja, a empresa deposita <strong>8% do seu salário todos os meses</strong>.</p>

      <h2>Exemplo prático</h2>

      <ul>
        <li>Salário: R$ 3.000</li>
        <li>Depósito mensal: R$ 240</li>
        <li>Tempo: 24 meses</li>
      </ul>

      <p><strong>Total acumulado: R$ 5.760</strong></p>

      <h2>Quanto a empresa deposita por mês?</h2>

      <p>O valor mensal do FGTS é sempre 8% do salário bruto. Veja alguns exemplos:</p>

      <ul>
        <li>Salário de R$ 2.000 → FGTS de R$ 160/mês</li>
        <li>Salário de R$ 3.000 → FGTS de R$ 240/mês</li>
        <li>Salário de R$ 5.000 → FGTS de R$ 400/mês</li>
      </ul>

      <h2>Como calcular o FGTS acumulado</h2>

      <p>Para saber quanto você tem acumulado, basta multiplicar o valor mensal pelo número de meses trabalhados.</p>

      <p>Importante: esse cálculo é uma estimativa. O saldo real pode variar por causa de juros e correções.</p>

      <h2>Quanto você pode receber na demissão</h2>

      <p>Se for demitido sem justa causa, você recebe:</p>

      <ul>
        <li>✔️ Todo o saldo do FGTS</li>
        <li>✔️ + multa de 40%</li>
      </ul>

      <p><strong>Exemplo:</strong></p>

      <ul>
        <li>Saldo: R$ 10.000</li>
        <li>Multa: R$ 4.000</li>
        <li>Total: R$ 14.000</li>
      </ul>

      <div style="margin:20px 0;padding:20px;background:#f0fdf4;border-radius:8px;">
        👉 <a href="/simuladores"><strong>Calcule seu FGTS agora</strong></a>
      </div>

      <h2>Perguntas frequentes</h2>

      <h3>O FGTS desconta do salário?</h3>
      <p>Não. O depósito é feito pela empresa, sem desconto no salário do trabalhador.</p>

      <h3>O FGTS rende quanto?</h3>
      <p>O FGTS rende cerca de 3% ao ano + Taxa Referencial (TR).</p>

      <h3>Posso sacar o FGTS a qualquer momento?</h3>
      <p>Não. O saque só é permitido em situações específicas, como demissão, compra de imóvel ou saque-aniversário.</p>
    `,
  },

  {
  slug: "fgts-demissao",
  title: "FGTS na demissão: quanto você recebe + cálculo completo (2026)",
  description: "Descubra quanto você recebe de FGTS na demissão sem justa causa, incluindo multa de 40%, exemplos reais e cálculo completo.",
  date: "2026-03-01",
  keywords: [
    "fgts demissão quanto recebo",
    "multa 40 fgts cálculo",
    "quanto recebo fgts demissão",
    "fgts rescisão valor"
  ],
  content: `

      <p><strong>Na demissão sem justa causa, você recebe:</strong></p>

  <ul>
    <li>✔️ Todo o saldo do FGTS</li>
    <li>✔️ + multa de 40% sobre o valor</li>
  </ul>

  <p>Ou seja, quanto maior o saldo acumulado, maior será o valor que você vai receber.</p>

  <div style="margin:20px 0;padding:20px;background:#f0fdf4;border-radius:8px;">
    👉 <a href="/simuladores"><strong>Calcule agora quanto você vai receber na demissão</strong></a>
  </div>

  <h2>Exemplos reais de quanto você recebe</h2>

  <ul>
    <li>Saldo: R$ 5.000 → <strong>R$ 7.000</strong></li>
    <li>Saldo: R$ 10.000 → <strong>R$ 14.000</strong></li>
    <li>Saldo: R$ 20.000 → <strong>R$ 28.000</strong></li>
  </ul>

  <p>Esses valores incluem o saldo + multa de 40%.</p>

  <h2>Como calcular o FGTS na demissão</h2>

  <p>O cálculo é simples:</p>

  <pre>saldo do FGTS × 0,4</pre>

  <p>Depois, você soma o valor da multa ao saldo total.</p>

  <p><strong>Exemplo:</strong></p>

  <ul>
    <li>Saldo: R$ 8.000</li>
    <li>Multa: R$ 3.200</li>
  </ul>

  <p><strong>Total recebido: R$ 11.200</strong></p>

  <h2>Tipos de demissão e o que você recebe</h2>

  <table border="1" cellpadding="8" style="border-collapse:collapse;width:100%">
    <tr>
      <th>Tipo de demissão</th>
      <th>FGTS</th>
      <th>Multa</th>
    </tr>
    <tr>
      <td>✔️ Sem justa causa</td>
      <td>Saque total</td>
      <td>40%</td>
    </tr>
    <tr>
      <td>❌ Pedido de demissão</td>
      <td>Não pode sacar</td>
      <td>Não</td>
    </tr>
    <tr>
      <td>⚠️ Acordo trabalhista</td>
      <td>Saque parcial</td>
      <td>20%</td>
    </tr>
  </table>

  <h2>E se você estiver no saque-aniversário?</h2>

  <p>Se você aderiu ao saque-aniversário, as regras mudam:</p>

  <ul>
    <li>❌ Não pode sacar o saldo total</li>
    <li>✔️ Recebe apenas a multa de 40%</li>
  </ul>

  <p>👉 <a href="/simuladores/saque-aniversario"><strong>Veja quanto você pode sacar no saque-aniversário</strong></a></p>

  <h2>Vale a pena sacar o FGTS na demissão?</h2>

  <p>Na maioria dos casos, sim.</p>

  <p>O FGTS tem rendimento baixo, então pode ser mais vantajoso usar o dinheiro para:</p>

  <ul>
    <li>Pagar dívidas</li>
    <li>Investir</li>
    <li>Montar uma reserva de emergência</li>
  </ul>

  <div style="margin:20px 0;padding:20px;background:#ecfeff;border-radius:8px;">
    👉 <a href="/simuladores"><strong>Simular quanto você vai receber agora</strong></a>
  </div>

  <h2>Perguntas frequentes</h2>

  <h3>Quem pede demissão pode sacar o FGTS?</h3>
  <p>Não. Nesse caso, o valor permanece na conta.</p>

  <h3>Quando o FGTS é liberado?</h3>
  <p>Após a empresa comunicar a rescisão e liberar o saque.</p>

  <h3>A multa de 40% é obrigatória?</h3>
  <p>Sim, em casos de demissão sem justa causa.</p>

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
  {
  slug: "fgts-rende-quanto-por-ano",
  title: "FGTS rende quanto por ano em 2026? Veja o rendimento real",
  description: "Descubra quanto rende o FGTS por ano e se vale a pena deixar o dinheiro parado na conta.",
  date: "2026-03-11",
  keywords: [
    "fgts rende quanto",
    "rendimento fgts 2026",
    "fgts rende por ano",
    "fgts vale a pena"
  ],
  content: `
    <p>O FGTS rende cerca de <strong>3% ao ano + Taxa Referencial (TR)</strong>.</p>

    <p>Na prática, isso significa um rendimento baixo comparado a outros investimentos.</p>

    <h2>Exemplo de rendimento</h2>

    <ul>
      <li>Saldo: R$ 10.000</li>
      <li>Rendimento anual: ~R$ 300</li>
    </ul>

    <h2>FGTS rende mais que poupança?</h2>

    <p>Na maioria dos casos, o FGTS rende menos que a poupança e muito menos que investimentos como Tesouro Direto.</p>

    <h2>Vale a pena deixar o dinheiro no FGTS?</h2>

    <p>Depende da sua situação. Em geral, o FGTS não é considerado um bom investimento, mas sim uma reserva obrigatória.</p>

    <div style="margin:20px 0;padding:20px;background:#ecfeff;">
      👉 <a href="/simuladores"><strong>Simular rendimento do seu FGTS</strong></a>
    </div>
  `,
},
{
  slug: "tabela-saque-aniversario-2026",
  title: "Tabela saque-aniversário FGTS 2026: veja quanto você pode sacar",
  description: "Confira a tabela oficial do saque-aniversário FGTS 2026 com valores, percentuais e exemplos práticos.",
  date: "2026-03-12",
  keywords: [
    "tabela saque aniversario fgts 2026",
    "fgts saque aniversario valores",
    "quanto posso sacar fgts",
    "fgts tabela oficial"
  ],
  content: `
    <p>O saque-aniversário permite retirar parte do saldo do FGTS todos os anos.</p>

    <h2>Tabela oficial do FGTS 2026</h2>

    <table border="1" cellpadding="8" style="border-collapse:collapse;width:100%">
      <tr>
        <th>Saldo</th>
        <th>Alíquota</th>
        <th>Parcela adicional</th>
      </tr>
      <tr><td>Até R$ 500</td><td>50%</td><td>-</td></tr>
      <tr><td>De R$ 500,01 a R$ 1.000</td><td>40%</td><td>R$ 50</td></tr>
      <tr><td>De R$ 1.000,01 a R$ 5.000</td><td>30%</td><td>R$ 150</td></tr>
      <tr><td>De R$ 5.000,01 a R$ 10.000</td><td>20%</td><td>R$ 650</td></tr>
      <tr><td>De R$ 10.000,01 a R$ 15.000</td><td>15%</td><td>R$ 1.150</td></tr>
      <tr><td>De R$ 15.000,01 a R$ 20.000</td><td>10%</td><td>R$ 1.900</td></tr>
      <tr><td>Acima de R$ 20.000</td><td>5%</td><td>R$ 2.900</td></tr>
    </table>

    <h2>Como calcular</h2>

    <p>Você aplica a alíquota sobre o saldo e soma a parcela adicional.</p>

    <p><strong>Exemplo:</strong></p>
    <ul>
      <li>Saldo: R$ 3.000</li>
      <li>30% = R$ 900</li>
      <li>+ R$ 150</li>
    </ul>

    <p><strong>Total: R$ 1.050</strong></p>

    <div style="margin:20px 0;padding:20px;background:#ecfeff;">
      👉 <a href="/simuladores"><strong>Simular meu saque-aniversário</strong></a>
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