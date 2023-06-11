import { IconContext } from "react-icons";
import { BiMinus, BiPlus } from "react-icons/bi";
import { useContext, useId, useState } from "react";
import { AppContext } from "../../../contexts/AppContext";
import { priceComma } from "../../../functions/CartFuncs";

const CartItem = ({
  itemID,
  image,
  name,
  category,
  price,
  orderFor,
  itemsAvailable,
  deleteItem,
  setDeleted,
  deleted,
}) => {
  const { isDark, cartState } = useContext(AppContext);
  const id = useId();

  const { updateItem } = cartState;

  const [count, setCount] = useState(orderFor);

  const incrementOrder = () => {
    const newCount = count + 1;

    if (newCount > 0 && newCount <= itemsAvailable) {
      setCount(newCount);
      updateItem(itemID, "orderFor", newCount);
    }
  };

  const decrementOrder = () => {
    const newCount = count - 1;

    if (newCount >= 1) {
      setCount(newCount);
      updateItem(itemID, "orderFor", newCount);
    }
  };

  const handleInputOrder = (e) => {
    const newCount = e.target.value;

    if (newCount > 0 && newCount <= itemsAvailable) {
      setCount(newCount);
      updateItem(itemID, "orderFor", newCount);
    } else {
      setCount(1);
      updateItem(1);
    }
  };

  const handleDelete = (e) => {
    if (e.target.checked === true) {
      setDeleted([...deleted, itemID]);
    } else {
      if (deleted.includes(itemID)) {
        const removedItem = deleted.filter((removed) => {
          return removed !== itemID;
        });
        setDeleted(removedItem);
      }
    }
  };

  return (
    <div
      className={`relative max-w-[30rem] px-4 py-3 rounded-lg mb-4 ${
        isDark ? "bg-[#3e3e3e] text-primary-gray" : "bg-primary-gray text-black"
      } flex items-center justify-between gap-x-3`}
    >
      <div className="flex items-center gap-x-3">
        <img
          src={image}
          alt="testImage image"
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="w-1/2">
          <h2 className="font-medium text-ellipsis overflow-hidden whitespace-nowrap">
            {name}
          </h2>
          <p className="text-[0.85rem] -mt-1 mb-3">{category}</p>
          <p className="text-[0.9rem] font-medium">₦{priceComma(price)}</p>
        </div>
      </div>

      {/* Buttons */}
      {!deleteItem ? (
        <div className="w-[10%] absolute right-4 flex flex-col items-center gap-y-1">
          {/* Plus button */}
          <button onClick={incrementOrder} className="px-1 py-2">
            <IconContext.Provider value={{ className: "text-lg" }}>
              <BiPlus />
            </IconContext.Provider>
          </button>

          {/* Count input field */}
          <input
            type="text"
            name="count"
            maxLength="2"
            className="w-3/4 bg-transparent text-center outline-none"
            onChange={handleInputOrder}
            value={count}
          />

          {/* Minus button */}
          <button onClick={decrementOrder} className="p-1">
            <IconContext.Provider value={{ className: "text-lg" }}>
              <BiMinus />
            </IconContext.Provider>
          </button>
        </div>
      ) : (
        <div className="w-fit absolute right-4 flex items-center">
          <input
            type="checkbox"
            name={id}
            className="deleteItem absolute w-full h-full opacity-0"
            onChange={handleDelete}
          />
          <label
            htmlFor={id}
            className={`w-6 h-6 bg-transparent border-[1px] border-secondary-gray rounded-full`}
          >
            <div
              className={`w-full h-full bg-secondary-gray border-2 border-white rounded-full`}
            ></div>
          </label>
        </div>
      )}
    </div>
  );
};

export default CartItem;
