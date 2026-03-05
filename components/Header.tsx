"use client"

import Link from "next/link"
import { useState } from "react"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="border-b bg-white">
      <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-gray-900">
          Guia Trabalhista
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
          <Link href="/" className="hover:text-black">
            Home
          </Link>

          <Link href="/blog" className="hover:text-black">
            Blog
          </Link>

          <Link href="/simuladores/multa-40" className="hover:text-black">
            Multa 40%
          </Link>

          <Link href="/simuladores/saque-aniversario" className="hover:text-black">
            Saque-Aniversário
          </Link>

          <Link href="/tabela-saque-aniversario-fgts-2026" className="hover:text-black">
            Tabela FGTS
          </Link>

          <Link href="/fgts-rende-quanto-por-ano" className="hover:text-black">
            Rendimento FGTS
          </Link>

          <Link href="/como-calcular-fgts-de-demissao" className="hover:text-black">
            FGTS Demissão
          </Link>

          <Link href="/sobre" className="hover:text-black">
            Sobre
          </Link>

          <Link href="/contato" className="hover:text-black">
            Contato
          </Link>
        </nav>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t px-6 py-4 flex flex-col gap-4 bg-white">
          <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/blog" onClick={() => setMenuOpen(false)}>Blog</Link>

          <Link href="/simuladores/multa-40" onClick={() => setMenuOpen(false)}>
            Multa 40%
          </Link>

          <Link href="/simuladores/saque-aniversario" onClick={() => setMenuOpen(false)}>
            Saque-Aniversário
          </Link>

          <Link href="/tabela-saque-aniversario-fgts-2026" onClick={() => setMenuOpen(false)}>
            Tabela FGTS
          </Link>

          <Link href="/fgts-rende-quanto-por-ano" onClick={() => setMenuOpen(false)}>
            Rendimento FGTS
          </Link>

          <Link href="/como-calcular-fgts-de-demissao" onClick={() => setMenuOpen(false)}>
            FGTS Demissão
          </Link>

          <Link href="/sobre" onClick={() => setMenuOpen(false)}>Sobre</Link>
          <Link href="/contato" onClick={() => setMenuOpen(false)}>Contato</Link>
        </div>
      )}
    </header>
  )
}