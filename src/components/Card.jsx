import Tabs from "../components/Tabs"
import Star from "./Star";
function Card() {
    return (
        <div className="border-2 border-porange flex flex-col">
            <div className=" flex flex-col m-5 w-[80%] h-{80%] rounded gap-5 items-center self-center">
                <p className="flex-auto text-center text-2xl m-3 ">Titulo Bar</p>
                <img className="w-[80%] h-[80%] flex m-3 pl-1 rounded" src="https://i.pinimg.com/originals/b0/cb/52/b0cb52a3da954d39ddd4f8e49ec8cb30.jpg" alt="imagen" />
            </div>
            <div>
                <Star></Star>
            </div>
            <div>
                <Tabs></Tabs>
            </div>
        </div>
    );
}
export default Card