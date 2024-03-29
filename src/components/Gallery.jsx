import Card from "./Card";
import { useState } from "react";
import { useCardContext } from "../context/CardContext";

const Gallery = () => {
  const { cards, filters, setFilters } = useCardContext();
  console.log(cards);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const filteredCards = cards.filter((card) => {
    const passesCategoryFilter =
      filters.category === "" || card.category === filters.category;
    const passesRatingFilter =
      filters.rating === "" || card.rating.toString() === filters.rating;
    return passesCategoryFilter && passesRatingFilter;
  });

  return (
    <div>
      <div className="flex text-white justify-center space-x-4 my-4 bg-porange p-2 rounded-md">
        <select
          className="px-4 py-2 bg-pgrey border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-white"
          name="category"
          value={filters.category}
          onChange={handleFilterChange}
        >
          <option value="">Categorias</option>
          <option value="bar">Bar</option>
          <option value="restaurant">Restaurant</option>
        </select>
        <select
          className="px-4 py-2 bg-pgrey border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-white"
          name="rating"
          value={filters.rating}
          onChange={handleFilterChange}
        >
          <option value="">Valoracion</option>
          <option value="5">5 Estrellas</option>
          <option value="4">4 Estrellas</option>
          <option value="3">3 Estrellas</option>
          <option value="2">2 Estrellas</option>
          <option value="1">1 Estrellas</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 p-10">
        {filteredCards.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            title={card.title}
            img={card.img}
            rating={card.rating}
            category={card.category}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
