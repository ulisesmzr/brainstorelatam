import { defineCloudflareConfig } from '@opennextjs/cloudflare'

/**
 * OpenNext config for Cloudflare Workers
 * Docs: https://opennext.js.org/cloudflare
 *
 * FASE 1: setup mínimo (sin ISR cache).
 * FASE 2: activar incrementalCache con R2 cuando agreguemos bucket.
 */
export default defineCloudflareConfig({
  // incrementalCache: r2IncrementalCache, // activar en FASE 2
})
