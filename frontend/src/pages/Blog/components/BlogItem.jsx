const BlogItem = ({post}) => {
  return (
    <div key={post.id}>
      <img src={post.postImage} alt={post.title.substr(0, 17).trim()+ "... image"} />
    </div>
  );
};

export default BlogItem;