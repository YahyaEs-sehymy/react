FROM node:alpine3.18 as build 
WORKDIR /app 
COPY pacKage.json.
Run npm install 
COPY .. 
Run npm run build

FROM nginx:1.23-alpine
WORKDIR /usr/share/nginx/html
Run rn -rf*
COPY --FROM=build/app/build.
EXPOSE 80 ENTRYPOINT ["nginx","-g","daemonoff;"]