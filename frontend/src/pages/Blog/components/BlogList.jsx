import { useState } from "react";
import { posts } from "../../../utils/dummyBlogPosts";
import BlogItem from "./BlogItem";
import { IconContext } from "react-icons";
import { HiEmojiSad } from "react-icons/hi";

const BlogList = ({style}) => {
  const [blogPosts, setBlogPosts] = useState(posts)

  return (
    <div className={style}>
      {
        blogPosts.length ? 
          blogPosts.map(post => (
            <BlogItem post={post} key={post.id} />
          ))
        : (
          <div className="flex flex-col items-center">
            <span className="mb-6">
              <IconContext.Provider value={{className: "text-8xl text-secondary-gray"}}>
                <HiEmojiSad />
              </IconContext.Provider>
            </span>
            <h1 className="text-3xl text-red-500">Sorry!</h1>
            <p className="text-secondary-gray">No <span className="text-primary">blog posts</span> available at the moment!</p>
          </div>
        )
      }
    </div>
  );
};

export default BlogList;