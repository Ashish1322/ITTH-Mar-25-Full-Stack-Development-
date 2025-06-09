import { io } from "socket.io-client";

const client = io("https://chatserver-dqzx.onrender.com", {
  autoConnect: false,
});

export default client;
