import { useNavigate } from "react-router-dom";
import Tabs from "../components/Tabs";
import Star from "./Star";

function Card({ id, img, title, rating, category }) {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("esta card", id);
    navigate(`./local?id=${id}`, id);
  };
  return (
    <div className="flex flex-col" onClick={handleClick}>
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
