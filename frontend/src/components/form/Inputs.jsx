import { useContext } from "react";
import { useState } from "react";
import { AppContext } from "../../contexts/AppContext";

export const PrimaryInput = ({ type, label, name, margin, padding, placeholder, onChange, value }) => {
  const {isDark} = useContext(AppContext)
  const [focus, setFocus] = useState(false);

  return (
    <div className={`w-full relative ${margin}`}>
      {label ? <label
        htmlFor={name}
        className={`absolute ${focus
            ? "-top-7 translate-y-0 ml-0 text-[0.95rem] text-primary"
            : "top-1/2 -translate-y-1/2 ml-4 text-gray-400"
          } z-20 transition-all duration-300 pointer-events-none`}
      >
        {label}
      </label> : null}
      <input
        type={type}
        name={name}
        placeholder={placeholder ? placeholder : ""}
        className={
          `w-full 
          ${isDark ? "bg-[#3e3e3e] text-white" : "bg-white text-black"} 
          ${typeof padding !== "undefined" ? padding : "py-3 px-4"} 
          drop-shadow-lg outline-none rounded`
        }
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onChange={typeof onChange !== "undefined" ? onChange : null}
        autoComplete="off"
        value={value}
      />
    </div>
  );
};

export const TextArea = ({ name, margin, placeholder }) => {
  const { isDark } = useContext(AppContext);
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
