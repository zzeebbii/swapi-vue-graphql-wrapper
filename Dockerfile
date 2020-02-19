# We are using multi stage container building for smaller image size
FROM node:lts-alpine as ui-builder

RUN mkdir /app

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/package.json

RUN npm install
RUN npm install -g @vue/cli

COPY . /app

ARG VUE_APP_API_URL
ENV VUE_APP_API_URL $VUE_APP_API_URL
RUN npm run build

# Building production container and copying resources from ui-builder
FROM nginx:stable-alpine

COPY  --from=ui-builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]