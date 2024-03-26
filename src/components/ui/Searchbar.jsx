import { useState, useEffect } from "react";
import Button from "./Button";

function Searchbar() {
  const [inputValue, setInputValue] = useState("");
  const [response, setResponse] = useState("");
  const [responseHeight, setResponseHeight] = useState(0);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("urlpeticion", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question: inputValue }),
      });

      if (!response.ok) {
        throw new Error("Error al enviar la solicitud");
      }

      const responseData = await response.json();
      setResponse(responseData.answer);
    } catch (error) {
      console.error("Error:", error);
      setResponse("Hubo un error al procesar la solicitud");
    }
  };

  // Actualizar la altura de la respuesta cuando cambia
  useEffect(() => {
    const container = document.getElementById("feed-container");
    if (container) {
      setResponseHeight(container.scrollHeight);
    }
  }, [response]);

  return (
    <div className="w-[80%] px-4 mx-auto mt-12 p-5">
      <div className="flex gap-2">
        <input
          value={inputValue}
          onChange={handleInputChange}
          type="text"
          placeholder="Preguntame lo que quieras"
          className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-porange"
        />
        <Button onClick={handleSubmit}>Enviar</Button>
      </div>

      <div
        id="feed-container"
        className="feed-container border border-black-500 mt-2"
        style={{ maxHeight: responseHeight }}
      >
        <ul className="feed">
          <li className="text-white p-2">{response}</li>
        </ul>
      </div>
    </div>
  );
}

export default Searchbar;
