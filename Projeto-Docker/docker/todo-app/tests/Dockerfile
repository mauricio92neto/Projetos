FROM node:14-alpine
EXPOSE 3001
ADD /node_modules.tar.gz ./
WORKDIR /usr/app/
COPY . .
ENTRYPOINT ["npm" ,"start"]


