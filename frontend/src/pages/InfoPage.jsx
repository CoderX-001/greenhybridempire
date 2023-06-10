import { Link } from "react-router-dom";
import { Mobile, Navbar } from "../components/navbar";
import { TopNav } from "../components/navbar/non-mobile";
import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

const InfoPage = ({
  screenWidth,
  screenHeight,
  bodyWidth,
  getNavbarActive,
  bodyMargin,
  location,
}) => {
  const { isDark } = useContext(AppContext);

  return (
    <div className="flex flex-col overflow-hidden md:flex-row md:justify-center">
      {screenWidth < 768 ? (
        <Mobile options={false} />
      ) : (
        <Navbar bodyWidth={bodyWidth} navFunc={getNavbarActive} />
      )}

      <main
        className={`w-full px-4 ${isDark ? "bg-[#121212]" : "bg-white"} ${
          screenWidth > 767 ? bodyMargin : ""
        } transition-all duration-300`}
        style={{ minHeight: screenHeight - 80 + "px" }}
      >
        {screenWidth > 767 ? <TopNav /> : null}

        <div className="w-full text-center pt-[35vh]">
          <p className={`mb-6 ${isDark ? "text-primary-gray" : "text-black"}`}>
            To continue, you must log in first.
          </p>
          <Link
            to={location}
            className="bg-primary text-primary-gray px-6 py-3 rounded-lg drop-shadow-lg"
          >
            Log in
          </Link>
        </div>
      </main>
    </div>
  );
};

export default InfoPage;
