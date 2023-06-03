import { useContext } from "react";
import { useState } from "react";
import { ThemeContext } from "../../contexts";

export const PrimaryInput = ({ type, label, name, margin }) => {
  const {isDark} = useContext(ThemeContext)
  const [focus, setFocus] = useState(false);

  return (
    <div className={`w-full relative ${margin}`}>
      <label
        htmlFor={name}
        className={`absolute ${
          focus
            ? "-top-7 translate-y-0 ml-0 text-[0.95rem] text-primary"
            : "top-1/2 -translate-y-1/2 ml-4 text-gray-400"
        } z-20 transition-all duration-300 pointer-events-none`}
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        className={`w-full ${isDark ? "bg-[#3e3e3e] text-white" : "bg-white text-black"} py-3 px-4 drop-shadow-lg outline-none rounded-md`}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
    </div>
  );
};

export const TextArea = ({ name, margin, placeholder }) => {
  const { isDark } = useContext(ThemeContext);
  return (
    <div className={`w-full ${margin}`}>
      <textarea
        name={name}
        id={name}
        cols="30"
        rows="10"
        className={`w-full ${
          isDark ? "bg-[#3e3e3e] text-white" : "bg-white text-black"
        } resize-none rounded-md drop-shadow-lg px-4 py-2 outline-none border-[1px] border-transparent focus:border-primary`}
        placeholder={placeholder}
      ></textarea>
    </div>
  );
};
