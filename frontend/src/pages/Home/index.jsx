import { useEffect, useState } from "react";
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
import Loading from "../Loading";

const Home = ({
  screenWidth,
  screenHeight,
  bodyWidth,
  bodyMargin,
  getNavbarActive,
  setBackground,
}) => {
  const { isDark } = useContext(AppContext);

  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    return () => {
      window.scrollTo(0, 0);
      document.title = "Green Hybrid Empire LTD";

      /* setTimeout(() => {
        setIsPending(false);
      }, 3000);*/
    };
  }, []);

  useEffect(() => {
    setBackground(isDark ? "#121212" : "#f1f1f1");
  }, [setBackground, isDark]);

  if (isPending) return <Loading />;

  return (
    <div className="flex flex-col md:flex-row md:justify-center">
      {screenWidth < 768 ? (
        <Mobile />
      ) : (
        <Navbar
          bodyWidth={bodyWidth}
          screenHeight={screenHeight}
          navFunc={getNavbarActive}
        />
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
