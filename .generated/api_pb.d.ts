import * as jspb from 'google-protobuf'

export class UsernameRequest extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): UsernameRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UsernameRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UsernameRequest): UsernameRequest.AsObject;
  static serializeBinaryToWriter(message: UsernameRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UsernameRequest;
  static deserializeBinaryFromReader(message: UsernameRequest, reader: jspb.BinaryReader): UsernameRequest;
}

export namespace UsernameRequest {
  export type AsObject = {
    username: string,
  }
}

export class UsernameResponse extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): UsernameResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UsernameResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UsernameResponse): UsernameResponse.AsObject;
  static serializeBinaryToWriter(message: UsernameResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UsernameResponse;
  static deserializeBinaryFromReader(message: UsernameResponse, reader: jspb.BinaryReader): UsernameResponse;
}

export namespace UsernameResponse {
  export type AsObject = {
    username: string,
  }
}

