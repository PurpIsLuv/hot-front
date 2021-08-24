# FROM node:14

# WORKDIR /var/www

# # установка зависимостей
# # символ астериск ("*") используется для того чтобы по возможности 
# # скопировать оба файла: package.json и package-lock.json
# COPY package*.json ./

# RUN npm install
# RUN npm i -g pm2
# RUN npm run build
# # RUN npm i -g autocannon
# # Если вы создаете сборку для продакшн
# # RUN npm ci --only=production

# # копируем исходный код
# COPY . .

# EXPOSE 3000

# # start the app
# CMD [ "npm", "start" ]
FROM node:11.13.0-alpine

# create destination directory
RUN mkdir -p /usr/src/nuxt-app
WORKDIR /usr/src/nuxt-app

# update and install dependency
RUN apk update && apk upgrade
RUN apk add git

# copy the app, note .dockerignore
COPY . /usr/src/nuxt-app/
RUN npm install

# build necessary, even if no static files are needed,
# since it builds the server as well
RUN npm run build

# expose 5000 on container
EXPOSE 3000

# set app serving to permissive / assigned
ENV NUXT_HOST=0.0.0.0
# set app port
ENV NUXT_PORT=3000

# start the app
CMD [ "npm", "start" ]