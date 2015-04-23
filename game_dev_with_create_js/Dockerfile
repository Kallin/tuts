FROM node:0.12.2

RUN npm install -g grunt-cli

VOLUME ["/app"]

ADD . /app

WORKDIR /app

EXPOSE 9001 35729

CMD ["grunt"]