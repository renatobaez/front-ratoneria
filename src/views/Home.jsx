import Carousel from "../components/Carousel";
import Sidebar from "../components/Sidebar";
function Home() {
  let slides = [
    "https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg",
    "https://wallpapercave.com/wp/wp3386769.jpg",
    "https://wallpaperaccess.com/full/809523.jpg",
    "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg",
  ];

  return (
    <>
      <div className="flex h-screen">
        <div className="w-1/6 bg-gray-200">
          <Sidebar / >
        </div>
        <div className="w-3/4 p-4">
          <div className="mb-4">
          <div className=" mt-5 m-auto pt-11 sm:w-full md:w-[60%] md:h-64">
            <Carousel slides={slides} />
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;