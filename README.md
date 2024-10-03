## Description:

This is an example of a gRPC service call from a react client.

![screenshot](https://raw.githubusercontent.com/BenhurKulzer/gRPC/refs/heads/main/client/src/assets/screenshot.png)

- Front is running on `8081` and calls Envoy proxy on `8000`
- Envoy on port `8000` calls grpc service on `50051`

## Lets Rock:

How to clone the repo & run it:

```
git clone https://github.com/BenhurKulzer/gRPC.git
cd gRPC

docker-compose build
docker-compose up
```

Then, in your favorite browser, open [`http://localhost:8081`](http://localhost:8081) (The front is using gRPC-web to call Envoy).

Enter a name in the input and you should see:

```
Hello {your_name}!
```

This project was builted using create-react-app (CRA) and gRPC-web & grpc. Proto files will be generated using the command founded in:

```
./proto-gen-grpc-web.sh
```