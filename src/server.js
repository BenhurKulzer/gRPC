import grpc from '@grpc/grpc-js';
import protoLoader from '@grpc/proto-loader';

const packageDefinition = protoLoader.loadSync('api.proto', {});
const userProto = grpc.loadPackageDefinition(packageDefinition).user;

function getUsername(call, callback) {
  callback(null, { username: call.request.username });
}

function main() {
  const server = new grpc.Server();
  
  server.addService(userProto.UserService.service, { GetUsername: getUsername });
  
  server.bindAsync('127.0.0.1:50051', grpc.ServerCredentials.createInsecure(), (err, port) => {
    console.log(`Server running at http://127.0.0.1:${port}`);
    server.start();
  });
}

main();