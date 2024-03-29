import { Link } from "react-router-dom";

const BlogItem = ({title, link, image}) => {
  return (
    <Link
      to={link}
      className="blog-link relative w-full max-w-[20rem] h-[12rem] rounded-xl px-4 py-3 drop-shadow-lg"
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image}) no-repeat`,
        backgroundSize: "cover",
      }}
    >
      <p className="w-[90%] mx-4 absolute bottom-6 left-0 overflow-hidden text-ellipsis text-base whitespace-nowrap text-primary-gray lg:text-lg">
        {title}
      </p>
    </Link>
  );
};

export default BlogItem;