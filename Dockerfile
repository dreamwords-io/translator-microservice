FROM node:lts

ENV PORT=8080

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install

COPY src ./src

CMD ["node", "src/index.js"]