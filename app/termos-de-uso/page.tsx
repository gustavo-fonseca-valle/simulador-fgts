export const metadata = {
  title: "Termos de Uso",
  description:
    "Leia os termos e condições de uso do nosso site e entenda suas responsabilidades ao utilizar nossos conteúdos e simuladores.",
}

export default function TermosDeUso() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">

      <h1 className="text-4xl font-bold mb-6">
        Termos de Uso
      </h1>

      <p className="mb-6 text-gray-700">
        Ao acessar e utilizar este site, você concorda com os termos e
        condições descritos abaixo. Caso não concorde com qualquer parte
        destes termos, recomendamos que não utilize o site.
      </p>

      <section className="space-y-6 text-gray-800">

        <h2 className="text-2xl font-semibold">
          1. Finalidade do site
        </h2>

        <p>
          Este site disponibiliza conteúdos informativos e ferramentas de
          simulação relacionadas a temas financeiros e trabalhistas.
          As informações têm caráter educativo e não constituem
          aconselhamento jurídico, financeiro ou contábil.
        </p>

        <h2 className="text-2xl font-semibold">
          2. Uso das informações
        </h2>

        <p>
          O usuário é responsável pela forma como utiliza as informações
          disponibilizadas. As decisões tomadas com base no conteúdo do
          site são de inteira responsabilidade do usuário.
        </p>

        <h2 className="text-2xl font-semibold">
          3. Simuladores e estimativas
        </h2>

        <p>
          As ferramentas de simulação fornecem estimativas com base em
          dados inseridos pelo usuário e regras públicas conhecidas.
          Os resultados podem variar conforme alterações na legislação,
          regras institucionais ou situações específicas.
        </p>

        <p>
          Não garantimos exatidão absoluta dos cálculos, sendo recomendável
          confirmar informações junto às fontes oficiais ou profissionais
          especializados.
        </p>

        <h2 className="text-2xl font-semibold">
          4. Propriedade intelectual
        </h2>

        <p>
          Todo o conteúdo do site, incluindo textos, estrutura,
          códigos e ferramentas, é protegido por direitos autorais.
          É proibida a reprodução sem autorização prévia.
        </p>

        <h2 className="text-2xl font-semibold">
          5. Publicidade
        </h2>

        <p>
          Este site pode exibir anúncios por meio de plataformas
          como o Google AdSense. A exibição de anúncios contribui
          para a manutenção do projeto e não interfere na produção
          de conteúdo.
        </p>

        <h2 className="text-2xl font-semibold">
          6. Limitação de responsabilidade
        </h2>

        <p>
          Não nos responsabilizamos por perdas ou danos decorrentes
          da utilização das informações ou ferramentas disponíveis
          neste site.
        </p>

        <h2 className="text-2xl font-semibold">
          7. Modificações
        </h2>

        <p>
          Reservamo-nos o direito de modificar estes Termos de Uso
          a qualquer momento, sendo recomendável a revisão periódica
          desta página.
        </p>

        <h2 className="text-2xl font-semibold">
          8. Contato
        </h2>

        <p>
          Em caso de dúvidas sobre estes Termos de Uso,
          entre em contato por meio da página de contato do site.
        </p>

      </section>

    </main>
  )
}