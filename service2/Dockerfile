FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

# expose port 8002
EXPOSE 8002
CMD [ "npm", "start" ]