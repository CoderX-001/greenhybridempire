import { useContext } from "react";
import { AppContext } from "../../../contexts/AppContext";

const BlogIntro = ({screenWidth, bodyMargin}) => {
  const {isDark} = useContext(AppContext)

  return (
    <div
      className={`w-full px-4 py-12 ${
        isDark ? "bg-[#3e3e3e]" : "bg-primary-gray"
      } ${screenWidth > 767 ? bodyMargin : ""} transition-all duration-300`}
    >
      <h1 className="text-3xl font-semibold text-primary bg-red-500 mb-4">
        Agricultural Insider: News and Opinion
      </h1>
      <p className={`${isDark ? "text-primary-gray" : "text-black"}`}>
        Visit our blog to read about new product features, agricultural news,
        and updates.
      </p>
    </div>
  );
};

export default BlogIntro;