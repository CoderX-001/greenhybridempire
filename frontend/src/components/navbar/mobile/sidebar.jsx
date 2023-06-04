import { useState } from "react";
import { Link } from "react-router-dom"
import { getAvailableScreenHeight } from "../../../functions/functions";
import { IconContext } from "react-icons";
import { FaShoppingBasket, FaTimes } from "react-icons/fa"

const Sidebar = ({ active, closeNav }) => {
  const [screenHeight, setScreenHeight] = useState(getAvailableScreenHeight())
  window.addEventListener("resize", () => setScreenHeight(getAvailableScreenHeight()))

  return (
    <aside
      className={`w-[70%] bg-dark-green fixed top-0 left-0 ${
        active ? "translate-x-0" : "-translate-x-full"
      } transition-all duration-300`}
      style={{ height: screenHeight + "px" }}
    >
      <div className="py-4 flex item-center justify-end">
        <button onClick={closeNav} className="mr-3 text-white">
          <IconContext.Provider value={{ className: "text-2xl" }}>
            <FaTimes />
          </IconContext.Provider>
        </button>
      </div>

      <div className="mt-6 px-3">
        <div className="text-white flex items-center gap-x-1 mb-3">
          <IconContext.Provider value={{ className: "text-2xl" }}>
            <FaShoppingBasket />
          </IconContext.Provider>
          <span className="text-lg">Products</span>
        </div>

        <div className="flex flex-col gap-y-2 text-primary-gray ml-7">
          <Link to="">Books</Link>
          <Link to="">Courses</Link>
          <Link to="">Farm inputs</Link>
          <Link to="">GreenHybrid Products</Link>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;