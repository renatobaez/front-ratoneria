import Tabs from "../components/Tabs"
import Star from "./Star";
function card() {
    return (
        <div>
            <div className=" flex flex-col justify-between m-5 border-2 border-porange w-72 h-96 rounded gap-5">
                <p className="flex-auto text-center text-2xl m-3">Titulo Bar</p>
                <img className="w-64 h-72 flex m-3 pl-1 rounded" src="https://i.pinimg.com/originals/b0/cb/52/b0cb52a3da954d39ddd4f8e49ec8cb30.jpg" alt="imagen" />
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
export default card