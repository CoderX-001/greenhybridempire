import { useContext, useEffect, useState } from "react";
import { Mobile, Navbar } from "../../components/navbar";
import { AppContext } from "../../contexts/AppContext";
import { PrimaryInput } from "../../components/form/Inputs";
import { DefaultSubmitButton } from "../../components/ui/buttons";
import { Link } from "react-router-dom";

const Signup = ({screenWidth, screenHeight, bodyWidth, bodyMargin, getNavbarActive, setBackground}) => {
  const { isDark } = useContext(AppContext);

  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
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
                Create an account
              </h1>
              <p className={isDark ? "text-primary-gray" : "text-black"}>
                Sign up today to get unique access.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              method="POST"
              className="w-3/4 mx-auto"
            >
              <PrimaryInput
                type="email"
                label="Email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                margin="mb-10"
              />
              <PrimaryInput
                type="tel"
                label="Phone number"
                name="phone"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
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
              <DefaultSubmitButton
                text="Create account"
                style="w-full py-3 bg-primary text-primary-gray rounded-md mb-6"
              />
            </form>

            <p
              className={`text-center ${
                isDark ? "text-primary-gray" : "text-black"
              }`}
            >
              Got an existing account?{" "}
              <Link to="/join/login" className="font-medium text-primary">
                Log in
              </Link>
            </p>
          </div>
          {/* side image (for larger screens) */}
        </div>
      </main>
    </div>
  );
};

export default Signup;