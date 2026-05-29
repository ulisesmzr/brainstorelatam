import type { MetadataRoute } from 'next'

const BASE = 'https://brainstore.com.mx'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return [
    {
      url: `${BASE}/`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
      alternates: {
        languages: {
          'es-MX': `${BASE}/`,
          es: `${BASE}/`,
          'en-US': `${BASE}/en/`,
          'zh-CN': `${BASE}/zh/`,
        },
      },
    },
    {
      url: `${BASE}/suministros-corporativos`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${BASE}/servicios-ejecutivos`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${BASE}/plataformas-digitales-ai`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
  ]
}
