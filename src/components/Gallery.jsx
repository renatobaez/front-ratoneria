import Card from "./Card";
import { useState } from "react";

const Gallery = () => {
  let img =
    "https://i.pinimg.com/originals/b0/cb/52/b0cb52a3da954d39ddd4f8e49ec8cb30.jpg";

  const initialCards = [
    <Card
      key={1}
      id={1}
      title={"Bar 1"}
      img={img}
      rating={5}
      category={"bar"}
    />,
    <Card
      key={2}
      id={2}
      title={"Bar 2"}
      img={img}
      rating={3}
      category={"bar"}
    />,
    <Card
      key={3}
      id={3}
      title={"Bar 3"}
      img={img}
      rating={2}
      category={"bar"}
    />,
    <Card
      key={4}
      id={4}
      title={"Bar 4"}
      img={img}
      rating={4}
      category={"bar"}
    />,
    <Card
      key={5}
      id={5}
      title={"Bar 5"}
      img={img}
      rating={2}
      category={"bar"}
    />,
    <Card
      key={6}
      id={6}
      title={"Bar 6"}
      img={img}
      rating={3}
      category={"bar"}
    />,
    <Card
      key={7}
      id={7}
      title={"Restaurant 1"}
      img={img}
      rating={2}
      category={"restaurant"}
    />,
    <Card
      key={8}
      id={8}
      title={"Restaurant 2"}
      img={img}
      rating={4}
      category={"restaurant"}
    />,
    <Card
      key={9}
      id={9}
      title={"Restaurant 3"}
      img={img}
      rating={5}
      category={"restaurant"}
    />,
    <Card
      key={10}
      id={10}
      title={"Restaurant 4"}
      img={img}
      rating={5}
      category={"restaurant"}
    />,
    <Card
      key={11}
      id={11}
      title={"Restaurant 5"}
      img={img}
      rating={3}
      category={"restaurant"}
    />,
    <Card
      key={12}
      id={12}
      title={"Restaurant 6"}
      img={img}
      rating={1}
      category={"restaurant"}
    />,
  ];

  const [cards, setCards] = useState(initialCards);
  const [filters, setFilters] = useState({ category: "", rating: "" });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const filteredCards = initialCards.filter((card) => {
    const passesCategoryFilter =
      filters.category === "" || card.props.category === filters.category;
    const passesRatingFilter =
      filters.rating === "" || card.props.rating.toString() === filters.rating;
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
        {filteredCards}
      </div>
    </div>
  );
};

export default Gallery;
