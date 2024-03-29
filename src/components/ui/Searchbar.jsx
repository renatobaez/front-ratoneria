import { useState, useEffect } from "react";
import Button from "./Button";

function Searchbar() {
  const [inputValue, setInputValue] = useState("");
  const [response, setResponse] = useState("");
  const [responseHeight, setResponseHeight] = useState(0);
  const [typingResponse, setTypingResponse] = useState("");

  // Actualizar la altura de la respuesta cuando cambia
  useEffect(() => {
    const container = document.getElementById("feed-container");
    if (container) {
      setResponseHeight(container.scrollHeight);
    }
  }, [response]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const typeResponse = () => {
    const fullResponse =
      "Gracias por tu pregunta, estoy aquí para ayudarte, pero aún no me conectan a la base de datos, por lo que solo puedo desearte ¡un feliz día! :D";
    let currentLength = 0;
    const interval = setInterval(() => {
      setTypingResponse(fullResponse.substring(0, currentLength));
      currentLength++;
      if (currentLength > fullResponse.length) {
        clearInterval(interval);
        setResponse(fullResponse);
      }
    }, 30);
  };

  const handleSubmit = async () => {
    if (inputValue.trim() !== "") {
      typeResponse();
    } else {
      alert("Por favor, ingresa una pregunta antes de enviar.");
    }
    // try {
    //   const response = await fetch("urlpeticion", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ question: inputValue }),
    //   });

    //   if (!response.ok) {
    //     throw new Error("Error al enviar la solicitud");
    //   }

    //   const responseData = await response.json();
    //   setResponse(responseData.answer);
    // } catch (error) {
    //   console.error("Error:", error);
    //   setResponse("Hubo un error al procesar la solicitud");
    // }
  };

  return (
    <div className="w-full px-4 mx-auto mt-12 p-5">
      <div className="flex gap-2">
        <input
          value={inputValue}
          onChange={handleInputChange}
          type="text"
          placeholder="Preguntame algo..."
          className="w-full py-3 pl-12 pr-4 text-[#fff] text-3xl rounded-md outline-none bg-pgrey focus:bg-pgrey"
        />
        <Button onClick={handleSubmit}>ENVIAR</Button>
      </div>

      <div
        id="feed-container"
        className="feed-container mt-3 mb-3"
        style={{ maxHeight: responseHeight }}
      >
        <ul className="feed">
          <li className="text-porange font-extrabold text-2xl p-2">
            {typingResponse}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Searchbar;
