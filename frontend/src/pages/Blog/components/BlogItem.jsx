import { Link } from "react-router-dom";

const BlogItem = ({ post }) => {
  console.log(post.categories);

  return (
    <div className="w-[15rem] bg-white drop-shadow-md overflow-hidden rounded-md pb-4">
      <img
        src={post.postImage}
        alt={post.title.substr(0, 17).trim() + "... image"}
        className="w-full h-[12rem] object-cover mb-2"
      />

      {/* Content */}
      <div className="px-2">
        {/* Category */}
        <div className="flex items-center gap-x-2 mb-3">
          {post.categories.map((category) => (
            <Link
              to={`/blog/search/${category}`}
              key={category}
              className="text-sm -mb-1 border-[1px] border-primary px-1 rounded"
            >
              {category}
            </Link>
          ))}
        </div>

        {/* Title */}
        <h2 className="w-full font-medium overflow-hidden text-ellipsis whitespace-nowrap">
          {post.title}
        </h2>
        <p className="multiline-break">{ post.content }</p>
      </div>
    </div>
  );
};

export default BlogItem;
