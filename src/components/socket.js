import io from "socket.io-client";

const socket = io("http://localhost:10000");

export default socket;
