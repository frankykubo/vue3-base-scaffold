# develop stage
FROM node:16-alpine AS develop-stage

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
RUN npm install -g @vue/cli

EXPOSE 8080

CMD [ "npm", "run", "serve" ]
