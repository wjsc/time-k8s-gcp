
FROM node:8.12.0-alpine
ARG API_ENDPOINT
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .
EXPOSE 3001
ENV API_ENDPOINT ${API_ENDPOINT}
CMD [ "npm", "start" ]
USER node