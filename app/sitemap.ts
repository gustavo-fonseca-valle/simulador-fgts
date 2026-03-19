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

    // 🔹 Simuladores fixos
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
    {
      url: `${BASE_URL}/simuladores/fgts`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ]

  // 🔹 Posts + Guias FGTS dinâmicos
  const dynamicPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date), // usa a data de publicação do post
    changeFrequency: "monthly",
    priority: 0.8,
  }))

  return [...staticPages, ...dynamicPages]
}