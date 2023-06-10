import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../contexts/AppContext";
import { Mobile, Navbar } from "../../components/navbar";
import { TopNav } from "../../components/navbar/non-mobile";
import Post from "./components/Post";
import InfoPage from "../InfoPage";
import Loading from "../Loading";

const SingleBlog = ({
  setBackground,
  screenHeight,
  screenWidth,
  bodyWidth,
  bodyMargin,
  getNavbarActive,
}) => {
  const { id } = useParams();
  const { isDark, authStates } = useContext(AppContext);

  const [isPending, setIsPending] = useState(false);
  const [blogName, setBlogName] = useState("");

  const { authState } = authStates;

  useEffect(() => {
    return () => {
      window.scrollTo(0, 0);
      if (typeof authState.authenticated !== "undefined") {
        setIsPending(true);
        setTimeout(() => {
          setIsPending(false);
        }, 3000);
      }
    };
  }, []);

  useEffect(() => {
    setBackground(isDark ? "#121212" : "#f1f1f1");
  }, [setBackground, isDark]);

  useEffect(() => {
    document.title = `${blogName} - Green Hybrid Empire`;
  }, [blogName]);

  if (typeof authState.authenticated === "undefined")
    return (
      <InfoPage
        bodyMargin={bodyMargin}
        bodyWidth={bodyWidth}
        getNavbarActive={getNavbarActive}
        screenHeight={screenHeight}
        screenWidth={screenWidth}
        location={`/join/login?location=blog/${id}`}
      />
    );

  if (isPending) return <Loading />;

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

        <Post
          postID={id}
          screenHeight={screenHeight}
          setBlogName={setBlogName}
        />
      </main>
    </div>
  );
};

export default SingleBlog;
