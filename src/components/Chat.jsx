import { useState, useEffect } from "react";
import io from "socket.io-client";

const socket =io("backchat-production-8699.up.railway.app", {
  transports: ["websocket"],
    auth: {
      token: localStorage.getItem("token")
  }
});

export default function Chat({local="local"}) {
  const [nickname, setNickName] = useState("");
  const [message, setMessage] = useState("");
  const [allMessages, setAllMessages] = useState([]);
  

  useEffect(() => {
    const random = Math.floor(Math.random() * 1000);
    setNickName("Rata-Anonima-" + random);
    socket.emit("join", {room: local, name: nickname});
  }, [0]);
 
  useEffect(() => {
    socket.on("message", ({ body, from }) => {
      const msg = { body, from };
      setAllMessages((previousMessages) => [...previousMessages, msg]);
    });
    return () => {
      socket.off('message');
    };
  }, []);
  
  useEffect(() => {
     scrollToBottom();
  }, [allMessages]);

  const scrollToBottom = () => {
    const chatMessages = document.getElementById("chat-messages");
    chatMessages.scrollTop = chatMessages.scrollHeight;
  };
  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };
  const handleSendMessage = (event) => {
    event.preventDefault();
    if (!message) return;
    const newMessage = {
      body: message,
      from: nickname,
    };
    socket.emit("message", { room: local, msg: newMessage });
    
    // Esto se debe borrar es solo para demostracion 
   // setAllMessages((previousMessages) => [...previousMessages, newMessage]);
    // FIN de lo que se debe borrar
    setMessage("");
  };

  return (
    <section className="text-zinc-100 bg-pdark-grey h-full p-10 rounded-md" id="chat">
        <ul
          className="list-none m-0 p-0 h-52 overflow-y-scroll scroll-smooth pb-2"
          id="chat-messages"
        >
          { 
            allMessages.map((msg, index) => (
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
        <form onSubmit={(e) =>handleSendMessage(e)}>
          <input
            className="border-10 rounded-md w-9/12 mr-5 p-0 text-black"
            type="text"
            name="message"
            id="input"
            placeholder="Registrate para enviar mensajes..."
            onChange={(e) => handleMessageChange(e)}
            value={message}
            autoComplete = "off"
          />
          <button className="bg-porange rounded-md px-3 py-1">Enviar</button>
        </form>
    </section>
  );
}