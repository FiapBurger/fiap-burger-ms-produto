FROM node:14
WORKDIR /usr/src/fiap-burger-ms-produto
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 5050
CMD ["node", "dist/main.js"]
