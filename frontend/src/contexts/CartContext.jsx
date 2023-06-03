import { createContext, useState } from "react"
// import ItemImage from "../assets/image3.jpeg";

export const CartContext = createContext()

const CartContextProvider = (props) => {
  const [cartItems, setCartItems] = useState([
    {
      name: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      price: "40000",
      "discount-price": "35000",
      itemsAvailable: 5,
      // "item-image": ItemImage,
      id: 1,
      orderFor: 1,
    },
    {
      name: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      price: "40000",
      "discount-price": "",
      itemsAvailable: 10,
      // "item-image": ItemImage,
      id: 2,
      orderFor: 1,
    },
    {
      name: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      price: "50000",
      "discount-price": "",
      itemsAvailable: 10,
      // "item-image": ItemImage,
      id: 3,
      orderFor: 1,
    },
  ]);

  const updateItem = (id, option, newValue) => {
    const newCartItems = cartItems.filter(item => {
      return item.id === id
    })
    const update = { ...newCartItems }[0]
    update[option] = newValue
    // console.log(update)
  }

  return (
    <CartContext.Provider value={{cartItems, setCartItems, updateItem}}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
