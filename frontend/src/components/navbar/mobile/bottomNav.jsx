import { useContext } from "react";
import { IconContext } from "react-icons";
import { AiFillShop, AiOutlineUser } from "react-icons/ai";
import { BiHome, BiNews, BiSearch } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../../../contexts";

const BottomNav = () => {
  const {isDark} = useContext(ThemeContext)

  return (
    <div className={`fixed z-50 bottom-0 left-0 w-full h-12 ${isDark ? "bg-[#121212]" : "bg-white"} px-8 flex items-center justify-between`}>
      <NavLink to="/" className="text-primary" title="Home">
        <IconContext.Provider value={{className: "text-[1.6rem]"}}>
          <BiHome />
        </IconContext.Provider>
      </NavLink>
      <button className="text-primary" title="Search">
        <IconContext.Provider value={{className: "text-[1.6rem]"}}>
          <BiSearch />
        </IconContext.Provider>
      </button>
      <NavLink to="/shop" className="text-primary" title="Shop">
        <IconContext.Provider value={{className: "text-[1.6rem]"}}>
          <AiFillShop />
        </IconContext.Provider>
      </NavLink>
      <NavLink to="/blog" className="text-primary" title="Blog">
        <IconContext.Provider value={{className: "text-[1.6rem]"}}>
          <BiNews />
        </IconContext.Provider>
      </NavLink>
      <NavLink to="/join/login" className="text-primary" title="Login">
        <IconContext.Provider value={{className: "text-[1.6rem]"}}>
          <AiOutlineUser />
        </IconContext.Provider>
      </NavLink>
    </div>
  );
};

export default BottomNav;