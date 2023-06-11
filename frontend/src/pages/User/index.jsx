import React, { useContext, useEffect, useState } from "react";
import { Mobile, Navbar } from "../../components/navbar";
import { AppContext } from "../../contexts/AppContext";
import { TopNav } from "../../components/navbar/non-mobile";
import { Link, useNavigate, useParams } from "react-router-dom";
import InfoPage from "../InfoPage";
import axios from "axios";
import { toastError } from "../../hooks/useToast";
import { IconContext } from "react-icons";
import {
  BiEnvelope,
  BiKey,
  BiLogOut,
  BiPhone,
  BiUser,
  BiUserPlus,
} from "react-icons/bi";
import Loading from "../Loading";

const User = ({
  screenWidth,
  bodyWidth,
  getNavbarActive,
  bodyMargin,
  screenHeight,
}) => {
  const { isDark, authStates } = useContext(AppContext);
  const { authState, setAuthState } = authStates;
  const navigate = useNavigate();

  const { id } = useParams();
  const [isPending, setIsPending] = useState(true);
  const [user, setUser] = useState({});

  const handleLogout = () => {
    localStorage.removeItem("user");
    setAuthState({});

    navigate("/");
  };

  useEffect(() => {
    // Fetch the user's info from the DB
    const url = `https://api-greenhybridempire.onrender.com/api/v1/get/user?id=${id}`;
    const accessToken =
      localStorage.getItem("user") !== null
        ? JSON.parse(localStorage.getItem("user")).accessToken
        : "";

    axios
      .get(url, {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        setUser(response.data.user);
        // Change the document title to the user's name
        document.title = `${response.data.user.name} - Green Hybrid Empire`;

        setIsPending(false);
      })
      .catch((err) => {
        if (err.code === "ERR_NETWORK") {
          toastError("Something went wrong. Try reloading the page.");
        } else {
          // console.log(err);
          toastError(err.response.data.error);
          toastError("Try reloading the page.");
        }
      });
  }, []);

  if (typeof authState.authenticated === "undefined") {
    const location = "/join/login";
    return (
      <InfoPage
        bodyMargin={bodyMargin}
        bodyWidth={bodyWidth}
        getNavbarActive={getNavbarActive}
        screenHeight={screenHeight}
        screenWidth={screenWidth}
        location={location}
      />
    );
  }

  if (isPending) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col md:flex-row md:justify-center">
      {screenWidth < 768 ? (
        <Mobile />
      ) : (
        <Navbar bodyWidth={bodyWidth} navFunc={getNavbarActive} />
      )}

      <main
        className={`w-full pb-16 px-6 ${isDark ? "bg-[#121212]" : "bg-white"} ${
          screenWidth > 767 ? bodyMargin : ""
        } transition-all duration-300`}
        style={{ minHeight: screenHeight + "px" }}
      >
        {screenWidth > 767 ? <TopNav /> : null}

        <div className={`mt-10 ${isDark ? "text-primary-gray" : "text-black"}`}>
          <h1 className="text-2xl">My profile</h1>
          <p className="mb-4 text-[0.9rem]">&nbsp;●&nbsp;{id}</p>
          <div className="mb-12 flex items-center gap-x-6">
            <Link
              to=""
              className={`flex items-center gap-x-2 text-primary rounded-md`}
            >
              <IconContext.Provider value={{ className: "text-3xl" }}>
                <BiUserPlus />
              </IconContext.Provider>
              Edit Profile
            </Link>
          </div>

          <div className="mb-16">
            {/* Name */}
            <div className="relative w-full h-[3.7rem] border-2 rounded-md flex items-center px-4 mb-8">
              <p
                className={`absolute -top-3 ${
                  isDark ? "bg-[#121212]" : "bg-white"
                } px-1 font-medium`}
              >
                Name
              </p>
              <div className="flex items-center gap-x-4 mt-2 text-secondary-gray">
                <IconContext.Provider
                  value={{ className: "text-xl font-bold" }}
                >
                  <BiUser />
                </IconContext.Provider>
                <p className="capitalize">{user.name}</p>
              </div>
            </div>

            {/* Email */}
            <div className="relative w-full h-[3.7rem] border-2 rounded-md flex items-center px-4 mb-8">
              <p
                className={`absolute -top-3 ${
                  isDark ? "bg-[#121212]" : "bg-white"
                } px-1 font-medium`}
              >
                Email
              </p>
              <div className="flex items-center gap-x-4 mt-2 text-secondary-gray">
                <IconContext.Provider
                  value={{ className: "text-xl font-bold" }}
                >
                  <BiEnvelope />
                </IconContext.Provider>
                <p>{user.email}</p>
              </div>
            </div>

            {/* Phone number */}
            <div className="relative w-full h-[3.7rem] border-2 rounded-md flex items-center px-4">
              <p
                className={`absolute -top-3 ${
                  isDark ? "bg-[#121212]" : "bg-white"
                } px-1 font-medium`}
              >
                Phone
              </p>
              <div className="flex items-center gap-x-4 mt-2 text-secondary-gray">
                <IconContext.Provider
                  value={{ className: "text-xl font-bold" }}
                >
                  <BiPhone />
                </IconContext.Provider>
                <p>
                  {typeof user.phone !== "undefined"
                    ? user.phone
                    : "Add a phone number"}
                </p>
              </div>
            </div>
          </div>

          <hr className="border-2 mb-6" />
          <Link
            to=""
            className="flex items-center gap-x-2 w-fit mb-6 border-primary text-primary"
          >
            <IconContext.Provider value={{ className: "text-2xl" }}>
              <BiKey />
            </IconContext.Provider>
            Change Password
          </Link>
          <button
            onClick={handleLogout}
            className="bg-transparent text-red-500 flex items-center gap-x-2"
          >
            <IconContext.Provider value={{ className: "text-2xl" }}>
              <BiLogOut />
            </IconContext.Provider>
            Logout
          </button>
        </div>
      </main>
    </div>
  );
};

export default User;
