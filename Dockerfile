FROM node:17.4.0
WORKDIR /app
COPY ./build ./build
COPY package*.json ./
RUN npm install --production
EXPOSE $PORT
CMD ["npm", "run", "dev"]
