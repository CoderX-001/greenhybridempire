import { useContext, useEffect, useState } from "react";
import { Mobile } from "../../components/navbar";
import Navbar, { TopNav } from "../../components/navbar/non-mobile";
import { AppContext } from "../../contexts/AppContext";
import BlogIntro from "./components/BlogIntro";
import BlogList from "./components/BlogList";
import { Footer } from "../../components/ui";
import BlogSearchAndFilter from "./components/BlogSearchAndFilter";
import InfoPage from "../InfoPage";
import Loading from "../Loading";

const Blogs = ({
  screenWidth,
  screenHeight,
  bodyWidth,
  bodyMargin,
  getNavbarActive,
  setBackground,
}) => {
  const { isDark, authStates } = useContext(AppContext);

  const [isPending, setIsPending] = useState(false);
  const [itemsDown, setItemsDown] = useState(false);
  const { authState } = authStates;

  useEffect(() => {
    return () => {
      window.scrollTo(0, 0);
      document.title = "Blog - Green Hybrid Empire";

      if (typeof authState.authenticated !== "undefined") {
        /* setIsPending(true);
        setTimeout(() => {
          setIsPending(false);
        }, 3000); */
        console.log(authState)
      }
    };
  }, [authState]);

  useEffect(() => {
    setBackground(isDark ? "#121212" : "#f1f1f1");
  }, [setBackground, isDark]);

  if (isPending) return <Loading />;

  if (typeof authState.authenticated === "undefined")
    return (
      <InfoPage
        bodyMargin={bodyMargin}
        bodyWidth={bodyWidth}
        getNavbarActive={getNavbarActive}
        screenHeight={screenHeight}
        screenWidth={screenWidth}
        location="/join/login?location=blog"
      />
    );

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

        <BlogIntro screenWidth={screenWidth} bodyMargin={bodyMargin} />

        <BlogSearchAndFilter setItemsDown={setItemsDown} />

        <BlogList
          style={`${
            itemsDown ? "mt-40" : "mt-16"
          } transition-all duration-200 px-4 pb-20 flex items-center flex-wrap justify-center gap-x-3 gap-y-6`}
        />

        <Footer />
      </main>
    </div>
  );
};

export default Blogs;