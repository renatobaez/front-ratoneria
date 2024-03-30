import { useState, useEffect } from "react";
import io from "socket.io-client";

// conexión al servidor
const socket = io("backchat-production-8699.up.railway.app", {
  transports: ["websocket"],
  auth: {
    token: localStorage.getItem("token"),
  },
});

export default function Chat(local) {
  const [nickname, setNickName] = useState("");
  const [message, setMessage] = useState("");
  const [allMessages, setAllMessages] = useState([]);
  const [isFlashing, setIsFlashing] = useState(false);

  useEffect(() => {
    const random = Math.floor(Math.random() * 1000);
    setNickName("Rata-Anonima-" + random);
    socket.emit("join", { room: local, name: nickname });
  }, [0]);

  useEffect(() => {
    socket.on("message", ({ body, from }) => {
      const msg = { body, from };
      setAllMessages((previousMessages) => [...previousMessages, msg]);
    });
    return () => {
      socket.off("message");
    };
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [allMessages]);

  useEffect(() => {
    const interval1 = setInterval(() => {
      setIsFlashing((prevIsFlashing) => !prevIsFlashing);
    }, 1000); // Intervalo corto de 1 segundo

    const interval2 = setInterval(() => {
      setIsFlashing((prevIsFlashing) => !prevIsFlashing);
    }, 5000); // Intervalo más largo de 5 segundos

    const interval3 = setInterval(() => {
      setIsFlashing((prevIsFlashing) => !prevIsFlashing);
    }, 10000); // Intervalo aún más largo de 10 segundos

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
    };
  }, []);

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
    setMessage("");
  };

  return (
    <section className="text-zinc-100 bg-pdark-grey h-full pt-10 pr-1 pb-2 pl-1 rounded-md max-w-lg  relative">
      <img
        src="https://i.ibb.co/rd2wT5d/Chat.png"
        alt="Chat Icon"
        className="absolute top-0 right-100 w-20 h-auto z-10"
        style={{
          filter: isFlashing
            ? "drop-shadow(0 0 10px #ff6ac1) drop-shadow(0 0 20px #ff6ac1) drop-shadow(0 0 30px #ff6ac1)"
            : "", // Si no está parpadeando, elimina el filtro
        }}
      />
      <ul
        className="list-none m-0 p-0 h-full overflow-y-scroll scroll-smooth pb-2"
        id="chat-messages"
      >
        {allMessages.map((msg, index) => (
          <li
            key={index}
            className={`my-2 p-2 table text-sm rounded-md max-w-sm ${
              msg.from === nickname ? "bg-black ml-auto" : "bg-pgrey"
            }`}
          >
            <b>{msg.from}</b>: {msg.body}
          </li>
        ))}
      </ul>
      <form onSubmit={(e) => handleSendMessage(e)}>
        <input
          className="border-10 rounded-md w-9/12 mr-5 p-0 text-black"
          type="text"
          name="message"
          id="input"
          placeholder="Regístrate para enviar mensajes..."
          onChange={(e) => handleMessageChange(e)}
          value={message}
          autoComplete="off"
          maxLength={100}
        />
        <button className="bg-porange rounded-md px-3 py-1">Enviar</button>
      </form>
    </section>
  );
}
