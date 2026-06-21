import { createMDX } from 'fumadocs-mdx/next'

const withMDX = createMDX()

const basePath = process.env.GITHUB_PAGES ? '/prelude-js' : ''

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  output: 'export',
  basePath,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  serverExternalPackages: ['twoslash', 'typescript', '@typescript/vfs'],
}

export default withMDX(config)
