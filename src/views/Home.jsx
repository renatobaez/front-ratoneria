import { useState } from "react";
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

  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  const closeSidebar = () => {
    setIsSidebarExpanded(false);
  };

  return (
    <>
      <div className="flex h-screen sm:w-full relative">
        <div
          className={`w-1/6 bg-pgrey ${
            isSidebarExpanded ? "block" : "w-12"
          } md:block sm:absolute top-0 left-0 h-full z-10 transition-all duration-300`}
        >
          <div
            className="flex flex-col justify-center h-full cursor-pointer"
            onClick={toggleSidebar}
          >
            <span className="text-white text-sm font-semibold px-2 transform -rotate-90">
              FILTROS
            </span>
          </div>
        </div>
        {isSidebarExpanded && (
          <div className="w-1/6 bg-porange md:block sm:absolute top-0 left-0 h-full z-10 transition-all duration-300 relative">
            <Sidebar />
            <button
              className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 text-white rotate-90"
              onClick={closeSidebar}
            >
              Cerrar Filtros
            </button>
          </div>
        )}
        <div className="w-3/4 sm:w-full relative">
          <div className="mb-4 sm:w-[full] p-5">
            <div className="mt-5 m-auto pt-11 md:w-[80%] md:h-64">
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
