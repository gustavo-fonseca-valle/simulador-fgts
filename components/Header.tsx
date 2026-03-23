"use client"

import Link from "next/link"
import { useState } from "react"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-gray-900">
          Guia Trabalhista
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6 text-gray-700 font-medium">

          <Link href="/" className="hover:text-black">
            Home
          </Link>

          <Link href="/blog" className="hover:text-black">
            Blog
          </Link>

          {/* Dropdown Simuladores */}
          <div className="relative group">
            <span className="cursor-pointer hover:text-black">
              Simuladores ▾
            </span>

            <div className="absolute top-full left-0 hidden group-hover:block bg-white border rounded-lg shadow-md mt-0 w-56">
              <Link
                href="/simuladores/multa-40"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Multa 40% FGTS
              </Link>

              <Link
                href="/simuladores/saque-aniversario"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Saque-Aniversário
              </Link>
            </div>
          </div>

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

          <p className="font-semibold text-gray-500 mt-2">Simuladores</p>

          <Link
            href="/simuladores/multa-40"
            onClick={() => setMenuOpen(false)}
          >
            Multa 40%
          </Link>

          <Link
            href="/simuladores/saque-aniversario"
            onClick={() => setMenuOpen(false)}
          >
            Saque-Aniversário
          </Link>

          <hr />

          <Link href="/sobre" onClick={() => setMenuOpen(false)}>
            Sobre
          </Link>

          <Link href="/contato" onClick={() => setMenuOpen(false)}>
            Contato
          </Link>
        </div>
      )}
    </header>
  )
}