import Tabs from "../components/Tabs";
import Star from "./Star";
function Card({ img, title, rating, category }) {
  return (
    <div className="flex flex-col">
      <div className=" flex flex-col w-[100%] h-{100%] rounded gap-5 items-center self-center">
        <img
          className="w-[100%] h-[100%] flex rounded shadow-2xl mb-2"
          src={img}
          alt="imagen"
        />
      </div>
      <div className="bg-pdark-grey">
        <p className="flex-auto text-center text-2xl text-white m-2">{title}</p>
        <p className="text-white text-center p-2">{category}</p>
        <div>
          <Star paramRating={rating}></Star>
        </div>
        <div>
          <Tabs></Tabs>
        </div>
      </div>
    </div>
  );
}
export default Card;
