FROM node:14
WORKDIR /usr/src/fiap-burger-ms-produto
COPY ./package.json .
RUN npm install --only=prod
#COPY ./dist ./dist
#EXPOSE 5000
#CMD npm start
