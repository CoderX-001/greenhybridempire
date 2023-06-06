import { useContext, useEffect } from "react";
import { Mobile } from "../../components/navbar";
import Navbar, { TopNav } from "../../components/navbar/non-mobile";
import { AppContext } from "../../contexts/AppContext";
import BlogIntro from "./components/BlogIntro";

const Blogs = ({ screenWidth, bodyWidth, bodyMargin, getNavbarActive, setBackground }) => {
  const { isDark } = useContext(AppContext);

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
      >
        {screenWidth > 767 ? <TopNav /> : null}

        <BlogIntro screenWidth={screenWidth} bodyMargin={bodyMargin} />
      </main>
    </div>
  );
};

export default Blogs;