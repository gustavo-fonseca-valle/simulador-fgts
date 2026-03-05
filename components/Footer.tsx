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

          <p className="text-gray-600 text-sm leading-relaxed mb-3">
            Portal informativo sobre FGTS, multa de 40%, saque-aniversário
            e direitos trabalhistas.
          </p>

          <p className="text-gray-500 text-xs">
            Este site é independente e não possui vínculo com a
            Caixa Econômica Federal ou órgãos do governo.
          </p>
        </div>

        {/* Links rápidos */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Ferramentas</h3>

          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <Link href="/" className="hover:underline">
                Página Inicial
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

            <li>
              <Link href="/blog" className="hover:underline">
                Blog FGTS
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

      {/* Copyright */}
      <div className="border-t py-6 text-center text-sm text-gray-500 px-4">
        © {new Date().getFullYear()} Simulador FGTS – Guia Trabalhista e Financeiro.  
        Conteúdo informativo sobre FGTS e direitos trabalhistas.
      </div>
    </footer>
  )
}