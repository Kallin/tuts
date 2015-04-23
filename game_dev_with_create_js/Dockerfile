FROM node:0.12.2

COPY . /my_app

WORKDIR /my_app

#TODO: eliminate cli grunt, just use npm
# install all node libs
RUN npm cache clean
RUN npm update
RUN npm install -g grunt-cli
RUN npm install

# pull down bower dependencies
RUN yes | node_modules/.bin/bower --allow-root install

EXPOSE 9001 35729

CMD ["grunt"]