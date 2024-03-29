import { useState, useEffect } from "react";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

export default function Carousel({ slides }) {
  const [current, setCurrent] = useState(0);
  const nextSlide = () => {
    setCurrent((current + 1) % slides.length);
  };

  const previousSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 2000);
    return () => clearInterval(timer);
  }, [current]);

  return (
    <div className="lg:h-[200px] lg:w-[100%]  mx-auto overflow-hidden relative lg:rounded-lg shadow-xl">
      <div
        className="flex transition ease-out duration-400"
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((s, photo) => (
          <img
            key={photo}
            src={s}
            alt="imagen promocional"
            className="w-1180 h-250 object-cover"
          />
        ))}
      </div>

      <div className="absolute top-0 h-full w-full flex justify-between items-center text-black px-10 text-3xl">
        <button onClick={previousSlide}>
          <BsFillArrowLeftCircleFill />
        </button>
        <button onClick={nextSlide}>
          <BsFillArrowRightCircleFill />
        </button>
      </div>
    </div>
  );
}
