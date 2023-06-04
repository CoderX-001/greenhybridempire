import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../../../contexts/AppContext";

const CategoryItem = ({ title, description, image, link }) => {
  const { isDark } = useContext(AppContext)
  
  return (
    <Link
      to={link}
      className={`${isDark ? "bg-[#3e3e3e]" : "bg-white"} w-[12rem] h-fit px-3 pt-6 pb-4 rounded-2xl drop-shadow-lg border-[1px] border-transparent hover:drop-shadow-none ${isDark ? "hover:border-secondary" : "hover:border-primary"}`}
    >
      <img
        src={image}
        alt={`Image for ${title} category`}
        className="w-28 h-28 mx-auto rounded-lg object-cover object-top"
      />
      <h2 className={`mt-2 text-center font-medium ${isDark ? "text-secondary" : "text-dark-green"}`}>{title}</h2>
      <p className={`text-sm text-center ${isDark ? "text-primary-gray" : "text-black"}`}>{description}</p>
    </Link>
  );
};

export default CategoryItem;
