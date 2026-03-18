"use client"

import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-16 border-t">
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-10">

        {/* Sobre */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Simulador FGTS
          </h3>

          <p className="text-gray-600 text-sm leading-relaxed mb-3">
            Ferramentas e guias completos para calcular FGTS,
            multa de 40%, saque-aniversário e entender seus direitos.
          </p>

          <p className="text-gray-500 text-xs">
            Este site é independente e não possui vínculo com a Caixa Econômica Federal.
          </p>
        </div>

        {/* Simuladores (FOCO $$$) */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Simuladores</h3>

          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <Link href="/simuladores/multa-40" className="hover:underline">
                Multa de 40% do FGTS
              </Link>
            </li>

            <li>
              <Link href="/simuladores/saque-aniversario" className="hover:underline">
                Saque-Aniversário FGTS
              </Link>
            </li>
          </ul>
        </div>

        {/* Blog (SEO FORTE) */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Artigos</h3>

          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <Link href="/blog/como-calcular-fgts" className="hover:underline">
                Como calcular FGTS
              </Link>
            </li>

            <li>
              <Link href="/blog/fgts-demissao" className="hover:underline">
                FGTS na demissão
              </Link>
            </li>

            <li>
              <Link href="/blog/fgts-rende-quanto-por-ano" className="hover:underline">
                Rendimento do FGTS
              </Link>
            </li>

            <li>
              <Link href="/blog" className="hover:underline">
                Ver todos os artigos
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

      {/* SEO extra */}
      <div className="max-w-4xl mx-auto px-6 pb-6 text-xs text-gray-500 text-center">
        Simulador FGTS online gratuito para calcular valores de FGTS,
        multa rescisória e saque-aniversário atualizado para 2026.
      </div>

      {/* Copyright */}
      <div className="border-t py-6 text-center text-sm text-gray-500 px-4">
        © {new Date().getFullYear()} Simulador FGTS. Todos os direitos reservados.
      </div>
    </footer>
  )
}