
###
# Base image
###
FROM node:16 as base
WORKDIR /home/node/laligabot


###
# Production
###
FROM base as production
COPY package.json package-lock.json ./
# Before switching to non-root user, change ownership of home
RUN chown -R node:node .
USER node
RUN npm install
COPY tsconfig.json angular.json tsconfig.angular.json tsconfig.app.json ./
COPY server/ ./server/
