FROM node:alpine3.18 as build 
WORKDIR /app 
COPY pacKage.json.
Run npm install 
COPY .. 
Run npm run build