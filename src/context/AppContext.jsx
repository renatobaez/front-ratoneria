import { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
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
    <AppContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        cards,
        setCards,
        filters,
        setFilters,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
