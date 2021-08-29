FROM node:alpine

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . .

ENV MONGO_URL=mongodb+srv://pavan:pavan@shapeai.ujqaw.mongodb.net/zomato?retryWrites=true&w=majority


CMD ["npm", "run", "start"]