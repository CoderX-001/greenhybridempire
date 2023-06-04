import { createContext, useState } from "react"
import { products } from "../utils/dummyProductData";

export const AppContext = createContext()

const AppContextProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false)
  const [searchActive, setSearchActive] = useState(false)
  const [searchText, setSearchText] = useState("");
  const [cartItems, setCartItems] = useState(products);

  const updateItem = (id, option, newValue) => {
    const newCartItems = cartItems.filter((item) => {
      return item.id === id;
    });
    const update = { ...newCartItems }[0];
    update[option] = newValue;
  };
  
  const cartState = { cartItems, setCartItems, updateItem }
  const searchState = {searchText, setSearchText, searchActive, setSearchActive}
  return (
    <AppContext.Provider value={{isDark, setIsDark, cartState, searchState}}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;