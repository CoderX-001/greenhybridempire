import { Link } from "react-router-dom";
import { posts } from "../../../utils/dummyBlogPosts";
import { useContext, useEffect } from "react";
import Loading from "../../Loading";
import { AppContext } from "../../../contexts/AppContext";

const Post = ({ postID, screenHeight, setBlogName }) => {
  const { isDark } = useContext(AppContext);

  const singlePost = posts.filter((post) => {
    return post.id === postID;
  });

  useEffect(() => {
    setBlogName(singlePost[0].title);
  }, [singlePost, setBlogName]);

  return (
    <div
      className={`${
        isDark ? "bg-[#3e3e3e] text-primary-gray" : "bg-white text-black"
      }`}
      style={{ minHeight: screenHeight + "px" }}
    >
      {singlePost.map((post) => (
        <div key={post.id} className="px-4 pt-6 pb-20">
          <img
            src={post.postImage}
            alt={post.title + "'s image"}
            className="w-full h-[20rem] object-cover rounded-lg mb-4"
          />
          <h1 className="text-2xl font-semibold">{post.title}</h1>
          <p className="text-sm">
            Posted by {post.author}&nbsp;●&nbsp;{post["date-created"]}
          </p>
          <div className="flex items-center gap-x-2 mt-2">
            {post.categories.map((category) => (
              <Link
                to={`/blog/search/${category.replace(" ", "-")}`}
                key={category}
                className="text-sm border-[1px] border-primary px-1 rounded"
              >
                {category}
              </Link>
            ))}
          </div>
          <p className="mt-4">{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Post;