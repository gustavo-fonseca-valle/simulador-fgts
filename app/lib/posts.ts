export type Post = {
  slug: string
  title: string
  description: string
  content: string
}

export const posts: Post[] = [
  {
    slug: "saque-aniversario-vale-a-pena-2026",
    title: "Saque-Aniversário 2026: Vale a pena?",
    description:
      "Entenda as vantagens e desvantagens do saque-aniversário e quando compensa aderir.",
    content: `
O saque-aniversário permite retirar uma parte do saldo do FGTS todos os anos no mês do seu aniversário.

Vantagens:
- Acesso antecipado ao dinheiro
- Pode ajudar em emergências

Desvantagens:
- Perde o direito ao saque total em caso de demissão
- Recebe apenas a multa de 40%

Antes de aderir, avalie sua estabilidade profissional e reserva de emergência.
    `,
  },
  {
    slug: "como-calcular-multa-40-fgts",
    title: "Como calcular a multa de 40% do FGTS",
    description:
      "Aprenda como funciona o cálculo da multa rescisória e veja exemplos práticos.",
    content: `
A multa de 40% incide sobre todo o valor depositado pela empresa durante o contrato.

Exemplo:
Se a empresa depositou R$ 50.000 ao longo do contrato,
a multa será de R$ 20.000.

Fórmula:
Total depositado x 0,40
    `,
  },
]