import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t mt-20">
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">
        
        {/* Sobre */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Guia Trabalhista e Financeiro
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Portal informativo sobre FGTS, multa de 40%, saque-aniversário e
            direitos trabalhistas. Nosso objetivo é explicar regras de forma
            clara e acessível.
          </p>
        </div>

        {/* Links rápidos */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Links Úteis</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <Link href="/" className="hover:underline">
                Início
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:underline">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/simuladores/multa-40" className="hover:underline">
                Simulador Multa 40% FGTS
              </Link>
            </li>
            <li>
              <Link href="/simuladores/saque-aniversario" className="hover:underline">
                Simulador Saque-Aniversário
              </Link>
            </li>
          </ul>
        </div>

        {/* Institucional */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Institucional</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <Link href="/sobre" className="hover:underline">
                Sobre
              </Link>
            </li>
            <li>
              <Link href="/contato" className="hover:underline">
                Contato
              </Link>
            </li>
            <li>
              <Link href="/politica-de-privacidade" className="hover:underline">
                Política de Privacidade
              </Link>
            </li>
            <li>
              <Link href="/termos-de-uso" className="hover:underline">
                Termos de Uso
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Guia Trabalhista e Financeiro. 
        Todos os direitos reservados.
      </div>
    </footer>
  )
}