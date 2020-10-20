#!/bin/bash


docker run --name tendenciero --rm \
-p 80:80 \
-e INSTANCE_NAME=tendenciero \
tendenciero