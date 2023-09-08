import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../../contexts/AppContext";

const BlogItem = ({ post }) => {
  const { isDark } = useContext(AppContext)

  return (
    <div
      className={`w-[15rem] ${
        isDark ? "bg-[#3e3e3e] text-primary-gray" : "bg-white text-black"
      } shadow-lg overflow-hidden rounded-md pb-4`}
    >
      <img
        src={post.postImage}
        alt={post.title + "'s image"}
        className="w-full h-[9rem] object-cover mb-2"
      />

      {/* Content */}
      <div className="px-2">
        <p className="text-[0.75rem] mb-1">
          {post.author}&nbsp;●&nbsp;{post["date-created"]}
        </p>

        {/* Title */}
        <Link
          to={`/blog/${post.id}`}
          className={`block w-full ${
            isDark ? "text-primary" : "text-black"
          } font-semibold overflow-hidden text-ellipsis whitespace-nowrap`}
        >
          {post.title}
        </Link>
        <p className="multiline-break text-[0.9rem]">{post.content}</p>
      </div>

      {/* Category */}
      <div className="flex items-center gap-x-2 mt-3 px-2">
        {post.categories.map((category) => (
          <Link
            to={`/blog/search/${category}`}
            key={category}
            className="text-[0.7rem] border-[1px] border-primary px-1 rounded"
          >
            {category}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogItem;
