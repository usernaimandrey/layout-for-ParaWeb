FROM node:lts-slim

RUN mkdir -p /usr/src/app/
WORKDIR /usr/src/app/

COPY . /usr/src/app/

RUN npm install
RUN npm run build
RUN npm install --global http-server

EXPOSE 8080

CMD ["http-server", "/usr/src/app/dist/"]         