FROM node:14-alpine

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . .

EXPOSE 8080

CMD ["sh", "-c", "echo 'Frontend rodando em http://localhost:8080'; yarn dev --port 4000"]
