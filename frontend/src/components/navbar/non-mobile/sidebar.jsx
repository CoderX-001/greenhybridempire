import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IconContext } from "react-icons";
import { AiFillShop, AiOutlineUser } from "react-icons/ai";
import { BiHome, BiMoon, BiNews, BiSearch, BiSun } from "react-icons/bi";
import { HiMenuAlt1 } from "react-icons/hi";
import { AppContext } from "../../../contexts/AppContext";

const Sidebar = ({ navFunc, screenHeight }) => {
  const { isDark, setIsDark } = useContext(AppContext)
  const styleScoped = {
    height: screenHeight,
  };
  
  const [sideBar, setSideBar] = useState(false)

  const updateNav = () => {
    navFunc(!sideBar);
    setSideBar(!sideBar);
  }

  return (
    <aside
      className={`${sideBar ? "w-[30%] px-6" : "w-20 flex flex-col items-center"} 
      fixed z-[9999] top-0 left-0
      ${isDark ? "bg-[#121212 ]" : "bg-white"} 
      py-6 transition-[width,color] duration-300 drop-shadow-lg`}
      style={styleScoped}
    >
      <Link to="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          className="iconify iconify--logos"
          width="31.88"
          height="32"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 256 257"
        >
          <defs>
            <linearGradient
              id="IconifyId1813088fe1fbc01fb466"
              x1="-.828%"
              x2="57.636%"
              y1="7.652%"
              y2="78.411%"
            >
              <stop offset="0%" stopColor="#41D1FF"></stop>
              <stop offset="100%" stopColor="#BD34FE"></stop>
            </linearGradient>
            <linearGradient
              id="IconifyId1813088fe1fbc01fb467"
              x1="43.376%"
              x2="50.316%"
              y1="2.242%"
              y2="89.03%"
            >
              <stop offset="0%" stopColor="#FFEA83"></stop>
              <stop offset="8.333%" stopColor="#FFDD35"></stop>
              <stop offset="100%" stopColor="#FFA800"></stop>
            </linearGradient>
          </defs>
          <path
            fill="url(#IconifyId1813088fe1fbc01fb466)"
            d="M255.153 37.938L134.897 252.976c-2.483 4.44-8.862 4.466-11.382.048L.875 37.958c-2.746-4.814 1.371-10.646 6.827-9.67l120.385 21.517a6.537 6.537 0 0 0 2.322-.004l117.867-21.483c5.438-.991 9.574 4.796 6.877 9.62Z"
          ></path>
          <path
            fill="url(#IconifyId1813088fe1fbc01fb467)"
            d="M185.432.063L96.44 17.501a3.268 3.268 0 0 0-2.634 3.014l-5.474 92.456a3.268 3.268 0 0 0 3.997 3.378l24.777-5.718c2.318-.535 4.413 1.507 3.936 3.838l-7.361 36.047c-.495 2.426 1.782 4.5 4.151 3.78l15.304-4.649c2.372-.72 4.652 1.36 4.15 3.788l-11.698 56.621c-.732 3.542 3.979 5.473 5.943 2.437l1.313-2.028l72.516-144.72c1.215-2.423-.88-5.186-3.54-4.672l-25.505 4.922c-2.396.462-4.435-1.77-3.759-4.114l16.646-57.705c.677-2.35-1.37-4.583-3.769-4.113Z"
          ></path>
        </svg>
      </Link>

      <div className="flex flex-col gap-y-8 mt-20">
        <NavLink to="/" className="large w-fit flex items-center gap-x-4">
          <div title="Home">
            <IconContext.Provider value={{ className: "text-2xl" }}>
              <BiHome />
            </IconContext.Provider>
          </div>
          {sideBar ? <span>Home</span> : null}
        </NavLink>

        <div className="flex items-center gap-x-4 text-secondary-gray hover:text-[#5c5c5c] cursor-pointer">
          <button className="w-fit" title="Search">
            <IconContext.Provider value={{ className: "text-2xl" }}>
              <BiSearch />
            </IconContext.Provider>
          </button>
          {sideBar ? <span>Search</span> : null}
        </div>

        <NavLink to="/shop" className="large w-fit flex items-center gap-x-4">
          <div title="Shop">
            <IconContext.Provider value={{ className: "text-2xl" }}>
              <AiFillShop />
            </IconContext.Provider>
          </div>
          {sideBar ? <span>Shop</span> : null}
        </NavLink>

        <NavLink to="/blog" className="large w-fit flex items-center gap-x-4">
          <div title="Blog">
            <IconContext.Provider value={{ className: "text-2xl" }}>
              <BiNews />
            </IconContext.Provider>
          </div>
          {sideBar ? <span>Blog</span> : null}
        </NavLink>

        <NavLink
          to="/join/login"
          className="large w-fit flex items-center gap-x-4"
        >
          <div title="Login">
            <IconContext.Provider value={{ className: "text-2xl" }}>
              <AiOutlineUser />
            </IconContext.Provider>
          </div>
          {sideBar ? <span>Login</span> : null}
        </NavLink>
      </div>

      <div className="flex flex-col items-start gap-y-6 absolute bottom-6">
        <button
          onClick={() => setIsDark(!isDark)}
          className={`flex items-center gap-x-3 ${
            isDark ? "text-secondary" : "text-black"
          } transition-all duration-300`}
        >
          <IconContext.Provider value={{ className: "text-2xl" }}>
            {isDark ? <BiSun /> : <BiMoon />}
          </IconContext.Provider>
          {sideBar ? (
            <span className="text-[0.9rem] text-secondary-gray hover:text-[#5c5c5c]">
              Toggle theme
            </span>
          ) : null}
        </button>

        <button
          onClick={updateNav}
          className={`${
            isDark ? "text-secondary" : "text-black"
          } transition-all duration-300`}
        >
          <IconContext.Provider value={{ className: "text-2xl" }}>
            <HiMenuAlt1 />
          </IconContext.Provider>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;