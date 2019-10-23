FROM node:8.11.2
RUN apt-get clean && apt-get update
RUN apt-get install -y nginx
WORKDIR /app
COPY . /app/
EXPOSE 80
RUN npm install -g cnpm --registry=https://registry.npm.taobao.org
RUN cnpm install
COPY . .
RUN npm run build
CMD ["nginx","-g","daemon off;"]
