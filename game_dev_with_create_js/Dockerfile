FROM node:0.12.2

COPY . /my_app

WORKDIR /my_app

# install all node libs
RUN npm cache clean
RUN npm update
RUN npm install

# pull down bower dependencies
RUN yes | node_modules/.bin/bower --allow-root install

EXPOSE 9001 35729

CMD ["node_modules/.bin/grunt"]