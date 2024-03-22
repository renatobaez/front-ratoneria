import Carousel from "../components/Carousel";
import Sidebar from "../components/Sidebar";
import Searchbar from "../components/ui/Searchbar";
function Home() {
  let slides = [
    "https://dummyimage.com/1180x250/ffffff/000000",
    "https://dummyimage.com/1180x250/ffffff/000000",
    "https://dummyimage.com/1180x250/ffffff/000000",
    "https://dummyimage.com/1180x250/ffffff/000000",
  ];

  return (
    <>
      <div className="flex h-screen">
        <div className="w-1/6 bg-gray-200">
          <Sidebar />
        </div>
        <div className="w-3/4 p-4">
          <div className="mb-4">
            <div className=" mt-5 m-auto pt-11 sm:w-full md:w-[80%] md:h-64">
              <Carousel slides={slides} />
            </div>
            <Searchbar />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
