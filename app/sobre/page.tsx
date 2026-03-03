export const metadata = {
  title: "Sobre Nós",
  description:
    "Conheça o propósito do nosso site e como desenvolvemos conteúdos e simuladores financeiros de forma clara e responsável.",
}

export default function SobrePage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">

      <h1 className="text-4xl font-bold mb-6">
        Sobre o Projeto
      </h1>

      <p className="mb-6 text-gray-700">
        Este site foi criado com o objetivo de oferecer informações claras,
        acessíveis e práticas sobre temas financeiros e trabalhistas,
        incluindo ferramentas de simulação para auxiliar no planejamento pessoal.
      </p>

      <section className="space-y-6 text-gray-800">

        <h2 className="text-2xl font-semibold">
          Nossa missão
        </h2>

        <p>
          Nossa missão é simplificar informações que muitas vezes são
          complexas ou difíceis de entender, ajudando o usuário a tomar
          decisões mais conscientes e bem informadas.
        </p>

        <h2 className="text-2xl font-semibold">
          Como desenvolvemos o conteúdo
        </h2>

        <p>
          Todo o conteúdo publicado é elaborado com base em fontes públicas,
          legislação vigente e boas práticas de educação financeira.
          Buscamos manter as informações atualizadas e apresentadas de forma
          didática.
        </p>

        <p>
          As ferramentas de simulação disponíveis no site têm caráter
          informativo e estimativo, não substituindo orientação profissional
          especializada.
        </p>

        <h2 className="text-2xl font-semibold">
          Transparência e responsabilidade
        </h2>

        <p>
          Trabalhamos com transparência e responsabilidade na divulgação
          de informações. Caso identifique qualquer imprecisão ou deseje
          sugerir melhorias, entre em contato através da página de contato.
        </p>

        <h2 className="text-2xl font-semibold">
          Monetização e publicidade
        </h2>

        <p>
          Este site pode exibir anúncios por meio de plataformas de publicidade
          como o Google AdSense. Esses anúncios ajudam a manter o projeto ativo
          e gratuito para todos os usuários.
        </p>

        <p>
          A exibição de anúncios não influencia a produção de conteúdo,
          que permanece independente e focado na utilidade para o leitor.
        </p>

      </section>

    </main>
  )
}