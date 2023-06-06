import { useEffect } from "react";
import { Mobile, Navbar } from "../../components/navbar";
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

const Home = ({
  screenWidth,
  screenHeight,
  bodyWidth,
  bodyMargin,
  getNavbarActive,
  setBackground,
}) => {
  const { isDark } = useContext(AppContext);

  useEffect(() => {
    return () => window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    setBackground(isDark ? "#121212" : "#f1f1f1")
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
