#!/bin/bash



#buildea la imagen, ojo con el punto final y la barra
 docker build -t tendenciero/1.1 .
#crea un tag
docker tag tendenciero/1.1 indiolopez/nodejs-tendenciero:v1.1
#login en docker hub
docker login
#publica en dockerhub
docker push indiolopez/nodejs-tendenciero:v1.1
#baja la imagen
docker pull indiolopez/nodejs-tendenciero:v1.1

 # entrar a upcloud ssh root@94.237.57.94
 
 # docker run -p 80:3000 -d -it 99701452dfcc

 #docker rm -f $(docker ps -aq)
#docker run -p 80:3000 -d -it indiolopez/nodejs-tendenciero:v1.1

