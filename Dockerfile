FROM node:16-alpine as builder

ENV NODE_ENV build
WORKDIR /app

COPY tsconfig.json ./
COPY prisma ./prisma
COPY src ./src
COPY package*.json ./
RUN npm i
RUN npm run prisma:generate
RUN npm run build

FROM node:16-alpine

ENV NODE_ENV production

WORKDIR /app

COPY --from=builder /app/dist/ ./dist/
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/package*.json ./
RUN npm i --omit=dev

CMD ["npm", "run", "start:prod"]