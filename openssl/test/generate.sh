#!bin/bash
openssl req -x509 -nodes -sha256 -newkey rsa:2048 -keyout server.key -new -out server.crt -config ./openssl-custom.cnf -days 7300
