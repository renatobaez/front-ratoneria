import { Link } from 'react-router-dom';
import Button from "../components/ui/Button";

function Avatar() {
  return (
    <>
      <div className="flex items-center justify-center mt-5 mb-5">
        <div className="flex gap-5">
          <img src="https://i.ibb.co/QdrDRJ0/image.jpg" className="flex-none w-12 h-12 rounded-full" />
          <div>
            <span className="block text-xl text-white font-semibold">
              Nombre de usuario
            </span>
            <span className="block text-xl text-pgray">@Nickname</span>
          </div>
          <div>
            <Link to="/Post">
              <Button>publicar</Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Avatar;
