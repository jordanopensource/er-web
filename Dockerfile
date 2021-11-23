FROM node:14.18-alpine3.14

WORKDIR /srv/app
COPY package*.json /tmp/
RUN cd /tmp && npm install && cp -r node_modules/ /srv/app
COPY . .

# Build arguments
ARG NODE_ENV=development
ARG HOST=0.0.0.0
ARG PORT=3000

# Pass build arguments to node environment
ENV NODE_ENV=${NODE_ENV}
ENV HOST=${HOST}
ENV PORT=${PORT}

EXPOSE ${PORT}

# Build Nuxt project
RUN npm run build

CMD [ "npm", "run", "start" ]