import { useContext } from "react";
import { IconContext } from "react-icons";
import { AiFillProfile, AiFillShop, AiOutlineUser } from "react-icons/ai";
import { BiHome, BiLogOut, BiNews, BiSearch } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { AppContext } from "../../../contexts/AppContext";

const BottomNav = () => {
  const { isDark, searchState, authStates } = useContext(AppContext);
  const { authState } = authStates;
  const { setSearchActive } = searchState;

  const userID =
    typeof authState.authenticated !== "undefined" ? authState.user.id : "";

  return (
    <div
      className={`fixed z-50 bottom-0 left-0 w-full h-12 ${
        isDark ? "bg-[#121212]" : "bg-white"
      } px-8 flex items-center justify-between transition-all duration-300`}
    >
      <NavLink to="/" className="text-primary" title="Home">
        <IconContext.Provider value={{ className: "text-[1.6rem]" }}>
          <BiHome />
        </IconContext.Provider>
      </NavLink>
      <button
        onClick={() => setSearchActive(true)}
        className="text-primary"
        title="Search"
      >
        <IconContext.Provider value={{ className: "text-[1.6rem]" }}>
          <BiSearch />
        </IconContext.Provider>
      </button>
      <NavLink to="/shop" className="text-primary" title="Shop">
        <IconContext.Provider value={{ className: "text-[1.6rem]" }}>
          <AiFillShop />
        </IconContext.Provider>
      </NavLink>
      <NavLink to="/blog" className="text-primary" title="Blog">
        <IconContext.Provider value={{ className: "text-[1.6rem]" }}>
          <BiNews />
        </IconContext.Provider>
      </NavLink>
      {typeof authState.authenticated === "undefined" ? (
        <NavLink to="/join/login" className="text-primary" title="Login">
          <IconContext.Provider value={{ className: "text-[1.6rem]" }}>
            <AiOutlineUser />
          </IconContext.Provider>
        </NavLink>
      ) : (
        <NavLink to={`/profile/${userID}`} className="text-primary">
          <div className="w-6 h-6 bg-transparent text-primary border-2 border-primary rounded-full relative">
            <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-sm font-semibold">
              E
            </span>
          </div>
        </NavLink>
      )}
    </div>
  );
};

export default BottomNav;