
FROM node:lts-alpine3.14 AS base
WORKDIR /app
COPY package*.json  ./
RUN npm install
COPY . ./
RUN npm prune --production # Remove dev dependencies
EXPOSE 80
CMD ["node", "server.js"]
