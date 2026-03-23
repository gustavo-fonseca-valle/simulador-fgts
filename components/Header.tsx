"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="border-b bg-white/80 backdrop-blur sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">

        {/* 🔥 LOGO */}
        <Link href="/" className="flex items-center gap-4">
          <Image
            src="/logo.png"
            alt="Simulador FGTS"
            width={256}
            height={170}
            className="h-40 w-auto object-contain"
            priority
          />
        </Link>

        {/* 🔥 MENU DESKTOP */}
        <nav className="hidden md:flex items-center gap-6 text-gray-800 font-medium">

          <Link href="/" className="hover:text-green-600 transition">
            Home
          </Link>

          <Link href="/blog" className="hover:text-green-600 transition">
            Blog
          </Link>

          {/* 🔥 DROPDOWN SIMULADORES */}
          <div className="relative group">
            <span className="cursor-pointer flex items-center gap-1 hover:text-green-600 transition">
              Simuladores ▾
            </span>

            <div className="absolute top-full left-0 pt-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition duration-200 z-50">
              <div className="bg-white border rounded-xl shadow-xl w-64 overflow-hidden">
                <Link
                  href="/simuladores/multa-40"
                  className="block px-4 py-3 hover:bg-green-50 transition"
                >
                  💰 Multa 40% FGTS
                </Link>
                <Link
                  href="/simuladores/fgts"
                  className="block px-4 py-3 hover:bg-green-50 transition"
                >
                  📊 Calcular FGTS
                </Link>
                <Link
                  href="/simuladores/saque-aniversario"
                  className="block px-4 py-3 hover:bg-green-50 transition"
                >
                  🎂 Saque-Aniversário
                </Link>
              </div>
            </div>
          </div>

          <Link href="/sobre" className="hover:text-green-600 transition">
            Sobre
          </Link>

          <Link href="/contato" className="hover:text-green-600 transition">
            Contato
          </Link>

          {/* 🔥 CTA */}
          <Link
            href="/simuladores"
            className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 hover:shadow-lg transition font-semibold"
          >
            Simular agora
          </Link>

        </nav>

        {/* 🔥 MOBILE BUTTON */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* 🔥 MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden border-t px-6 py-4 flex flex-col gap-4 bg-white/90 backdrop-blur-lg transition-all">
          
          <Link href="/" onClick={() => setMenuOpen(false)} className="hover:text-green-600">
            Home
          </Link>

          <Link href="/blog" onClick={() => setMenuOpen(false)} className="hover:text-green-600">
            Blog
          </Link>

          <p className="font-semibold text-gray-500 mt-2">Simuladores</p>

          <Link href="/simuladores/multa-40" onClick={() => setMenuOpen(false)} className="hover:text-green-600">
            💰 Multa 40%
          </Link>

          <Link href="/simuladores/fgts" onClick={() => setMenuOpen(false)} className="hover:text-green-600">
            📊 Calcular FGTS
          </Link>

          <Link href="/simuladores/saque-aniversario" onClick={() => setMenuOpen(false)} className="hover:text-green-600">
            🎂 Saque-Aniversário
          </Link>

          <hr className="border-gray-200"/>

          <Link href="/sobre" onClick={() => setMenuOpen(false)} className="hover:text-green-600">
            Sobre
          </Link>

          <Link href="/contato" onClick={() => setMenuOpen(false)} className="hover:text-green-600">
            Contato
          </Link>

          <Link
            href="/simuladores"
            onClick={() => setMenuOpen(false)}
            className="bg-green-600 text-white text-center px-4 py-3 rounded-lg font-semibold hover:bg-green-700 hover:shadow-lg transition"
          >
            Simular agora
          </Link>
        </div>
      )}
    </header>
  )
}