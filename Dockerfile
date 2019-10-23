FROM node:8.11.2
RUN apt-get clean && apt-get update
RUN apt-get install -y nginx
WORKDIR /app
COPY . /app/
EXPOSE 80
RUN npm install && npm run build:dev  && cp -r dist/* /var/www/html
CMD ["nginx","-g","daemon off;"]
