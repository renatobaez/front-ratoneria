import Avatar from "../components/Avatar";
import Card from "../components/Card";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <>
      <Avatar>
        <div></div>
      </Avatar>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mb-10">
        <Link to="/local" className="transform hover:scale-105">
          <div className="w-full h-full">
            <Card></Card>
          </div>
        </Link>
        <Link to="/local2" className="transform hover:scale-105">
          <div className="w-full h-full">
            <Card></Card>
          </div>
        </Link>
        <Link to="/local3" className="transform hover:scale-105">
          <div className="w-full h-full">
            <Card></Card>
          </div>
        </Link>
        <Link to="/local4" className="transform hover:scale-105">
          <div className="w-full h-full">
            <Card></Card>
          </div>
        </Link>
        <Link to="/local6" className="transform hover:scale-105">
          <div className="w-full h-full">
            <Card></Card>
          </div>
        </Link>
        <Link to="/local5" className="transform hover:scale-105">
          <div className="w-full h-full">
            <Card></Card>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Profile;
