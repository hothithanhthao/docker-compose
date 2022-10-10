FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

# expose port 8001
EXPOSE 8001
CMD [ "npm", "start" ]