import type { MetadataRoute } from 'next'

// Required for `output: export` — emit the manifest as a static file.
export const dynamic = 'force-static'

// Static export is served under a subpath on GitHub Pages; icon URLs are
// prefixed so the manifest resolves them correctly.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Prelude-js Docs',
    short_name: 'Prelude-js',
    description: "A modular implementation of Haskell's Prelude library in modern JavaScript.",
    icons: [
      { src: `${basePath}/icon-192.png`, sizes: '192x192', type: 'image/png' },
      { src: `${basePath}/icon-512.png`, sizes: '512x512', type: 'image/png' },
    ],
  }
}
