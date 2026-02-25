"use client"

import Link from "next/link"
import { useState } from "react"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header
      style={{
        borderBottom: "1px solid #ddd",
        padding: "20px",
        background: "#ffffff",
      }}
    >
      <div
        style={{
          maxWidth: 900,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Logo / Nome */}
        <Link href="/" style={{ textDecoration: "none", color: "#000" }}>
          <strong style={{ fontSize: 20 }}>Guia FGTS 2026</strong>
        </Link>

        {/* Botão Mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            fontSize: 18,
            cursor: "pointer",
          }}
          className="menu-button"
        >
          ☰
        </button>

        {/* Menu Desktop */}
        <nav
          style={{
            display: "flex",
            gap: 20,
          }}
          className="menu-desktop"
        >
          <Link href="/">Home</Link>
          <Link href="/blog">Artigos</Link>
          <Link href="/sobre">Sobre</Link>
          <Link href="/contato">Contato</Link>
        </nav>
      </div>
    </header>
  )
}