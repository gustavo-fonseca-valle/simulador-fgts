export const metadata = {
  title: "FGTS rende quanto por ano? Veja a rentabilidade atual",
  description:
    "Descubra quanto rende o FGTS por ano, como funciona a correção do fundo e veja exemplos de cálculo da rentabilidade.",
}

export default function FgtsRendimentoPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">
        FGTS rende quanto por ano?
      </h1>

      <p className="mb-4">
        O FGTS (Fundo de Garantia do Tempo de Serviço) possui uma forma própria
        de rendimento definida por lei. Todos os valores depositados nas contas
        do FGTS são corrigidos mensalmente e recebem uma remuneração anual.
      </p>

      <p className="mb-6">
        Atualmente, o rendimento do FGTS é composto por duas partes principais:
        a taxa fixa de 3% ao ano e a correção monetária baseada na Taxa
        Referencial (TR).
      </p>

      <h2 className="text-2xl font-semibold mb-4">
        Como funciona o rendimento do FGTS
      </h2>

      <p className="mb-4">
        O saldo das contas do FGTS recebe uma remuneração básica de 3% ao ano,
        além da atualização pela Taxa Referencial (TR). Essa correção é aplicada
        mensalmente ao saldo existente.
      </p>

      <p className="mb-6">
        Além disso, nos últimos anos o governo também distribui parte do lucro
        anual do FGTS aos trabalhadores, aumentando ligeiramente a
        rentabilidade final.
      </p>

      <h2 className="text-2xl font-semibold mb-4">
        Quanto o FGTS rende na prática
      </h2>

      <p className="mb-4">
        Na prática, o rendimento anual do FGTS costuma ficar entre
        aproximadamente 3% e 6% ao ano, dependendo da distribuição de lucros do
        fundo em cada ano.
      </p>

      <p className="mb-6">
        Esse rendimento normalmente é menor do que muitos investimentos
        disponíveis no mercado financeiro, mas o FGTS tem como objetivo
        principal servir como uma reserva de segurança para o trabalhador.
      </p>

      <h2 className="text-2xl font-semibold mb-4">
        Exemplo de rendimento do FGTS
      </h2>

      <p className="mb-4">
        Veja um exemplo simples de quanto o saldo pode render em um ano.
      </p>

      <ul className="list-disc pl-6 mb-6">
        <li>Saldo no FGTS: R$ 10.000</li>
        <li>Rendimento base: 3% ao ano</li>
        <li>Rendimento aproximado: R$ 300 no ano</li>
      </ul>

      <p className="mb-6">
        Caso haja distribuição de lucro do fundo, esse valor pode ser um pouco
        maior.
      </p>

      <h2 className="text-2xl font-semibold mb-4">
        FGTS rende mais que a poupança?
      </h2>

      <p className="mb-4">
        Em muitos períodos, o rendimento do FGTS fica próximo ou até abaixo da
        poupança. No entanto, o FGTS não funciona como um investimento
        tradicional, já que os depósitos são realizados pelo empregador e
        possuem regras específicas para saque.
      </p>

      <p className="mb-6">
        Por esse motivo, o FGTS deve ser visto mais como uma garantia financeira
        para situações específicas, como demissão sem justa causa, compra de
        imóvel ou aposentadoria.
      </p>

      <h2 className="text-2xl font-semibold mb-4">
        Como consultar o saldo do FGTS
      </h2>

      <p className="mb-4">
        O trabalhador pode consultar o saldo do FGTS através do aplicativo
        oficial do FGTS, do site da Caixa Econômica Federal ou diretamente em
        uma agência.
      </p>

      <p>
        Saber o saldo atualizado é importante para entender quanto seu dinheiro
        está rendendo e também para utilizar simuladores que estimam valores de
        saque, como no caso do saque-aniversário.
      </p>
    </main>
  )
}