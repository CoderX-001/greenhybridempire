import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../contexts/AppContext";
import { Mobile, Navbar } from "../../components/navbar";
import { DefaultSubmitButton } from "../../components/ui/buttons";
import { PrimaryInput } from "../../components/form/Inputs";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toastError, toastSuccess } from "../../hooks/useToast";
import axios from "axios";
import { IconContext } from "react-icons";
import { BiLoaderAlt } from "react-icons/bi";
import Sunset from "../../assets/sunset.jpeg";

const Login = ({
  screenWidth,
  screenHeight,
  bodyWidth,
  bodyMargin,
  getNavbarActive,
  setBackground,
}) => {
  const { isDark, authStates } = useContext(AppContext);
  const [params, setParams] = useSearchParams();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isPending, setIsPending] = useState(false);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPending(true);

    // CHeck if fields are filled
    if (email !== "" && password !== "") {
      // Send request to the backend to authenticate the provided details
      const data = { email, password };

      axios
        .post(
          "https://api-greenhybridempire.onrender.com/api/v1/auth/login",
          /* "http://localhost:3173/api/v1/auth/login",*/
          data
        )
        .then((response) => {
          const { role } = response.data.user;
          const { setAuthState } = authStates;

          const authStateUser = {
            authenticated: true,
            user: response.data.user,
          };

          setAuthState(authStateUser);
          localStorage.setItem("user", JSON.stringify(response.data.user));

          const location =
            params.get("location") !== null
              ? "/" + params.get("location")
              : "/";

          const redirect = role === "admin" ? "/admin" : location;
          setIsPending(false);
          toastSuccess("Login successful!");
          setEmail("");
          setPassword("");

          navigate(redirect);
        })
        .catch((err) => {
          setIsPending(false);
          if (err.code === "ERR_NETWORK") {
            toastError("Something went wrong. Try again.");
          } else {
            toastError(err.response.data.error);
          }
        });
    } else {
      setIsPending(false);
      // Send error message if fields are empty
      const error = "Please fill all empty field!";
      toastError(error);
    }
  };

  useEffect(() => {
    return () => {
      const { authState } = authStates;
      if (typeof authState.authenticated !== "undefined") return navigate("/");
      window.scrollTo(0, 0);
      document.title = "Login - Green Hybrid Empire";
    };
  }, [authStates, navigate]);

  useEffect(() => {
    setBackground(isDark ? "#121212" : "#f1f1f1");
  }, [setBackground, isDark]);

  return (
    <div className="flex flex-col md:flex-row md:justify-center">
      <ToastContainer />
      {screenWidth < 768 ? (
        <Mobile options={false} />
      ) : (
        <Navbar bodyWidth={bodyWidth} navFunc={getNavbarActive} />
      )}

      <main
        className={`w-full overflow-hidden ${
          isDark ? "bg-[#121212]" : "bg-white"
        } ${screenWidth > 767 ? bodyMargin : ""} transition-all duration-300`}
        style={{ minHeight: screenHeight - 80 + "px" }}
      >
        <div className="relative overflow-hidden items-center justify-between md:min-h-screen lg:pl-8 lg:flex">
          {/* form */}
          <div className="relative mt-16 pb-8 md:w-3/4 md:mx-auto md:mt-28 lg:w-[45%] lg:mt-0 lg:pb-0">
            <div className="w-fit mx-auto mb-10">
              <h1 className="text-2xl text-primary font-semibold">
                Hi! Welcome back
              </h1>
              <p className={isDark ? "text-primary-gray" : "text-black"}>
                Please enter your details to continue.
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
                type="password"
                label="Password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                margin="mb-10"
              />
              {!isPending ? (
                <DefaultSubmitButton
                  text="Log in"
                  style="w-full py-3 bg-primary text-primary-gray rounded-md mb-6"
                />
              ) : (
                <button className="w-full py-3 bg-primary text-primary-gray rounded-md mb-6">
                  <IconContext.Provider
                    value={{ className: "w-fit mx-auto text-2xl animate-spin" }}
                  >
                    <BiLoaderAlt />
                  </IconContext.Provider>
                </button>
              )}
            </form>

            <p
              className={`text-center ${
                isDark ? "text-primary-gray" : "text-black"
              }`}
            >
              Don&apos;t have an account?{" "}
              <Link
                to={`/join/signup${
                  params.get("location") !== null
                    ? "?location=" + params.get("location")
                    : ""
                }`}
                className="font-medium text-primary"
              >
                Sign up for free
              </Link>
            </p>
          </div>
          {/* side image (for larger screens) */}
          <div className="hidden h-screen w-[45%] lg:block">
            <div
              className="h-full w-full"
              style={{
                background: `linear-gradient(rgba(51, 177, 96, 1), rgba(51, 177, 96, 1)), url(${Sunset}) no-repeat`,
                backgroundSize: "cover",
                backgroundOrigin: "border-box",
                backgroundPosition: "40% center",
                backgroundBlendMode: "color",
              }}
            ></div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
