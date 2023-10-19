FROM node:18-alpine AS development
WORKDIR /app
COPY package*.json  yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .    

RUN yarn build

FROM node:18-alpine AS production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
WORKDIR /app

COPY package*.json  yarn.lock ./

RUN yarn install --frozen-lockfile --production

COPY --from=development /app/dist ./dist

EXPOSE 5000

CMD ["yarn", "start"]