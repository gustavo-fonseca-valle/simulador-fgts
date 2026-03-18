export type Post = {
  slug: string
  title: string
  description: string
  content: string
  date: string
}

export const posts = [
  {
    slug: "como-calcular-fgts",
    title: "Como calcular o FGTS corretamente em 2026",
    description: "Aprenda a calcular seu FGTS passo a passo e veja quanto você deveria ter acumulado.",
    date: "Março de 2026",
    content: `
      <p>O FGTS é um direito de todo trabalhador CLT. A empresa deposita mensalmente <strong>8% do salário bruto</strong> em uma conta vinculada.</p>

      <h2>Como calcular o FGTS</h2>
      <p>Use a fórmula:</p>
      <pre>salário × 0,08 × meses trabalhados</pre>

      <p>Exemplo:</p>
      <ul>
        <li>Salário: R$ 3.000</li>
        <li>Tempo: 24 meses</li>
      </ul>

      <p><strong>Total: R$ 5.760</strong></p>

      <h2>O que pode alterar o valor</h2>
      <ul>
        <li>Juros anuais</li>
        <li>Alterações salariais</li>
        <li>Saques realizados</li>
      </ul>

      <div style="margin:20px 0; padding:20px; background:#f0fdf4;">
        <strong>👉 <a href="/simuladores">Simule seu FGTS agora</a></strong>
      </div>

      <p>Veja também: <a href="/blog/fgts-demissao">quanto você recebe na demissão</a>.</p>
    `,
  },

  {
    slug: "fgts-demissao",
    title: "FGTS na demissão: quanto você recebe?",
    description: "Veja como calcular o saldo do FGTS e a multa de 40% na demissão sem justa causa.",
    date: "Março de 2026",
    content: `
      <p>Na demissão sem justa causa, você pode sacar todo o FGTS e ainda recebe uma multa de 40%.</p>

      <h2>Como calcular</h2>
      <p>Exemplo:</p>
      <ul>
        <li>Saldo: R$ 10.000</li>
        <li>Multa: R$ 4.000</li>
      </ul>

      <p><strong>Total: R$ 14.000</strong></p>

      <div style="margin:20px 0; padding:20px; background:#fef3c7;">
        <strong>👉 <a href="/simuladores">Calcule sua rescisão agora</a></strong>
      </div>

      <p>Leia também: <a href="/blog/como-calcular-fgts">como calcular o FGTS</a>.</p>
    `,
  },

  {
    slug: "fgts-rende-quanto-por-ano",
    title: "Quanto rende o FGTS por ano em 2026?",
    description: "Descubra quanto rende o FGTS e compare com outros investimentos.",
    date: "Março de 2026",
    content: `
      <p>O FGTS rende cerca de <strong>3% ao ano + TR</strong>.</p>

      <h2>Comparação</h2>
      <ul>
        <li>FGTS: ~3% a 4%</li>
        <li>Poupança: ~6%</li>
        <li>CDI: ~10%+</li>
      </ul>

      <p>Isso significa que o FGTS muitas vezes perde para a inflação.</p>

      <div style="margin:20px 0; padding:20px; background:#ecfeff;">
        <strong>👉 <a href="/simuladores">Veja quanto seu FGTS poderia render</a></strong>
      </div>
    `,
  },

  {
    slug: "saque-aniversario-vale-a-pena",
    title: "Saque-aniversário FGTS vale a pena?",
    description: "Entenda as vantagens e desvantagens do saque-aniversário.",
    date: "Março de 2026",
    content: `
      <p>O saque-aniversário permite retirar parte do FGTS todos os anos.</p>

      <h2>Vantagens</h2>
      <ul>
        <li>Acesso ao dinheiro</li>
        <li>Antecipação via bancos</li>
      </ul>

      <h2>Desvantagens</h2>
      <ul>
        <li>Não pode sacar tudo na demissão</li>
      </ul>

      <p>Veja a <a href="/tabela-saque-aniversario-fgts-2026">tabela completa</a>.</p>
    `,
  },

  {
    slug: "fgts-atrasado-o-que-fazer",
    title: "FGTS atrasado: o que fazer?",
    description: "Saiba como agir se a empresa não está depositando seu FGTS.",
    date: "Março de 2026",
    content: `
      <p>Se a empresa não deposita o FGTS, isso é ilegal.</p>

      <h2>O que fazer</h2>
      <ul>
        <li>Falar com RH</li>
        <li>Denunciar</li>
        <li>Ação judicial</li>
      </ul>

      <p>Veja também: <a href="/blog/como-consultar-fgts">como consultar seu FGTS</a>.</p>
    `,
  },

  {
    slug: "como-consultar-fgts",
    title: "Como consultar seu FGTS online",
    description: "Veja como consultar o saldo do FGTS pelo app ou site.",
    date: "Março de 2026",
    content: `
      <p>Você pode consultar seu FGTS pelo app oficial.</p>

      <h2>Passo a passo</h2>
      <ul>
        <li>Baixe o app FGTS</li>
        <li>Faça login</li>
        <li>Consulte o extrato</li>
      </ul>
    `,
  },

  {
    slug: "fgts-para-imovel",
    title: "Como usar o FGTS para comprar imóvel",
    description: "Veja como usar o FGTS para entrada ou quitação de imóvel.",
    date: "Março de 2026",
    content: `
      <p>O FGTS pode ser usado para comprar imóveis.</p>

      <h2>Requisitos</h2>
      <ul>
        <li>3 anos de trabalho</li>
        <li>Não possuir outro imóvel</li>
      </ul>
    `,
  },

  {
    slug: "antecipacao-saque-aniversario",
    title: "Antecipação do saque-aniversário FGTS",
    description: "Veja como funciona a antecipação do FGTS e se vale a pena.",
    date: "Março de 2026",
    content: `
      <p>A antecipação permite receber valores futuros do FGTS.</p>

      <h2>Vantagens</h2>
      <ul>
        <li>Dinheiro rápido</li>
      </ul>

      <h2>Desvantagens</h2>
      <ul>
        <li>Compromete saldo</li>
      </ul>
    `,
  },

  {
    slug: "quanto-tenho-de-fgts",
    title: "Quanto tenho de FGTS? Veja como calcular",
    description: "Aprenda a estimar seu saldo de FGTS facilmente.",
    date: "Março de 2026",
    content: `
      <p>Você pode estimar seu FGTS facilmente.</p>

      <p>Use nosso simulador para calcular:</p>

      <div style="margin:20px 0;">
        <strong>👉 <a href="/simuladores">Simular FGTS</a></strong>
      </div>
    `,
  },

  {
    slug: "fgts-quem-tem-direito",
    title: "Quem tem direito ao FGTS?",
    description: "Entenda quem pode receber FGTS e em quais casos.",
    date: "Março de 2026",
    content: `
      <p>Todo trabalhador CLT tem direito ao FGTS.</p>

      <h2>Inclui</h2>
      <ul>
        <li>Trabalhadores urbanos</li>
        <li>Rurais</li>
        <li>Temporários</li>
      </ul>
    `,
  },
  {
  slug: "fgts-salario-1000",
  title: "FGTS de quem ganha R$ 1.000: quanto dá por mês e por ano?",
  description: "Veja quanto é depositado de FGTS para salário de R$ 1.000.",
  date: "Março de 2026",
  content: `
    <p>Quem ganha R$ 1.000 recebe <strong>R$ 80 por mês</strong> de FGTS.</p>
    <p>Em 1 ano: <strong>R$ 960</strong></p>

    <div><strong>👉 <a href="/simuladores">Simular FGTS completo</a></strong></div>
  `,
},

{
  slug: "fgts-salario-1500",
  title: "FGTS de quem ganha R$ 1.500: quanto dá?",
  description: "Veja o cálculo do FGTS para salário de R$ 1.500.",
  date: "Março de 2026",
  content: `
    <p>Depósito mensal: <strong>R$ 120</strong></p>
    <p>Em 12 meses: <strong>R$ 1.440</strong></p>
  `,
},

{
  slug: "fgts-salario-2000",
  title: "FGTS de quem ganha R$ 2.000: valor mensal e anual",
  description: "Descubra quanto rende o FGTS para salário de R$ 2.000.",
  date: "Março de 2026",
  content: `
    <p>Depósito mensal: <strong>R$ 160</strong></p>
    <p>Em 1 ano: <strong>R$ 1.920</strong></p>
  `,
},

{
  slug: "fgts-salario-2500",
  title: "FGTS de quem ganha R$ 2.500: veja o valor",
  description: "Cálculo completo do FGTS para salário de R$ 2.500.",
  date: "Março de 2026",
  content: `
    <p>Depósito mensal: <strong>R$ 200</strong></p>
    <p>Em 12 meses: <strong>R$ 2.400</strong></p>
  `,
},

{
  slug: "fgts-salario-3000",
  title: "FGTS de quem ganha R$ 3.000: quanto recebe?",
  description: "Veja quanto é depositado de FGTS para salário de R$ 3.000.",
  date: "Março de 2026",
  content: `
    <p>Depósito mensal: <strong>R$ 240</strong></p>
    <p>Em 1 ano: <strong>R$ 2.880</strong></p>

    <p>Veja também: <a href="/blog/fgts-demissao">FGTS na demissão</a></p>
  `,
},

{
  slug: "fgts-salario-4000",
  title: "FGTS de quem ganha R$ 4.000: valor detalhado",
  description: "Veja quanto é o FGTS mensal e anual para salário de R$ 4.000.",
  date: "Março de 2026",
  content: `
    <p>Depósito mensal: <strong>R$ 320</strong></p>
    <p>Em 1 ano: <strong>R$ 3.840</strong></p>
  `,
},

{
  slug: "fgts-salario-5000",
  title: "FGTS de quem ganha R$ 5.000: quanto acumula?",
  description: "Cálculo do FGTS para salário de R$ 5.000.",
  date: "Março de 2026",
  content: `
    <p>Depósito mensal: <strong>R$ 400</strong></p>
    <p>Em 1 ano: <strong>R$ 4.800</strong></p>
  `,
},

{
  slug: "fgts-2-anos-trabalho",
  title: "Quanto tenho de FGTS com 2 anos de trabalho?",
  description: "Veja quanto você pode ter acumulado em 2 anos.",
  date: "Março de 2026",
  content: `
    <p>Depende do salário, mas exemplo:</p>
    <p>R$ 3.000 → <strong>R$ 5.760</strong></p>
  `,
},

{
  slug: "fgts-3-anos-trabalho",
  title: "FGTS com 3 anos de trabalho: quanto dá?",
  description: "Simule quanto você tem de FGTS após 3 anos.",
  date: "Março de 2026",
  content: `
    <p>R$ 3.000 → <strong>R$ 8.640</strong></p>
  `,
},

{
  slug: "fgts-5-anos-trabalho",
  title: "FGTS com 5 anos de trabalho: valor acumulado",
  description: "Veja quanto você pode ter após 5 anos de FGTS.",
  date: "Março de 2026",
  content: `
    <p>R$ 3.000 → <strong>R$ 14.400</strong></p>
  `,
},

{
  slug: "fgts-10-anos-trabalho",
  title: "FGTS com 10 anos de trabalho: quanto dá?",
  description: "Descubra o valor acumulado em 10 anos.",
  date: "Março de 2026",
  content: `
    <p>R$ 3.000 → <strong>R$ 28.800</strong></p>
  `,
},

{
  slug: "fgts-multa-40-calculo",
  title: "Como calcular a multa de 40% do FGTS",
  description: "Aprenda a calcular a multa do FGTS na demissão.",
  date: "Março de 2026",
  content: `
    <p>Multiplique o saldo por 0,4.</p>
    <p>Exemplo: R$ 10.000 → <strong>R$ 4.000</strong></p>
  `,
},

{
  slug: "fgts-quanto-recebo-demissao",
  title: "Quanto vou receber de FGTS na demissão?",
  description: "Simule quanto você recebe ao ser demitido.",
  date: "Março de 2026",
  content: `
    <p>Você recebe saldo + multa de 40%.</p>

    <div><strong>👉 <a href="/simuladores">Simular agora</a></strong></div>
  `,
},

{
  slug: "fgts-calculo-mensal",
  title: "FGTS cálculo mensal: como funciona?",
  description: "Veja como calcular o FGTS mensal corretamente.",
  date: "Março de 2026",
  content: `
    <p>O cálculo é sempre 8% do salário bruto.</p>
  `,
},

{
  slug: "fgts-valor-por-mes",
  title: "Quanto é o FGTS por mês?",
  description: "Entenda quanto é depositado de FGTS mensalmente.",
  date: "Março de 2026",
  content: `
    <p>Depende do salário, mas sempre 8%.</p>
  `,
}
];