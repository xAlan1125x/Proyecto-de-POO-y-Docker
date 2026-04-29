FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
# Ejecutamos el script que definimos en el package.json
CMD ["npm", "start"]