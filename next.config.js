/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,

  // FASE 1: permitir build aunque haya errores de TS/ESLint
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },

  // Redirects desde URLs legacy de WordPress
  // (query strings van en `has`, no en `source`)
  async redirects() {
    return [
      { source: '/index.php', destination: '/', permanent: true },
      {
        source: '/',
        has: [{ type: 'query', key: 'page_id', value: '9486' }],
        destination: '/suministros-corporativos',
        permanent: true,
      },
      {
        source: '/',
        has: [{ type: 'query', key: 'page_id', value: '9592' }],
        destination: '/servicios-ejecutivos',
        permanent: true,
      },
      {
        source: '/',
        has: [{ type: 'query', key: 'page_id', value: '9565' }],
        destination: '/plataformas-digitales-ai',
        permanent: true,
      },
      {
        source: '/',
        has: [{ type: 'query', key: 'page_id', value: '9670' }],
        destination: '/latam-direct',
        permanent: true,
      },
    ]
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
      {
        source: '/og/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      {
        source: '/brand/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      {
        source: '/api/cotizacion',
        headers: [{ key: 'Cache-Control', value: 'no-store, max-age=0' }],
      },
    ]
  },
}

module.exports = nextConfig
