import { useState } from "react";
import { posts } from "../../../utils/dummyBlogPosts";
import BlogItem from "./BlogItem";
import { IconContext } from "react-icons";
import { BiSad } from "react-icons/bi";
import { FaRegSadTear } from "react-icons/fa";
import { HiEmojiSad } from "react-icons/hi";

const BlogList = ({style}) => {
  const [blogPosts, setBlogPosts] = useState(posts)

  // Handle each of the blog posts
  const blogPost = blogPosts.map(post => {
    <BlogItem post={post} />
  }) 

  return (
    <div className={style}>
      {
        !blogPosts.length ? blogPost : (
          <div className="flex flex-col items-center">
            <span className="mb-6">
              <IconContext.Provider value={{className: "text-8xl text-secondary-gray"}}>
                {/* <FaRegSadTear /> */}
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