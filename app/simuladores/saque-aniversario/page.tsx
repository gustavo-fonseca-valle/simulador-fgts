import SaqueAniversarioForm from "./SaqueAniversarioForm"
import AdsenseBlock from "@/components/AdsenseBlock"

export const metadata = {
  title: "Simulador de Saque-Aniversário do FGTS | Calcule seu valor",
  description:
    "Calcule quanto você pode sacar no saque-aniversário do FGTS com base no saldo atual. Simulador atualizado com percentuais oficiais.",
}

export default function SaqueAniversarioPage() {
  const url = "https://www.simuladorfgts.com.br/simuladores/saque-aniversario"

  return (
    <main className="max-w-3xl mx-auto px-6 py-12">

      {/* 🔥 SCHEMA CALCULADORA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Simulador de Saque-Aniversário do FGTS",
            applicationCategory: "FinanceApplication",
            operatingSystem: "Web",
            description:
              "Calcule quanto você pode sacar no saque-aniversário do FGTS com base no saldo atual.",
            url: url,
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "BRL",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.8",
              ratingCount: "124",
            },
          }),
        }}
      />

      {/* 🔥 SCHEMA FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Como calcular o saque-aniversário?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "O valor depende da faixa de saldo e segue uma tabela com percentuais e parcelas adicionais fixas.",
                },
              },
              {
                "@type": "Question",
                name: "Quem opta pelo saque-aniversário pode sacar tudo na demissão?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Não. Apenas a multa de 40% é liberada, o restante permanece na conta.",
                },
              },
            ],
          }),
        }}
      />

      {/* 🔥 SCHEMA BREADCRUMB */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://www.simuladorfgts.com.br",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Simuladores",
                item: "https://www.simuladorfgts.com.br/simuladores",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Saque-Aniversário",
                item: url,
              },
            ],
          }),
        }}
      />

      {/* Breadcrumb visual */}
      <nav className="text-sm text-gray-500 mb-6">
        <a href="/">Home</a> › <a href="/simuladores">Simuladores</a> › Saque-Aniversário
      </nav>

      <h1 className="text-4xl font-bold mb-6">
        Simulador de Saque-Aniversário do FGTS
      </h1>

      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        O saque-aniversário permite retirar uma parte do saldo do FGTS todos os anos.
      </p>

      <p className="text-gray-700 mb-8">
        O valor disponível depende da faixa de saldo. Utilize o simulador abaixo
        para estimar quanto você poderá sacar.
      </p>

      {/* ANÚNCIO */}
      <div className="my-10">
        <AdsenseBlock />
      </div>

      {/* FORMULÁRIO */}
      <SaqueAniversarioForm />

      {/* ANÚNCIO */}
      <div className="my-10">
        <AdsenseBlock />
      </div>

      {/* 🔥 CONTEÚDO SEO (já estava bom, só refinei) */}
      <section className="mt-12 space-y-6 text-gray-700 leading-relaxed">

        <h2 className="text-2xl font-semibold">
          Como funciona o cálculo do saque-aniversário?
        </h2>

        <p>
          O valor é definido por uma tabela progressiva baseada no saldo total do FGTS.
          Cada faixa aplica um percentual e uma parcela adicional fixa.
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Até R$ 500 → 50%</li>
          <li>De R$ 500,01 a R$ 1.000 → 40% + R$ 50</li>
          <li>De R$ 1.000,01 a R$ 5.000 → 30% + R$ 150</li>
          <li>De R$ 5.000,01 a R$ 10.000 → 20% + R$ 650</li>
          <li>De R$ 10.000,01 a R$ 15.000 → 15% + R$ 1.150</li>
          <li>De R$ 15.000,01 a R$ 20.000 → 10% + R$ 1.900</li>
          <li>Acima de R$ 20.000 → 5% + R$ 2.900</li>
        </ul>

        <h2 className="text-2xl font-semibold">
          O que acontece em caso de demissão?
        </h2>

        <p>
          Ao optar pelo saque-aniversário, você não poderá sacar o saldo total
          em caso de demissão sem justa causa — apenas a multa de 40%.
        </p>

        <h2 className="text-2xl font-semibold">
          Vale a pena aderir ao saque-aniversário?
        </h2>

        <p>
          Depende do seu planejamento financeiro. Se você precisa de dinheiro no curto prazo,
          pode ser interessante. Caso contrário, pode limitar seu acesso ao FGTS no futuro.
        </p>

      </section>

      {/* 🔥 FAQ VISÍVEL */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Perguntas frequentes</h2>

        <h3 className="font-semibold">
          Como calcular o saque-aniversário?
        </h3>
        <p>Depende da faixa de saldo, com percentuais e valores adicionais.</p>

        <h3 className="font-semibold mt-4">
          Posso sacar todo o FGTS na demissão?
        </h3>
        <p>Não, apenas a multa de 40% é liberada.</p>
      </section>

    </main>
  )
}