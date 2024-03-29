/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useContext, useEffect } from "react";

const CardsContext = createContext();

export const CardProvider = ({ children }) => {
  const [cards, setCards] = useState([]);
  const [filters, setFilters] = useState({ category: "", rating: "" });

  const getShops = async () => {
    const response = await fetch("../shop.json");
    if (!response.ok) return;
    try {
      const response = await fetch("../shop.json");
      if (!response.ok) {
        throw new Error("Error de conexion ");
      }
      const shops = await response.json();
      setCards(shops);
    } catch (error) {
      console.error("error en el fetch");
      throw error;
    }
  };

  useEffect(() => {
    getShops();
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
