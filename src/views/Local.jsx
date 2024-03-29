/* eslint-disable no-undef */
import Card from "../components/Card.jsx";
import Chat from "../components/Chat.jsx";
import Carousel from "../components/Carousel.jsx";
import { Link } from "react-router-dom";

function Local() {
  let slides = [
    "https://dummyimage.com/1280x250/000/fff",
    "https://dummyimage.com/1280x250/000/fff",
    "https://dummyimage.com/1280x250/000/fff",
    "https://dummyimage.com/1280x250/000/fff",
  ];

  let img =
    "https://i.pinimg.com/originals/b0/cb/52/b0cb52a3da954d39ddd4f8e49ec8cb30.jpg";

  return (
    <div className="lg:w-[1280px] w-full mx-auto relative mb-10 mt-10">
      <Carousel slides={slides} />
      <div className="bg-pdark-grey w-5/6 inline-block align-top  mx-auto mx-auto px-10 py-10 ">
        <h1 className="text-3xl sm:text-2xl font-bold mb-4 mt-2 text-center text-slate-100">
          {Card.title}
        </h1>
      </div>
      <div className="flex flex-row justify-evenly  mt-10">
        <div className="w-[400px]">
          <Card key={1} id={1} img={img} rating={5} category={"bar"} />
        </div>
        <div className="flex flex-col w-[600px]">
          <div
            className=" bg-pdark-grey h-[500px] p-10 rounded-md w-[400px] flex flex-col"
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
