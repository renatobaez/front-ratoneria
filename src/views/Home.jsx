import Carousel from "../components/Carousel";
import Searchbar from "../components/ui/Searchbar";
import Gallery from "../components/Gallery";

function Home() {
  let slides = ["/g1.jpg", "/g2.jpg", "/g3.jpg", "/g4.jpg"];

  return (
    <div className="flex flex-col lg:w-[1280px] w-full mx-auto relative mb-10 mt-10">
      <Carousel slides={slides} />
      <Searchbar />
      <Gallery />
    </div>
  );
}

export default Home;
