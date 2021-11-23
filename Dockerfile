FROM node:14.18-alpine3.14

# Create app directory
WORKDIR /srv/app
ADD . /srv/app/

# RUN rm yarn.lock
RUN npm install

# Build NuxtJS project
RUN npm run build

# start command
CMD [ "npm", "run", "start"]⏎


