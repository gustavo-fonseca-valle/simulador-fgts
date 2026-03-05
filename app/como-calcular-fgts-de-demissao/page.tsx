export const metadata = {
  title: "Como calcular FGTS de demissão (guia completo)",
  description:
    "Aprenda como calcular o FGTS em caso de demissão sem justa causa, incluindo a multa de 40% e exemplos práticos.",
}

export default function CalcularFgtsDemissaoPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">
        Como calcular o FGTS de demissão
      </h1>

      <p className="mb-4">
        Quando um trabalhador é demitido sem justa causa, ele tem direito a
        sacar o saldo do FGTS acumulado durante o período de trabalho, além de
        receber uma multa de 40% sobre o valor depositado pelo empregador.
      </p>

      <p className="mb-6">
        Entender como calcular o FGTS da demissão ajuda a ter uma estimativa de
        quanto será recebido após o encerramento do contrato de trabalho.
      </p>

      <h2 className="text-2xl font-semibold mb-4">
        Como funciona o depósito do FGTS
      </h2>

      <p className="mb-4">
        Todos os meses o empregador deposita 8% do salário bruto do trabalhador
        em uma conta vinculada do FGTS. Esse valor não é descontado do salário,
        sendo uma obrigação da empresa.
      </p>

      <p className="mb-6">
        Ao longo do tempo, esses depósitos formam o saldo disponível na conta do
        fundo de garantia.
      </p>

      <h2 className="text-2xl font-semibold mb-4">
        Multa de 40% do FGTS
      </h2>

      <p className="mb-4">
        Em caso de demissão sem justa causa, o trabalhador recebe uma multa de
        40% sobre todos os depósitos feitos pelo empregador durante o contrato
        de trabalho.
      </p>

      <p className="mb-6">
        Essa multa é paga pela empresa e depositada na conta do FGTS do
        trabalhador no momento da rescisão.
      </p>

      <h2 className="text-2xl font-semibold mb-4">
        Exemplo de cálculo do FGTS na demissão
      </h2>

      <p className="mb-4">
        Veja um exemplo simples para entender o cálculo.
      </p>

      <ul className="list-disc pl-6 mb-6">
        <li>Salário mensal: R$ 3.000</li>
        <li>Depósito mensal do FGTS: 8% (R$ 240)</li>
        <li>Tempo de trabalho: 24 meses</li>
      </ul>

      <p className="mb-4">
        Total depositado no período:
      </p>

      <p className="font-medium mb-4">
        R$ 240 × 24 meses = R$ 5.760
      </p>

      <p className="mb-4">
        Cálculo da multa de 40%:
      </p>

      <p className="font-medium mb-6">
        40% de R$ 5.760 = R$ 2.304
      </p>

      <p className="mb-6">
        Nesse exemplo, o trabalhador teria direito ao saque do saldo do FGTS
        mais a multa de R$ 2.304 paga pela empresa.
      </p>

      <h2 className="text-2xl font-semibold mb-4">
        Quem optou pelo saque-aniversário pode sacar o FGTS?
      </h2>

      <p className="mb-4">
        Trabalhadores que optaram pelo saque-aniversário continuam recebendo a
        multa de 40% em caso de demissão. No entanto, não podem sacar o saldo
        total do FGTS imediatamente, apenas a multa rescisória.
      </p>

      <p className="mb-6">
        O restante do saldo permanece na conta do FGTS e segue as regras da
        modalidade escolhida.
      </p>

      <h2 className="text-2xl font-semibold mb-4">
        Como simular o valor do FGTS
      </h2>

      <p className="mb-4">
        Para ter uma estimativa mais precisa do valor que você pode receber, é
        possível utilizar um simulador de FGTS informando seu salário e tempo
        de trabalho.
      </p>

      <p>
        Utilize o simulador disponível na página inicial do nosso site para
        calcular rapidamente o valor aproximado do seu FGTS e da multa
        rescisória.
      </p>
    </main>
  )
}