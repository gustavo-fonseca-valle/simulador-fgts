export const metadata = {
  title: "Contato | Guia Trabalhista e Financeiro",
  description:
    "Entre em contato para dúvidas, sugestões ou parcerias relacionadas a FGTS, direitos trabalhistas e simuladores financeiros.",
}

export default function ContatoPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-6">Fale Conosco</h1>

      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Se você tem dúvidas sobre FGTS, multa de 40%, saque-aniversário ou
        deseja sugerir melhorias em nossos simuladores, estamos à disposição.
      </p>

      <p className="text-gray-700 mb-6">
        Nosso compromisso é fornecer informações claras, objetivas e
        atualizadas para ajudar trabalhadores a entenderem seus direitos e
        tomarem decisões financeiras mais seguras.
      </p>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          📩 Como entrar em contato
        </h2>

        <p className="text-gray-700 mb-2">
          Você pode enviar sua mensagem pelo e-mail abaixo:
        </p>

        <p className="text-blue-600 font-medium">
          gusfvalle@gmail.com
        </p>

        <p className="text-gray-600 mt-4">
          Respondemos normalmente em até 2 dias úteis.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          🤝 Parcerias e publicidade
        </h2>

        <p className="text-gray-700">
          Para propostas comerciais, parcerias estratégicas ou assuntos
          relacionados à publicidade, utilize o mesmo canal de contato.
        </p>
      </section>

      <section className="text-gray-600 text-sm leading-relaxed">
        <p>
          Este site tem caráter informativo e educacional. Não realizamos
          atendimento jurídico individual nem substituímos orientação
          profissional especializada.
        </p>
      </section>
    </main>
  )
}