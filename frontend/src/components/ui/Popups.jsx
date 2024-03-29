import { useContext, useState } from "react";
import { getAvailableScreenHeight } from "../../functions/functions";
import { IconContext } from "react-icons";
import { FaTimes } from "react-icons/fa";
import { PrimaryInput } from "../form/Inputs";
import { ButtonWithIcon } from "./buttons";
import { BiSearch } from "react-icons/bi";
import { AppContext } from "../../contexts/AppContext";

export const SearchPopup = () => {
  const { isDark, searchState } = useContext(AppContext);
  const [screenHeight, setScreenHeight] = useState(getAvailableScreenHeight());
  window.addEventListener("resize", () =>
    setScreenHeight(getAvailableScreenHeight())
  );

  const [inputValue, setInputValue] = useState("");
  const { searchText, setSearchText, searchActive, setSearchActive } =
    searchState;

  return (
    <div
      className={`blur-bg fixed z-[9999] top-0 left-0 ${
        searchActive
          ? "w-full top-0 left-0 translate-x-0 translate-y-0 overflow-auto"
          : "w-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden"
      } transition-all duration-200`}
      style={{
        height: searchActive ? screenHeight + "px" : 0,
      }}
    >
      <div className="blur-bg-content absolute top-0 left-0 px-4 py-6">
        <div className="flex items-center justify-end relative">
          <button
            onClick={() => {
              setInputValue("");
              setSearchText("");
              setSearchActive(false);
            }}
            className={`p-1 rounded-full ${
              isDark
                ? "text-primary-gray active:bg-gray-400"
                : "text-black active:bg-gray-200"
            } `}
          >
            <IconContext.Provider value={{ className: "text-2xl lg:text-3xl" }}>
              <FaTimes />
            </IconContext.Provider>
          </button>
        </div>

        <div className="mt-6 w-full mx-auto md:w-3/4">
          <form className="relative" onSubmit={(e) => e.preventDefault()}>
            <PrimaryInput
              type="text"
              name="search"
              placeholder="What are you looking for?"
              padding="py-3 pl-4 pr-16"
              onChange={(e) => setInputValue(e.target.value)}
              value={inputValue}
            />
            <ButtonWithIcon
              icon={<BiSearch />}
              iconSize="text-xl"
              backgroundColor="bg-primary"
              textColor="text-white"
              padding="px-4 py-3"
              borderRadius="rounded-lg"
              miscStyle="absolute top-1/2 -translate-y-1/2 right-1"
              func={() => setSearchText(inputValue)}
            />
          </form>
        </div>

        <div className="mt-6 relative">
          {searchText !== "" ? (
            <p className="text-2xl text-center text-[#aaa] drop-shadow-lg shadow-black">
              Search results for &quot;{searchText}&quot;
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
};
