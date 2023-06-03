import { IconContext } from "react-icons";
import { AiOutlineBell, AiOutlineShopping } from "react-icons/ai";
import { Link } from "react-router-dom";

const TopNav = () => {
  return (
    <nav className="w-full bg-white py-6 flex items-center gap-x-6 justify-end px-6">
      <Link to="/notifications" className="relative">
        <IconContext.Provider value={{ className: "text-2xl" }}>
          <AiOutlineBell />
        </IconContext.Provider>

        <div className="w-[5px] h-[5px] bg-red-500 rounded-full absolute top-[-2px] right-[-2px]"></div>
      </Link>

      <Link
        to="/cart"
        className="relative"
      >
        <IconContext.Provider value={{ className: "text-[1.6rem]" }}>
          <AiOutlineShopping />
        </IconContext.Provider>

        <div className="w-[5px] h-[5px] bg-primary rounded-full absolute top-[-2px] right-[-2px]"></div>
      </Link>
    </nav>
  );
};

export default TopNav;