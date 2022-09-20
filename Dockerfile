# set global args
ARG NODE_ENV=development HOST=0.0.0.0 PORT=3000 USER=node MATOMO_SITE_ID=9

###########
# BUILDER #
###########
FROM node:16-alpine3.14 AS builder

# pass the global args
ARG COMMUNITY_API_URL
ARG HOST
ARG PORT
ARG MATOMO_SITE_ID

# copy build context and install dependencies
WORKDIR /workspace
COPY . .
RUN npm install

# inject build args as enviroment variables
ENV NODE_ENV=$NODE_ENV HOST=$HOST PORT=$PORT MATOMO_SITE_ID=$MATOMO_SITE_ID

# build NuxtJS project
RUN npm run build

###########
# PROJECT #
###########
FROM node:16-slim

# pass the global args
ARG COMMUNITY_API_URL
ARG HOST
ARG PORT
ARG USER
ARG MATOMO_SITE_ID

# copy builder output to project workdir
WORKDIR /app
COPY --from=builder --chown=${USER}:${USER} /workspace/.nuxt /app/.nuxt
COPY --from=builder --chown=${USER}:${USER} /workspace/ /app/

# inject build args as enviroment variables
ENV COMMUNITY_API_URL=$COMMUNITY_API_URL HOST=$HOST PORT=$PORT MATOMO_SITE_ID=$MATOMO_SITE_ID

# set user context
USER ${USER}

# expose port
EXPOSE ${PORT}

# run for production
CMD [ "npm", "run", "start"]
