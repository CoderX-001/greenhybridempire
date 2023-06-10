import { useContext } from "react";
import { IconContext } from "react-icons";
import { BiLoaderAlt } from "react-icons/bi";
import { AppContext } from "../contexts/AppContext";

const Loading = () => {
  const { isDark } = useContext(AppContext);

  return (
    <div
      className={`w-full h-screen text-primary ${
        isDark ? "bg-[#121212]" : "bg-white"
      } grid place-content-center`}
    >
      <div className="animate-spin">
        <IconContext.Provider value={{ className: "text-6xl" }}>
          <BiLoaderAlt />
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default Loading;
