import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import AppContextProvider from "./contexts/AppContext";
import { Blogs, Home, Login, Signup, SingleBlog } from "./pages";
import {
  getAvailableScreenHeight,
  getAvailableScreenWidth,
} from "./functions/functions";

const App = () => {
  const [screenWidth, setScreenWidth] = useState(getAvailableScreenWidth());
  const [screenHeight, setScreenHeight] = useState(getAvailableScreenHeight());
  const [bodyWidth, setBodyWidth] = useState(false);
  const [bodyMargin, setBodyMargin] = useState("ml-20");
  const [background, setBackground] = useState("#f1f1f1");

  window.addEventListener("resize", () => {
    setScreenWidth(getAvailableScreenWidth());
    setScreenHeight(getAvailableScreenHeight());
  });

  const getNavbarActive = (nav) => {
    setBodyWidth(nav);

    bodyWidth ? setBodyMargin("ml-[30%]") : setBodyMargin("ml-20");
  };

  return (
    <div className="App" style={{ backgroundColor: background }}>
      <AppContextProvider>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Home
                screenWidth={screenWidth}
                screenHeight={screenHeight}
                bodyWidth={bodyWidth}
                bodyMargin={bodyMargin}
                getNavbarActive={getNavbarActive}
                setBodyMargin={setBodyMargin}
                setBackground={setBackground}
              />
            }
          />
          <Route
            path="/join/login"
            element={
              <Login
                screenWidth={screenWidth}
                screenHeight={screenHeight}
                bodyWidth={bodyWidth}
                bodyMargin={bodyMargin}
                getNavbarActive={getNavbarActive}
                setBackground={setBackground}
              />
            }
          />
          <Route
            path="/join/signup"
            element={
              <Signup
                screenWidth={screenWidth}
                screenHeight={screenHeight}
                bodyWidth={bodyWidth}
                bodyMargin={bodyMargin}
                getNavbarActive={getNavbarActive}
                setBackground={setBackground}
              />
            }
          />
          <Route
            path="/blog"
            element={
              <Blogs
                screenWidth={screenWidth}
                screenHeight={screenHeight}
                bodyWidth={bodyWidth}
                bodyMargin={bodyMargin}
                getNavbarActive={getNavbarActive}
                setBackground={setBackground}
              />
            }
          />
          <Route path="/blog/:id" element={<SingleBlog setBackground={setBackground} />} />
        </Routes>
      </AppContextProvider>
    </div>
  );
};

export default App;
