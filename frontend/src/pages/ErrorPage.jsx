import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="grid place-content-center">
      <h1>Page not found!</h1>
      <Link to="/" className="text-primary">Go to home</Link>
    </div>
  );
};

export default ErrorPage;