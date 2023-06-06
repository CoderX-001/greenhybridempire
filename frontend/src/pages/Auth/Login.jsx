import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../contexts/AppContext";
import { Mobile, Navbar } from "../../components/navbar";
import { DefaultSubmitButton } from "../../components/ui/buttons";
import { PrimaryInput } from "../../components/form/Inputs";
import { Link } from "react-router-dom";

const Login = ({
  screenWidth,
  screenHeight,
  bodyWidth,
  bodyMargin,
  getNavbarActive,
  setBackground
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
    setBackground(isDark ? "#121212" : "#f1f1f1");
  }, [setBackground, isDark]);

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
            <div className="w-fit mx-auto mb-10">
              <h1 className="text-2xl text-primary font-semibold">
                Hi! Welcome back
              </h1>
              <p className={isDark ? "text-primary-gray" : "text-black"}>Please enter your details to continue.</p>
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
