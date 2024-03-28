import Tabs from "../components/Tabs";
import Star from "./Star";
function Card() {
  return (
    <div className="flex flex-col">
      <div className=" flex flex-col w-[100%] h-{100%] rounded gap-5 items-center self-center">
        <img
          className="w-[100%] h-[100%] flex rounded shadow-2xl mb-2"
          src="https://i.pinimg.com/originals/b0/cb/52/b0cb52a3da954d39ddd4f8e49ec8cb30.jpg"
          alt="imagen"
        />
      </div>
      <div className="bg-pdark-grey">
        <p className="flex-auto text-center text-2xl text-white m-2">
          Titulo Bar
        </p>
        <div>
          <Star></Star>
        </div>
        <div>
          <Tabs></Tabs>
        </div>
      </div>
    </div>
  );
}
export default Card;
