import { useContext, useEffect } from "react";
import { Mobile } from "../../components/navbar";
import Navbar, { TopNav } from "../../components/navbar/non-mobile";
import { AppContext } from "../../contexts/AppContext";
import BlogIntro from "./components/BlogIntro";
import BlogList from "./components/BlogList";

const Blogs = ({ screenWidth, screenHeight, bodyWidth, bodyMargin, getNavbarActive, setBackground }) => {
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
        } transition-all duration-300`} style={{minHeight: screenHeight + "px"}}
      >
        {screenWidth > 767 ? <TopNav /> : null}

        <BlogIntro screenWidth={screenWidth} bodyMargin={bodyMargin} />

        <BlogList style="mt-16 px-4 flex items-center flex-wrap gap-x-3 gap-y-6" />
      </main>
    </div>
  );
};

export default Blogs;