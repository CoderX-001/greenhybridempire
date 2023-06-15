import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import AppContextProvider from "./contexts/AppContext";
import {
  Admin,
  Blogs,
  Cart,
  Home,
  Login,
  Shop,
  Signup,
  SingleBlog,
  User,
} from "./pages";
import {
  getAvailableScreenHeight,
  getAvailableScreenWidth,
} from "./functions/functions";
import ErrorPage from "./pages/ErrorPage";

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

    !bodyWidth ? setBodyMargin("ml-[30%]") : setBodyMargin("ml-20");
    // bodyMargin === "ml-20" ? setBodyMargin("ml-[30%]") : setBodyMargin("ml-20");
  };

  return (
    <div className="App" style={{ backgroundColor: background }}>
      <AppContextProvider>
        <Routes>
          {/* HOME PAGE */}
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

          {/* SHOP PAGE */}
          <Route
            path="/shop"
            element={
              <Shop
                screenWidth={screenWidth}
                screenHeight={screenHeight}
                bodyWidth={bodyWidth}
                bodyMargin={bodyMargin}
                getNavbarActive={getNavbarActive}
              />
            }
          />

          {/* LOGIN PAGE */}
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

          {/* SIGNUP PAGE */}
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

          {/* "ALL BLOGS" PAGE */}
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

          {/* "SINGLE BLOG" PAGE */}
          <Route
            path="/blog/:id"
            element={
              <SingleBlog
                setBackground={setBackground}
                screenWidth={screenWidth}
                bodyWidth={bodyWidth}
                bodyMargin={bodyMargin}
                screenHeight={screenHeight}
                getNavbarActive={getNavbarActive}
              />
            }
          />

          {/* CART PAGE */}
          <Route
            path="/cart"
            element={
              <Cart
                setBackground={setBackground}
                screenWidth={screenWidth}
                screenHeight={screenHeight}
                bodyMargin={bodyMargin}
                bodyWidth={bodyWidth}
                getNavbarActive={getNavbarActive}
              />
            }
          />

          {/* USER PAGE */}
          <Route
            path="/profile/:id"
            element={
              <User
                screenWidth={screenWidth}
                screenHeight={screenHeight}
                getNavbarActive={getNavbarActive}
                bodyMargin={bodyMargin}
                bodyWidth={bodyWidth}
              />
            }
          />

          {/* ADMIN PAGE */}
          <Route path="/admin" element={<Admin />} />

          {/* 404 PAGE */}
          <Route
            path="*"
            element={
              <ErrorPage
                screenWidth={screenWidth}
                screenHeight={screenHeight}
                bodyWidth={bodyWidth}
                bodyMargin={bodyMargin}
                getNavbarActive={getNavbarActive}
              />
            }
          />
        </Routes>
      </AppContextProvider>
    </div>
  );
};

export default App;
