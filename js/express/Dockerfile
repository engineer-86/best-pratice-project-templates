# by Konrad Münch

# base-image (its depends on your requirements alpine is the smallest):
FROM node:lts-alpine

# set your app to production !
ENV NODE_ENV=production

# set your workdir its your relative path
WORKDIR /usr/src/app

# copy package json and install your requirements
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../

# copy your code to container
COPY . .

# expose the port for your webapp
EXPOSE 3000
#change owner rights
RUN chown -R node /usr/src/app

# use rights of user node
USER node

# start the web server
CMD ["npm", "start"]
