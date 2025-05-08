# Step 1: Build stage
FROM node:22-alpine AS builder

WORKDIR /app

# Salin package.json dan package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci

# Salin seluruh file proyek
COPY . .

# Build aplikasi SvelteKit
RUN npm run build

# Step 2: Production stage 
FROM node:22-alpine

WORKDIR /app

# Salin hasil build dari stage sebelumnya
COPY --from=builder /app/build build/
COPY --from=builder /app/node_modules node_modules/

# Salin file package.json
COPY package.json .

# Set variabel lingkungan untuk runtime
ENV NODE_ENV=production

# Jika kamu menggunakan .env untuk menyimpan variabel-variabel ini
COPY .env .env

# Expose port yang digunakan oleh aplikasi
EXPOSE 3000

# Jalankan aplikasi di production mode
CMD [ "npm", "run", "preview", "--host"]
