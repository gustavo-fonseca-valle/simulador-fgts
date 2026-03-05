import { MetadataRoute } from "next"
import { posts } from "./lib/posts"

const BASE_URL = "https://www.simuladorfgts.com.br"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  // 🔹 Páginas fixas
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/sobre`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/contato`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },

    // 🔹 Simuladores
    {
      url: `${BASE_URL}/simuladores/multa-40`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/simuladores/saque-aniversario`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },

    // 🔹 Guias FGTS
    {
      url: `${BASE_URL}/tabela-saque-aniversario-fgts-2026`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/fgts-rende-quanto-por-ano`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/como-calcular-fgts-de-demissao`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ]

  // 🔹 Posts automáticos
  const blogPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  return [...staticPages, ...blogPages]
}