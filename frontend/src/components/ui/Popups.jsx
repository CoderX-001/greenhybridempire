import { useContext, useEffect, useState } from "react";
import { getAvailableScreenHeight } from "../../functions/functions";
import { IconContext } from "react-icons";
import { FaTimes } from "react-icons/fa";
import { PrimaryInput } from "../form/Inputs";
import { ButtonWithIcon } from "./buttons";
import { BiSearch } from "react-icons/bi";
import { AppContext } from "../../contexts/AppContext";

export const SearchPopup = () => {
  const { searchState } = useContext(AppContext);
  const [screenHeight, setScreenHeight] = useState(getAvailableScreenHeight());
  window.addEventListener("resize", () =>
    setScreenHeight(getAvailableScreenHeight())
  );

  const [inputValue, setInputValue] = useState("");
  const { searchText, setSearchText, searchActive, setSearchActive } =
    searchState;

  return (
    <div
      className={`blur-bg w-full fixed z-[9999] top-0 left-0 ${searchActive ? "py-6 px-4 overflow-auto" : "p-0 overflow-hidden"}`}
      style={{
        height: searchActive ? screenHeight + "px" : 0,
        background: "rgba(255, 255, 255, 0.2)",
      }}
    >
      <h1>Hello</h1>
    </div>
  );
};
