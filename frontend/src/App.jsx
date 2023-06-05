import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppContextProvider from "./contexts/AppContext";
import Home from "./pages/Home";
import { Login } from "./pages/Auth";
import {
  getAvailableScreenHeight,
  getAvailableScreenWidth,
} from "./functions/functions";
import { useState } from "react";

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
      <BrowserRouter>
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
                />
              }
            />
          </Routes>
        </AppContextProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
