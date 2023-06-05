import { useContext, useEffect } from "react";
import { AppContext } from "../../contexts/AppContext";
import { Mobile, Navbar } from "../../components/navbar";

const Login = ({ screenWidth, bodyWidth, bodyMargin, getNavbarActive }) => {
  const { isDark } = useContext(AppContext);

  useEffect(() => {
    console.log(isDark);
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
      ></main>
    </div>
  );
};

export default Login;