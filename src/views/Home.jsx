import Carousel from "../components/Carousel";
import Searchbar from "../components/ui/Searchbar";

import Gallery from "../components/Gallery";

function Home() {
  let slides = [
    "https://dummyimage.com/1280x250/000/fff",
    "https://dummyimage.com/1280x250/000/fff",
    "https://dummyimage.com/1280x250/000/fff",
    "https://dummyimage.com/1280x250/000/fff",
  ];

  return (
    <div className="flex flex-col lg:w-[1280px] w-full mx-auto relative mb-10 mt-10">
      <Carousel slides={slides} />
      <Searchbar />
      {/* <Filters /> */}
      <Gallery />
    </div>
  );
}

export default Home;
