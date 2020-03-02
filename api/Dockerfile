FROM node:12 AS builder

# Create app directory
WORKDIR /usr/src/api

# Install app dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .


EXPOSE 4000
CMD [ "npm", "run", "dev" ]

