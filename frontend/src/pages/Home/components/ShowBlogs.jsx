import { Link } from "react-router-dom"
import BlogItem from "./sub-components/BlogItem";
import BlogImage from "../../../assets/image7.jpg"
import { IconContext } from "react-icons";
import { FaAngleRight } from "react-icons/fa";
import { useContext } from "react";
import { ThemeContext } from "../../../contexts";

const ShowBlogs = () => {
  const {isDark} = useContext(ThemeContext)

  return (
    <div className={`${isDark ? "bg-[#3e3e3e]" : "bg-white"} pt-8 pb-20 px-4`}>
      <h2 className="Amita text-2xl text-center text-primary font-semibold">
        Check out our blog
      </h2>
      <p className={`text-center text-[0.9rem] text-primary-gray`}>
        There are plenty of free materials and advice available.
      </p>
      <div className="mt-12 mb-6 flex flex-wrap items-center justify-center gap-y-6 gap-x-6">
        <BlogItem
          title="How and where best to plant coconut and palm"
          link="/blog/item1"
          image={BlogImage}
        />

        <BlogItem
          title="How and where best to plant coconut and palm"
          link="/blog/item1"
          image={BlogImage}
        />

        <BlogItem
          title="How and where best to plant coconut and palm"
          link="/blog/item1"
          image={BlogImage}
        />
      </div>
      <Link to="" className="float-right mr-4 text-primary flex items-center gap-x-1">
        See more
        <IconContext.Provider value={{}}>
          <FaAngleRight />
        </IconContext.Provider>
      </Link>
    </div>
  );
};

export default ShowBlogs;