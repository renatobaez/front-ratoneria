import { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const CardsContext = createContext();

export const CardProvider = ({ children }) => {
  const [cards, setCards] = useState([]);
  const [filters, setFilters] = useState({ category: '', rating: '' });

  const getShops = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/v1/shops');
      const shops = response.data;
      setCards(shops);
      return shops;
    } catch (error) {
      console.error('Error en la solicitud:', error);
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
