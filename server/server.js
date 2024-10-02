import grpc from '@grpc/grpc-js';
import protoLoader from '@grpc/proto-loader';

const packageDefinition = protoLoader.loadSync('./greeting.proto', {});
const greetProto = grpc.loadPackageDefinition(packageDefinition).greeting;

function doSayHello(call, callback) {
  callback(null, { message: "Hello " + call.request.name + "!" });
}

function main() {
  const server = new grpc.Server();

  server.addService(greetProto.Greeter.service, {
    greet: doSayHello,
  });
  
  server.bindAsync('127.0.0.1:50051', grpc.ServerCredentials.createInsecure(), (err, port) => {
    console.log(`Server running at http://127.0.0.1:${port}`);
    server.start();
  });
}

main();