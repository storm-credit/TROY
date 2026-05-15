# syntax=docker/dockerfile:1.7
# TROY Next.js production server — multi-stage build.
# Built image runs `npm start` (= next start) which is production mode:
#   - No file watchers
#   - No on-demand compile
#   - ~200-300MB RAM
#
# Data directories (ops/, manuscript/, canon/, export/, external_intake/)
# are mounted as volumes at runtime via docker-compose, NOT baked into image.
# This means lyric/spec edits on the host appear in the container instantly
# without rebuild. Only frontend code changes require image rebuild.

# ── Stage 1: build ─────────────────────────────────────────────────────
FROM node:22-alpine AS builder
WORKDIR /app/frontend

# Layer cache: copy manifests first
COPY frontend/package.json frontend/package-lock.json* ./
RUN npm ci --no-audit --no-fund

# Copy source
COPY frontend/ ./

# Build Next.js production bundle
# NOTE: next.config.ts sets TROY_ROOT = path.resolve(__dirname, '..')
#       At build time __dirname = /app/frontend → TROY_ROOT = /app
#       At runtime, /app/ops, /app/manuscript etc. come from volume mounts.
RUN npm run build

# ── Stage 2: runner ───────────────────────────────────────────────────
FROM node:22-alpine AS runner
WORKDIR /app/frontend

ENV NODE_ENV=production
ENV PORT=3211
ENV HOSTNAME=0.0.0.0

# Bring only what `next start` needs
COPY --from=builder /app/frontend/.next ./.next
COPY --from=builder /app/frontend/node_modules ./node_modules
COPY --from=builder /app/frontend/package.json ./package.json
COPY --from=builder /app/frontend/next.config.ts ./next.config.ts
# Note: frontend/public/ does not exist in this project — skipped.

# Healthcheck: TCP probe on 3211
HEALTHCHECK --interval=30s --timeout=5s --start-period=20s --retries=3 \
  CMD wget -q --spider http://localhost:3211 || exit 1

EXPOSE 3211

CMD ["npm", "start"]
