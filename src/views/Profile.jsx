import Avatar from '../components/Avatar';
import Card from '../components/Card';
import { Link } from 'react-router-dom';

function Profile() {
  return (
    <>
      <div className="p-5">
        <Avatar>
          <div></div>
        </Avatar>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mb-10 lg:w-[50%] w-[100%] mx-auto">
        <Link
          to="/local/d46fa366-bad5-48ea-90b3-62d9b0e30c58"
          className="transform hover:scale-105"
        >
          <div className="w-full h-full">
            <Card
              key="d46fa366-bad5-48ea-90b3-62d9b0e30c58"
              id="d46fa366-bad5-48ea-90b3-62d9b0e30c58"
              title="Bar 1"
              img="https://i.pinimg.com/originals/b0/cb/52/b0cb52a3da954d39ddd4f8e49ec8cb30.jpg"
              rating="5"
              category="bar"
            />
          </div>
        </Link>
        <Link
          to="/local/7efdf6a5-a5dd-4c3d-b70a-642755dc01b7"
          className="transform hover:scale-105"
        >
          <div className="w-full h-full">
            <Card
              key="7efdf6a5-a5dd-4c3d-b70a-642755dc01b7"
              id="7efdf6a5-a5dd-4c3d-b70a-642755dc01b7"
              title="Bar 2"
              img="https://media.traveler.es/photos/652e9e2c1a6a8e2a79e99e24/1:1/w_900,h_900,c_limit/Sips.jpg"
              rating="5"
              category="bar"
            />
          </div>
        </Link>
      </div>
    </>
  );
}

export default Profile;
