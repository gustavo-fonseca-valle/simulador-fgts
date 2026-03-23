import SaqueAniversarioForm from "./SaqueAniversarioForm"
import AdsenseBlock from "@/components/AdsenseBlock"
import Link from "next/link"

export const metadata = {
  title: "Simulador Saque-Aniversário FGTS 2026: veja quanto você pode sacar",
  description:
    "Calcule quanto você pode sacar no FGTS em 2026 com o saque-aniversário. Simulador grátis com cálculo atualizado e valores reais.",
}

export default function SaqueAniversarioPage() {
  const url = "https://www.simuladorfgts.com.br/simuladores/saque-aniversario"

  return (
    <main className="max-w-3xl mx-auto px-6 py-12">

      {/* BREADCRUMB */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/">Home</Link> › <Link href="/simuladores">Simuladores</Link> › Saque-Aniversário
      </nav>

      {/* HERO */}
      <h1 className="text-4xl font-bold mb-6">
        Simulador Saque-Aniversário FGTS 2026: descubra quanto você pode sacar
      </h1>

      <p className="text-lg text-gray-700 mb-4">
        Calcule em segundos quanto você pode sacar do FGTS utilizando o saque-aniversário.
      </p>

      <p className="mb-4">
        👉 <strong>Informe seu saldo abaixo e veja o valor aproximado imediatamente.</strong>
      </p>

      {/* CTA */}
      <p className="mb-8">
        👉{" "}
        <Link href="#simulador" className="text-blue-600 underline font-semibold">
          Calcular meu saque agora
        </Link>
      </p>

      {/* ANÚNCIO */}
      <div className="my-10">
        <AdsenseBlock />
      </div>

      {/* FORM */}
      <div id="simulador">
        <SaqueAniversarioForm />
      </div>

      {/* ANÚNCIO */}
      <div className="my-10">
        <AdsenseBlock />
      </div>

      {/* RESULTADO + CTA INTERNO */}
      <section className="mt-10">
        <p className="text-gray-700">
          Após calcular, você verá o valor aproximado que pode sacar com base nas regras atuais do FGTS.
        </p>

        <p className="mt-4">
          👉{" "}
          <Link href="/tabela-saque-aniversario-fgts-2026" className="text-blue-600 underline font-semibold">
            Veja a tabela completa do saque-aniversário
          </Link>
        </p>
      </section>

      {/* CONTEÚDO SEO */}
      <section className="mt-12 space-y-6 text-gray-700">

        <h2 className="text-2xl font-semibold">
          Como calcular o saque-aniversário do FGTS
        </h2>

        <p>
          O valor do saque-aniversário é calculado com base no saldo total do FGTS. 
          Cada faixa aplica uma alíquota e uma parcela adicional fixa.
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Até R$ 500 → 50%</li>
          <li>De R$ 500,01 a R$ 1.000 → 40% + R$ 50</li>
          <li>De R$ 1.000,01 a R$ 5.000 → 30% + R$ 150</li>
          <li>De R$ 5.000,01 a R$ 10.000 → 20% + R$ 650</li>
          <li>Acima disso → percentuais menores com valores fixos maiores</li>
        </ul>

        <h2 className="text-2xl font-semibold">
          Exemplo de cálculo do saque-aniversário
        </h2>

        <div className="bg-gray-50 border rounded-lg p-4">
          <p className="font-semibold mb-2">Saldo: R$ 5.000</p>
          <p>20% = R$ 1.000</p>
          <p>+ R$ 650</p>
          <p className="font-semibold">Total: R$ 1.650</p>
        </div>

        <h2 className="text-2xl font-semibold">
          Saque-aniversário ou saque-rescisão?
        </h2>

        <p>
          Ao escolher o saque-aniversário, você poderá retirar valores todos os anos,
          mas não poderá sacar o saldo total em caso de demissão sem justa causa.
        </p>

        <p>
          👉{" "}
          <Link href="/blog/fgts-demissao" className="text-blue-600 underline">
            Veja quanto você recebe na demissão
          </Link>
        </p>

        <h2 className="text-2xl font-semibold">
          Vale a pena o saque-aniversário?
        </h2>

        <p>
          Pode ser vantajoso para quem precisa de dinheiro no curto prazo, mas reduz a proteção financeira em caso de demissão.
        </p>

      </section>

      {/* CTA FINAL */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">
          Descubra seu valor agora
        </h2>

        <p>
          👉{" "}
          <Link href="#simulador" className="text-blue-600 underline font-semibold">
            Use o simulador gratuito
          </Link>{" "}
          e veja quanto você pode sacar em poucos segundos.
        </p>
      </section>

      {/* FAQ */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Perguntas frequentes</h2>

        <h3 className="font-semibold">
          Como calcular o saque-aniversário?
        </h3>
        <p>
          Basta aplicar o percentual da faixa do saldo e somar a parcela adicional.
        </p>

        <h3 className="font-semibold mt-4">
          Posso sacar todo o FGTS na demissão?
        </h3>
        <p>
          Não. Apenas a multa de 40% é liberada.
        </p>
      </section>

    </main>
  )
}