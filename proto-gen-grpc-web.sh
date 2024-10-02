#!/bin/bash
mkdir -p ./client/src/protos
protoc -I=. ./protos/*.proto \
  --plugin=protoc-gen-grpc-web=./client/node_modules/.bin/protoc-gen-grpc-web \
  --js_out=import_style=commonjs:./client/src \
  --grpc-web_out=import_style=typescript,mode=grpcwebtext:./client/src