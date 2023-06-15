import { useParams } from "react-router-dom";

const SingleItem = () => {
  const { id } = useParams();

  return (
    <div>
      <p>{id}</p>
    </div>
  );
};

export default SingleItem;
