import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../contexts/AppContext";
import { Mobile, Navbar } from "../../components/navbar";
import { TopNav } from "../../components/navbar/non-mobile";
import Post from "./components/Post";

const SingleBlog = ({setBackground, screenHeight, screenWidth, bodyWidth, bodyMargin, getNavbarActive}) => {
  const { id } = useParams();
  const {isDark} = useContext(AppContext)

  useEffect(() => {
    return () => window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setBackground(isDark ? "#121212" : "#f1f1f1");
  }, [setBackground, isDark]);

  return (
    <div className="flex flex-col md:flex-row md:justify-center">
      {screenWidth < 768 ? (
        <Mobile />
      ) : (
        <Navbar bodyWidth={bodyWidth} navFunc={getNavbarActive} />
      )}

      <main
        className={`w-full ${
          screenWidth > 767 ? bodyMargin : ""
        } transition-all duration-300`}
        style={{ minHeight: screenHeight + "px" }}
      >
        {screenWidth > 767 ? <TopNav /> : null}

        <Post postID={id} />
      </main>
    </div>
  );
};

export default SingleBlog;
