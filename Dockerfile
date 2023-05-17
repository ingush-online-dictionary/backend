FROM node:16-alpine as builder

ENV NODE_ENV build
WORKDIR /app

COPY package*.json ./
RUN npm i
COPY tsconfig.json ./
COPY prisma ./prisma
RUN npm run prisma:generate
COPY src ./src
RUN npm run build

FROM node:16-alpine

ENV NODE_ENV production

WORKDIR /app

COPY --from=builder /app/package*.json ./
RUN npm i --omit=dev
COPY --from=builder /app/dist/ ./dist/
COPY --from=builder /app/prisma ./prisma

CMD ["npm", "run", "start:prod"]