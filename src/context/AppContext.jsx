import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cards, setCards] = useState([]);
  const [filters, setFilters] = useState({ category: '', rating: '' });

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  const updateCards = (newCards) => {
    setCards(newCards);
  };

  const updateFilters = (newFilters) => {
    setFilters(newFilters);
  };

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

  const addShop = (newShop) => {
    setCards([...cards, newShop]);
  };

  useEffect(() => {
    const token = localStorage.getItem('id');
    if (token) {
      setIsLoggedIn(true);
    }
    getShops();
  }, []);

  return (
    <AppContext.Provider
      value={{
        isLoggedIn,
        login,
        logout,
        cards,
        updateCards,
        filters,
        updateFilters,
        addShop,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
