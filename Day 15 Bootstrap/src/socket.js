import { io } from "socket.io-client";

const client = io("http://localhost:8000", {
  autoConnect: false,
});

export default client;
