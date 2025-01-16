# Frontend Dockerfile
FROM node:16-alpine

WORKDIR /app

COPY package.json ./
RUN npm install
npm install react-scripts@latest

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
