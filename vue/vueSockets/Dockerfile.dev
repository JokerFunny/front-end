FROM node:alpine

RUN apk update && apk add python make g++

WORKDIR /app

COPY package*.json /app

RUN npm install

COPY . /app

CMD ["npm", "run", "dev"]] 