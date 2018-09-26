
FROM node:8.12.0-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .
EXPOSE 3000
CMD [ "npm", "start" ]
USER node