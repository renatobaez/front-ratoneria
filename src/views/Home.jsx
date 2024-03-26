import { useState } from "react";
import Carousel from "../components/Carousel";
import Sidebar from "../components/Sidebar";
import Searchbar from "../components/ui/Searchbar";
import Card from "../components/Card";
import Gallery from "../components/Gallery";

function Home() {
  let slides = [
    "https://www.arenamultiespacio.com/wp-content/uploads/2020/07/CARRUSEL-WEB-MEGABOX-2-BURGERS-1240x700-v34.jpg",
    "https://www.arenamultiespacio.com/wp-content/uploads/2020/07/CARRUSEL-WEB-MEGABOX-2-BURGERS-1240x700-v34.jpg",
    "https://www.arenamultiespacio.com/wp-content/uploads/2020/07/CARRUSEL-WEB-MEGABOX-2-BURGERS-1240x700-v34.jpg",
    "https://www.arenamultiespacio.com/wp-content/uploads/2020/07/CARRUSEL-WEB-MEGABOX-2-BURGERS-1240x700-v34.jpg",
  ];

  return (
    <div className="flex flex-col lg:w-[80%] lg:p-10 w-full mx-auto relative mb-10 mt-10">
      <Carousel slides={slides} />
      <Searchbar />
      <Gallery />
    </div>
  );
}

export default Home;
