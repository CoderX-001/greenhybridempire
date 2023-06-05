import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../contexts/AppContext";
import { Mobile, Navbar } from "../../components/navbar";
import { ButtonWithIcon, DefaultSubmitButton } from "../../components/ui/buttons";
import { PrimaryInput } from "../../components/form/Inputs";
import { Link } from "react-router-dom";
import googleIcon from "../../assets/google.png";

const Login = ({
  screenWidth,
  screenHeight,
  bodyWidth,
  bodyMargin,
  getNavbarActive,
}) => {
  const { isDark } = useContext(AppContext);

  const [emailuid, setEmailUid] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    setEmailUid("")
    setPassword("")
  }

  useEffect(() => {
    return () => window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const setBodyBackground = () => {
      document.body.style.backgroundColor = isDark ? "#121212" : "#f1f1f1";
    };

    setBodyBackground();
  }, [isDark]);

  return (
    <div className="flex flex-col md:flex-row md:justify-center">
      {screenWidth < 768 ? (
        <Mobile options={false} />
      ) : (
        <Navbar bodyWidth={bodyWidth} navFunc={getNavbarActive} />
      )}

      <main
        className={`w-full ${isDark ? "bg-[#121212]" : "bg-white"} ${
          screenWidth > 767 ? bodyMargin : ""
        } transition-all duration-300`}
        style={{ minHeight: screenHeight + "px" }}
      >
        <div className="relative">
          {/* form */}
          <div className="relative mt-16 pb-8">
            <div className="w-fit mx-auto mb-6">
              <h1 className="text-2xl text-center text-primary font-semibold">
                Hi! Welcome back
              </h1>
              <p className={isDark ? "text-primary-gray" : "text-black"}>Please enter your details.</p>
            </div>

            <ButtonWithIcon
              buttonStyle={
                `flex-row-reverse w-fit mx-auto mb-4 py-2 px-3 rounded-md ${isDark ? "text-primary-gray": "text-black"}
                shadow-md border-[1px] border-primary`
              }
              link="https://www.developer.google.com/"
              text="Log in with Google"
              image={googleIcon}
              imageAlt="Google icon"
              imageStyle="w-6 h-6"
            />

            <div className="w-3/4 mx-auto relative mb-12">
              <div className="w-full h-[1px] bg-gray-400 absolute top-1/2 -translate-y-1/2"></div>
              <p className={`relative w-fit px-2 py-1 rounded-full mx-auto z-[2] text-center ${isDark ? "bg-[#121212] text-primary-gray" : "bg-white text-secondary-gray"}`}>
                or
              </p>
            </div>

            <form onSubmit={handleSubmit} method="POST" className="w-3/4 mx-auto">
              <PrimaryInput
                type="text"
                label="Email or Phone number"
                name="emailuid"
                onChange={(e) => setEmailUid(e.target.value)}
                value={emailuid}
                margin="mb-10"
              />
              <PrimaryInput
                type="password"
                label="Password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                margin="mb-10"
              />
              <DefaultSubmitButton text="Log in" style="w-full py-3 bg-primary text-primary-gray rounded-md mb-6" />
            </form>

            <p className={`text-center ${isDark ? "text-primary-gray" : "text-black"}`}>
              Don&apos;t have an account?{" "}
              <Link to="/join/signup" className="font-medium text-primary">
                Sign up for free
              </Link>
            </p>
          </div>
          {/* side image (for larger screens) */}
        </div>
      </main>
    </div>
  );
};

export default Login;
