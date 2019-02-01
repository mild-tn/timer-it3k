FROM node:8.15-alpine
WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn install

COPY ./components ./components
COPY ./pages ./pages
COPY ./config ./config
COPY ./static ./static
COPY next.config.js .
COPY package-lock.json .
COPY server.js .

EXPOSE 3009
CMD ["yarn","dev","--env=production"]