#!/bin/bash

#indiolopez/nodejs-tendenciero
docker rm -f $(docker ps -aq)
docker run -p 80:3000 -d -it indiolopez/nodejs-tendenciero:v1.1

