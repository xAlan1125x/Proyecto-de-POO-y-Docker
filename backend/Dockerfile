FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
# Usamos ts-node para ejecutar directamente el TS en desarrollo
CMD ["npx", "ts-node", "src/app.ts"]