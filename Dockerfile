FROM node:wheezy

MAINTAINER Parun Rua Ivo <parun.rua.ivo@gmail.com>

ENV SERVER_HOME /presentacion

RUN mkdir ${SERVER_HOME}

COPY server /node
COPY index.js /node/index.js

WORKDIR ${SERVER_HOME}

RUN npm config set progress=false && npm install -g pm2 && npm install

EXPOSE 8181

CMD ["pm2","start"]
