import type { NextConfig } from 'next'
import path from 'node:path'

const config: NextConfig = {
  experimental: {
    serverActions: { bodySizeLimit: '50mb' },
  },
  env: {
    TROY_ROOT: path.resolve(__dirname, '..'),
  },
}

export default config
