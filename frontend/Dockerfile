FROM node:18-alpine

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . .

EXPOSE 4000

CMD ["sh", "-c", "echo 'Frontend rodando em http://localhost:4000'; yarn dev --port 4000"]
