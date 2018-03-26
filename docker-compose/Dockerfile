FROM node:carbon

RUN mkdir /usr/src/app
RUN git clone https://github.com/shivvo/chatroom.js.git /usr/src/app

WORKDIR /usr/src/app

RUN npm install

EXPOSE 3000

CMD [ "npm", "start"]
