import { useContext, useEffect, useState } from "react";
import { Mobile, Navbar } from "../../components/navbar";
import { TopNav } from "../../components/navbar/non-mobile";
import { AppContext } from "../../contexts/AppContext";
import { IconContext } from "react-icons";
import { BiCartAlt, BiTrash, BiTrashAlt } from "react-icons/bi";
import CartItem from "./components/CartItems";
import { priceComma } from "../../functions/CartFuncs";
import Loading from "../Loading";
import { FaTimesCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AiFillShop } from "react-icons/ai";

const Cart = ({
  setBackground,
  screenWidth,
  screenHeight,
  getNavbarActive,
  bodyWidth,
  bodyMargin,
}) => {
  const { isDark, cartState } = useContext(AppContext);
  const { cartItems, deleteCartItem } = cartState;

  const [isPending, setIsPending] = useState(false);
  const [cartTotal, setCartTotal] = useState(0);
  const [deleteItem, setDeleteItem] = useState(false);
  const [deleted, setDeleted] = useState([]);

  useEffect(() => {
    return () => {
      window.scrollTo(0, 0);
      document.title = "Cart - Green Hybrid Empire";

      /* setTimeout(() => {
        setIsPending(false);
      }, 2000);*/
    };
  }, []);

  useEffect(() => {
    let price = 0;
    cartItems.map((item) => {
      price += item["discount-price"]
        ? parseInt(item["discount-price"]) * item.orderFor
        : parseInt(item.price) * item.orderFor;
    });

    setCartTotal(price);
  }, [cartItems]);

  useEffect(() => {
    setBackground(isDark ? "#121212" : "#f1f1f1");
  }, [setBackground, isDark]);

  if (isPending) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col md:flex-row md:justify-center">
      {screenWidth < 768 ? (
        <Mobile />
      ) : (
        <Navbar
          bodyWidth={bodyWidth}
          screenHeight={screenHeight}
          navFunc={getNavbarActive}
        />
      )}

      <main
        className={`relative w-full overflow-x-hidden ${
          isDark ? "bg-[#121212]" : "bg-white"
        } ${screenWidth > 767 ? bodyMargin : ""} transition-all duration-300`}
        style={{ minHeight: screenHeight - 80 + "px" }}
      >
        {screenWidth > 767 ? <TopNav /> : null}

        <div className="px-4 pt-6 h-screen md:px-16">
          <div className="w-full flex items-center justify-between mb-6 md:max-w-[35rem]">
            <h1
              className={`${
                isDark ? "text-primary-gray" : "text-black"
              } text-xl font-medium md:text-2xl`}
            >
              Checkout
            </h1>

            {cartItems.length > 0 ? (
              !deleteItem ? (
                <button
                  onClick={() => setDeleteItem(true)}
                  className="text-red-500"
                >
                  <IconContext.Provider value={{ className: "text-xl" }}>
                    <BiTrashAlt />
                  </IconContext.Provider>
                </button>
              ) : (
                <div className="flex items-center gap-x-6">
                  <button
                    onClick={() => {
                      setDeleteItem(false);
                      setDeleted([]);
                    }}
                    className="flex items-center gap-x-1 py-2 px-3 rounded-full bg-gray-200 text-red-500"
                  >
                    <IconContext.Provider value={{ className: "text-xl" }}>
                      <FaTimesCircle />
                    </IconContext.Provider>
                    <span className="mt-0.5">Cancel</span>
                  </button>
                </div>
              )
            ) : null}
          </div>

          <div className="w-full pb-32">
            {cartItems.length > 0 ? (
              cartItems.map((cart) => (
                <CartItem
                  key={cart.id}
                  itemID={cart.id}
                  category={cart.category}
                  image={cart["item-image"]}
                  name={cart.name}
                  price={
                    cart["discount-price"] ? cart["discount-price"] : cart.price
                  }
                  orderFor={cart.orderFor}
                  itemsAvailable={cart.itemsAvailable}
                  deleteItem={deleteItem}
                  setDeleted={setDeleted}
                  deleted={deleted}
                />
              ))
            ) : (
              <div className="w-full text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <h1 className="text-2xl text-secondary-gray mb-6">
                  No items in the cart!
                </h1>
                <Link
                  to="/shop"
                  className="w-fit mx-auto flex items-center gap-x-2 bg-dark-green text-secondary py-3 px-4 rounded-lg shadow"
                >
                  Go to shop
                  <IconContext.Provider value={{ className: "text-xl" }}>
                    <AiFillShop />
                  </IconContext.Provider>
                </Link>
              </div>
            )}
          </div>

          {cartItems.length > 0 ? (
            !deleteItem ? (
              <div
                className={`w-full py-3 ${
                  isDark ? "bg-[#121212]" : "bg-white"
                } flex items-center justify-between fixed bottom-12 left-0 px-4 md:max-w-[30rem] md:left-auto md:mx-auto`}
              >
                <div>
                  <p className="text-gray-500">Total price</p>
                  <p
                    className={`font-semibold text-lg ${
                      isDark ? "text-primary-gray" : "text-black"
                    }`}
                  >
                    ₦{priceComma(cartTotal)}
                  </p>
                </div>
                <button className="w-fit px-4 py-3 rounded-lg bg-dark-green text-secondary text-[0.9rem] flex items-center gap-x-2">
                  <IconContext.Provider value={{ className: "text-xl" }}>
                    <BiCartAlt />
                    <span className="mt-0.5">Pay Now</span>
                  </IconContext.Provider>
                </button>
              </div>
            ) : (
              <div
                className={`w-full py-3 ${
                  isDark ? "bg-[#121212]" : "bg-white"
                } flex items-center justify-end fixed bottom-12 left-0 px-4`}
              >
                <button
                  onClick={() => {
                    const item =
                      deleted.length === 1 ? deleted.toString() : deleted;
                    deleteCartItem(item);

                    setDeleted([]);
                  }}
                  className="w-fit px-4 py-3 rounded-lg bg-red-500 text-primary-gray text-[0.9rem] flex items-center gap-x-2"
                >
                  <IconContext.Provider value={{ className: "text-xl" }}>
                    <BiTrash />
                    <span className="mt-0.5">
                      Remove {deleted.length} item
                      {deleted.length > 1 ? "s" : ""}
                    </span>
                  </IconContext.Provider>
                </button>
              </div>
            )
          ) : null}
        </div>
      </main>
    </div>
  );
};

export default Cart;
