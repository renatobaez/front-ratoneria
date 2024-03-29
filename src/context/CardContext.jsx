import React, { createContext, useState, useContext, useEffect } from "react";

const CardsContext = createContext();

export const CardProvider = ({ children }) => {
  const [cards, setCards] = useState([]);
  const [filters, setFilters] = useState({ category: "", rating: "" });

  const initializeCards = () => {
    let img =
      "https://i.pinimg.com/originals/b0/cb/52/b0cb52a3da954d39ddd4f8e49ec8cb30.jpg";

    const initialCards = [
      {
        key: 1,
        id: 1,
        title: "Bar 1",
        img: img,
        rating: 5,
        category: "bar",
      },
      {
        key: 2,
        id: 2,
        title: "Bar 2",
        img: img,
        rating: 4,
        category: "bar",
      },
      {
        key: 3,
        id: 3,
        title: "Bar 3",
        img: img,
        rating: 3,
        category: "bar",
      },
      {
        key: 4,
        id: 4,
        title: "Bar 4",
        img: img,
        rating: 2,
        category: "bar",
      },
      {
        key: 5,
        id: 5,
        title: "Bar 5",
        img: img,
        rating: 1,
        category: "bar",
      },
      {
        key: 6,
        id: 6,
        title: "Restaurante 1",
        img: img,
        rating: 5,
        category: "restaurant",
      },
      {
        key: 7,
        id: 7,
        title: "Restaurante 2",
        img: img,
        rating: 2,
        category: "restaurant",
      },
      {
        key: 8,
        id: 8,
        title: "Restaurante 8",
        img: img,
        rating: 5,
        category: "restaurant",
      },
      {
        key: 9,
        id: 9,
        title: "Restaurante 9",
        img: img,
        rating: 2,
        category: "restaurant",
      },
      {
        key: 10,
        id: 10,
        title: "Restaurante 10",
        img: img,
        rating: 5,
        category: "restaurant",
      },
    ];

    setCards(initialCards); // Establece el estado de las cartas con initialCards
  };

  useEffect(() => {
    initializeCards();
  }, []);

  return (
    <CardsContext.Provider value={{ cards, setCards, filters, setFilters }}>
      {children}
    </CardsContext.Provider>
  );
};

export const useCardContext = () => {
  return useContext(CardsContext);
};

export default CardsContext;
