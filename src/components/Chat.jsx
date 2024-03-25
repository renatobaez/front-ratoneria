import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { io } from "socket.io-client";

export default function Chat() {
  const params  = useParams();
  const [nickname, setNickName] = useState("");
  const [message, setMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([]);
  useEffect(() => {
    const nick = localStorage.getItem("nickname");
    if (!nick) {
      setNickName(getUsername());
      localStorage.setItem("nickname", nickname);
    }
    if (!nickname) {
      const date = new Date().toLocaleDateString();
      const random = Math.floor(Math.random() * 1000);
      setNickName("rat-" + random);
    }
  }, [0]);
  //dirección del backenb
  const socket = io("http://localhost:3000", {
    auth: {
      username: nickname,
      chatroom: params.id,
    },
  });

  useEffect(() => {
    socket.on("message", receiveMessage);
    return () => {
      socket.off("message", receiveMessage);
    };
  }, []);

  const receiveMessage = (message) => {
    if (!message.from === nickname){
      setChatMessages((state) => [message, ...state]);
    }
  };
  const getUsername = async () => {
    const res = await fetch(
      "https://random-data-api.com/api/users/random_user"
    );
    const { username: randomUsername } = await res.json();
    return randomUsername;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newMessage = {
      body: message,
      from: nickname,
    };
    setChatMessages((state) => [newMessage, ...state]);
    setMessage("");
    socket.emit("message", newMessage.body);
  };
  return (
    <section className="text-zinc-100" id="chat">
      <form onSubmit={handleSubmit} className="bg-pdark-grey h-full p-10 rounded-md">
        <ul
          className="list-none m-0 p-0 h-52 overflow-y-scroll scroll-smooth pb-12"
          id="messages"
        >
          {chatMessages.toReversed().map((message, index) => (
            <li
              key={index}
              className={`my-2 p-2 table text-sm rounded-md ${
                message.from === nickname ? "bg-black ml-auto" : "bg-pgrey"
              }`}
            >
              <b>{message.from}</b>: {message.body}
            </li>
          ))}
        </ul>
        <input
          className="border-10 rounded-md w-9/12 mr-5 p-0 text-black"
          type="text"
          name="message"
          id="input"
          placeholder="Registrate para enviar mensajes..."
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
        <button className="bg-porange rounded-md px-3 py-1">Enviar</button>
      </form>
    </section>
  );
}