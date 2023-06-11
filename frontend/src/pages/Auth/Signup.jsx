import { useContext, useEffect, useState } from "react";
import { Mobile, Navbar } from "../../components/navbar";
import { AppContext } from "../../contexts/AppContext";
import { PrimaryInput } from "../../components/form/Inputs";
import { DefaultSubmitButton } from "../../components/ui/buttons";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { toastError, toastSuccess } from "../../hooks/useToast";
import { ToastContainer } from "react-toastify";
import axios from "axios";
import { IconContext } from "react-icons";
import { BiLoaderAlt } from "react-icons/bi";

const Signup = ({
  screenWidth,
  screenHeight,
  bodyWidth,
  bodyMargin,
  getNavbarActive,
  setBackground,
}) => {
  const [params, setParams] = useSearchParams();
  const { isDark, authStates } = useContext(AppContext);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isPending, setIsPending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPending(true);

    if (name !== "" && email !== "" && password !== "") {
      // Send request to the backend to authenticate the provided details
      const data = { name, email, password };

      axios
        .post("https://api-greenhybridempire.onrender.com/api/v1/auth/signup", data)
        .then((response) => {
          const { setAuthState } = authStates;

          const authStateUser = {
            authenticated: true,
            user: response.data.user,
          };

          setAuthState(authStateUser);
          localStorage.setItem("user", JSON.stringify(response.data.user));

          const location =
            params.get("location") !== null
              ? `/${params.get("location")}`
              : "/";

          setIsPending(false);
          setName("");
          setEmail("");
          setPassword("");
          toastSuccess("Login successful!");

          navigate(location);
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
      if (typeof authState.authenticated !== "undefined")
        return (location.href = "/");
      window.scrollTo(0, 0);
      document.title = "Signup - Green Hybrid Empire";
    };
  }, []);

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
        className={`w-full ${isDark ? "bg-[#121212]" : "bg-white"} ${
          screenWidth > 767 ? bodyMargin : ""
        } transition-all duration-300`}
        style={{ height: screenHeight - 80 + "px" }}
      >
        <div className="relative">
          {/* form */}
          <div className="relative mt-12 pb-8">
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
                type="text"
                label="Name"
                name="name"
                onChange={(e) => setName(e.target.value)}
                value={name}
                margin="mb-10"
              />
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
                  text="Create account"
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
