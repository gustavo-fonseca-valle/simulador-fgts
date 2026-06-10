import { MetadataRoute } from "next"
import { posts } from "./lib/posts"

const BASE_URL = "https://www.simuladorfgts.com.br"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
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
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/contato`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/politica-de-privacidade`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/termos-de-uso`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },

    // Simuladores
    {
      url: `${BASE_URL}/simuladores/fgts`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/simuladores/multa-40`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/simuladores/saque-aniversario`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
  ]

  const featuredPosts = [
    "quem-pede-demissao-perde-fgts",
    "como-consultar-fgts-pelo-cpf",
    "empresa-nao-depositou-fgts",
    "saque-aniversario-vale-a-pena",
    "fgts-compra-imovel",
  ]

  const dynamicPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: featuredPosts.includes(post.slug) ? 0.9 : 0.8,
  }))

  return [...staticPages, ...dynamicPages]
}