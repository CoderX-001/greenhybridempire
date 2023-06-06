import { useParams } from "react-router-dom";

const SingleBlog = () => {
  const { id } = useParams()

  return (
    <div>
      <p>{ id }</p>
    </div>
  );
};

export default SingleBlog;