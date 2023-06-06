import { useContext } from "react";
import { AppContext } from "../../../../contexts/AppContext";
import { IconContext } from "react-icons";
import { BiCaretDown, BiCaretUp } from "react-icons/bi";

const SearchFilter = ({ mainState, stateFunc, secStateFunc, bodyFunc, value, valueFunc, filteredItem }) => {
  const { isDark } = useContext(AppContext)

  const dropFunc = (state) => {
    let result;
    state ? (result = true) : (result = false);

    console.log(result);
    return result;
  };

  return (
    <div>
      <button
        onClick={() => {
          stateFunc(!mainState);
          secStateFunc(false);
          bodyFunc(dropFunc(!mainState));
        }}
        className={`flex items-center gap-x-2 px-3 py-2 rounded-md ${
          isDark
            ? "text-secondary bg-dark-green"
            : "text-primary-gray bg-primary"
        } transition-all duration-300`}
      >
        <span>{value}</span>
        <IconContext.Provider value={{ className: "text-base" }}>
          {mainState ? <BiCaretUp /> : <BiCaretDown />}
        </IconContext.Provider>
      </button>

      {/* Dropdown */}
      <div
        className={`bg-primary absolute flex flex-wrap justify-center gap-3 ${
          mainState
            ? "w-full h-fit left-0 translate-x-0 px-2 py-3 mt-2 overflow-auto"
            : "w-0 h-0 m-0 left-1/2 -translate-x-1/2 overflow-hidden"
        } rounded-md transition-all duration-200`}
      >
        {
          mainState ? 
            filteredItem.map((filter) => (
              <button
                onClick={(e) => valueFunc(e.target.value)}
                className={`inline-block w-fit p-2 text-primary-gray rounded-md bg-[#f1f1f11a] active:bg-[#f1f1f140]`}
                key={filter}
                value={filter}
              >
                {filter}
              </button>
            ))
          : null
        }
      </div>
    </div>
  );
};

export default SearchFilter;