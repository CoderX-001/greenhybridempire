import { Link } from "react-router-dom";
import { Mobile, Navbar } from "../components/navbar";
import { TopNav } from "../components/navbar/non-mobile";
import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

const ErrorPage = ({
  screenWidth,
  screenHeight,
  bodyMargin,
  bodyWidth,
  getNavbarActive,
}) => {
  const { isDark } = useContext(AppContext);

  return (
    <div className="flex flex-col md:flex-row md:justify-center">
      {screenWidth < 768 ? (
        <Mobile />
      ) : (
        <Navbar bodyWidth={bodyWidth} navFunc={getNavbarActive} />
      )}

      <main
        className={`w-full ${isDark ? "bg-[#121212]" : "bg-white"} ${
          screenWidth > 767 ? bodyMargin : ""
        } transition-all duration-300`}
      >
        {screenWidth > 767 ? <TopNav /> : null}

        <div
          className={`${
            isDark
              ? "bg-[#121212] text-primary-gray"
              : "bg-primary-gray text-black"
          } grid place-content-center`}
          style={{ height: screenHeight - 80 + "px" }}
        >
          <h1 className="text-center text-2xl mb-3">
            This page does not exist!
          </h1>
          <Link
            to="/"
            className="text-secondary bg-dark-green w-fit mx-auto px-6 py-3 rounded-lg shadow-md"
          >
            Go to home
          </Link>
        </div>
      </main>
    </div>
  );
};

export default ErrorPage;