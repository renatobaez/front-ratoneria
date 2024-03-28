import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import socket from './socket';

export default function Chat() {
  const params  = useParams();
  const [nickname, setNickName] = useState("");
  const [room, setRoom] = useState('local-1');
  const [message, setMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([]);

  useEffect(() => {
    const random = Math.floor(Math.random() * 1000);
    setNickName("RatitaCaliente-" + random);
    socket.emit("join", {room: room, name: nickname});
  }, [room]);
 
  useEffect(() => {
    socket.on("message", ({ body, from }) => {
      const msg = { body, from };
      setChatMessages((previousMessages) => [...previousMessages, msg]);
    });
    return () => {
      socket.off('message');
    };
  }, []);
  
  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };
  const handleSendMessage = () => {
    if (!message) return;
    const newMessage = {
      body: message,
      from: nickname,
    };
    socket.emit("message", { room: room, msg: newMessage });
    setMessage("");
  };

  return (
    <section className="text-zinc-100 bg-pdark-grey h-full p-10 rounded-md" id="chat">
        <ul
          className="list-none m-0 p-0 h-52 overflow-y-scroll scroll-smooth pb-12"
          id="messages"
        >
          { 
            chatMessages.map((msg, index) => (
            <li
              key={index}
              className={`my-2 p-2 table text-sm rounded-md ${
                msg.from === nickname ? "bg-black ml-auto" : "bg-pgrey"
              }`}
            >
              <b>{msg.from}</b>: {msg.body}
            </li>
            ))
          }
        </ul>
        <input
          className="border-10 rounded-md w-9/12 mr-5 p-0 text-black"
          type="text"
          name="message"
          id="input"
          placeholder="Registrate para enviar mensajes..."
          onChange={(event) => handleMessageChange(event)}
          value={message}
        />
        <button className="bg-porange rounded-md px-3 py-1" onClick={handleSendMessage}>Enviar</button>
    </section>
  );
}