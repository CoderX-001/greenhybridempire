import { useEffect, useState } from "react";
import { Mobile, Navbar } from "../../components/navbar";
import {
  getAvailableScreenHeight,
  getAvailableScreenWidth,
} from "../../functions/functions";
import { TopNav } from "../../components/navbar/non-mobile";
import {
  AboutSection,
  CTA,
  ContactSection,
  HeroSection,
  ProductCategory,
  ShowBlogs,
} from "./components";
import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import { Footer } from "../../components/ui";

const Home = () => {
  const { isDark } = useContext(AppContext);

  const [screenWidth, setScreenWidth] = useState(getAvailableScreenWidth());
  const [screenHeight, setScreenHeight] = useState(getAvailableScreenHeight());
  const [bodyWidth, setBodyWidth] = useState(false);
  const [bodyMargin, setBodyMargin] = useState("ml-20");
  window.addEventListener("resize", () => {
    setScreenWidth(getAvailableScreenWidth());
    setScreenHeight(getAvailableScreenHeight());
  });

  const getNavbarActive = (nav) => {
    setBodyWidth(nav);
    if (bodyMargin === "ml-20") {
      setBodyMargin("ml-[30%]");
    } else {
      setBodyMargin("ml-20");
    }
  };

  useEffect(() => {
    const setBodyBackground = () => {
      document.body.style.backgroundColor = isDark ? "#121212" : "#f1f1f1";
    };

    setBodyBackground();
  }, [isDark]);

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

        <HeroSection screenHeight={screenHeight} />

        <AboutSection />

        <ProductCategory />

        <CTA />

        <ShowBlogs />

        <ContactSection />

        <Footer />
      </main>
    </div>
  );
};

export default Home;
