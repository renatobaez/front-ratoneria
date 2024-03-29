import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useCardContext } from "../context/CardContext.jsx";
import Chat from "../components/Chat.jsx";

function Local() {
  const { cards } = useCardContext();
  const { id } = useParams();
  const [local, setLocal] = useState(() => {
    const storedLocal = localStorage.getItem("local");
    return storedLocal ? JSON.parse(storedLocal) : null;
  });

  useEffect(() => {
    const foundLocal = cards.find(
      (card) => card.id.toString() === id.toString()
    );
    setLocal(foundLocal);
    localStorage.setItem("local", JSON.stringify(foundLocal));
  }, [id, cards]);

  console.log(local);

  if (!local) {
    return <div>Loading...</div>;
  }

  return (
    <div className="lg:w-[1280px] w-full mx-auto relative mb-10 mt-10">
      <div className="bg-pdark-grey w-5/6 inline-block align-top  mx-auto mx-auto px-10 py-10 ">
        <h1 className="text-3xl sm:text-2xl font-bold mb-4 mt-2 text-center text-slate-100">
          {local.title}
        </h1>
      </div>
      <div className="flex flex-row justify-evenly  mt-10">
        <div className="w-[400px]">
          <img src={local.img} alt="" />
        </div>
        <div className="flex flex-col w-[600px]">
          <div
            className=" bg-pdark-grey h-[500px] p-1 rounded-md w-[400px] flex flex-col"
            id="chat"
          >
            <Chat />
          </div>
          <div className=" w-[400px] mt-10 bg-pdark-grey p-10  rounded-md  text-center">
            <Link to="/">
              <h1 className="text-slate-100">URL DEL LOCAL</h1>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-row">
        {/* redes soliales */}
        {/* menu */}
      </div>
    </div>
  );
}

export default Local;
