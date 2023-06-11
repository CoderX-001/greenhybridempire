import { createContext, useState } from "react";
import { products } from "../utils/dummyProductData";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const [searchText, setSearchText] = useState("");

  localStorage.setItem("cart", JSON.stringify([1, 2, 3]));

  const cart = [];

  // Get the products added to cart from the localStorage
  const mapCartItem = (array) => {
    const cartProducts = JSON.parse(localStorage.getItem("cart"));

    cartProducts.map((cartProduct) => {
      products.forEach((product, index) => {
        product.order = index;
        if (product.id === cartProduct) {
          array.push(product);
        }
      });
    });
  };
  // console.log(cart)
  mapCartItem(cart);

  const [cartItems, setCartItems] = useState(cart);

  // Function to remove items from cart
  const deleteCartItem = (items) => {
    // Check for the number of items that are to be removed
    if (typeof items === "object") {
      // Run if item is an array of items (i.e. more than one item)
      const cartProducts = JSON.parse(localStorage.getItem("cart"));
      const newCartProducts = cartProducts.filter((product) => {
        return !items.includes(product);
      });
      const newItems = cartItems.filter((item) => {
        return !items.includes(item.id);
      });

      localStorage.setItem("cart", JSON.stringify(newCartProducts));
      setCartItems(newItems);
    } else {
      // Run if item is a single item
      const cartProducts = JSON.parse(localStorage.getItem("cart"));
      const newCartProducts = cartProducts.filter((product) => {
        return product !== parseInt(items);
      });
      const newCartItems = cartItems.filter((item) => {
        return item.id !== parseInt(items);
      });

      localStorage.setItem("cart", JSON.stringify(newCartProducts));
      setCartItems(newCartItems);
    }
  };

  const [authState, setAuthState] = useState({});

  // Function to update cart item
  const updateItem = (id, option, newValue) => {
    const newCartItems = cartItems.filter((item) => {
      return item.id === id;
    });
    const update = { ...newCartItems }[0];
    console.log(update);
    update[option] = newValue;

    const cartItems2 = cartItems.filter((newItem) => {
      return newItem.id !== id;
    });

    const newArray = [...cartItems2, newCartItems[0]].sort((a, b) => {
      return a.order - b.order;
    });
    setCartItems(newArray);
  };

  const cartState = { cartItems, setCartItems, updateItem, deleteCartItem };
  const searchState = {
    searchText,
    setSearchText,
    searchActive,
    setSearchActive,
  };
  const authStates = { authState, setAuthState };

  if (
    typeof authState.authenticated === "undefined" &&
    localStorage.getItem("user") !== null
  ) {
    const currentUser = JSON.parse(localStorage.getItem("user"));
    const authStateUser = {
      authenticated: true,
      user: {
        id: currentUser.id,
        role: currentUser.role,
      },
    };

    setAuthState(authStateUser);
  }

  return (
    <AppContext.Provider
      value={{ isDark, setIsDark, cartState, searchState, authStates }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
