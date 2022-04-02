# develop stage
FROM node:16-alpine AS develop-stage

WORKDIR /app

COPY package*.json ./

CMD ["npm", "install"]

COPY . .

# build stage
FROM develop-stage as build-stage

ENTRYPOINT ["npm", "run", "build"]

# production stage
FROM nginx:1.21-alpine as production-stage

COPY --from=build-stage /app/build /usr/share/nginx/html
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]