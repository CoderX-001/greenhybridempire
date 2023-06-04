import { IconContext } from "react-icons";
import { Link } from "react-router-dom";

export const LinkButtonPrimary = ({ link, text }) => {
  return (
    <Link
      to={link}
      className="text-[#121212] bg-secondary px-4 py-3 rounded-md shadow-md"
    >
      {text}
    </Link>
  );
};

export const LinkButtonSecondary = ({ link, text }) => {
  return (
    <Link to={link} className="text-dark-green bg-primary-gray px-4 py-3 rounded-md shadow-md">
      {text}
    </Link>
  );
};

export const ButtonWithIcon = ({link, text, icon, iconSize, func, backgroundColor, textColor, padding, borderRadius, miscStyle}) => {
  return (
    <>
      {link ? (
        <Link
          to={link}
          className={`${
            typeof text !== "undefined" ? "flex items-center gap-x-3" : ""
          } ${backgroundColor} ${textColor} ${padding} ${borderRadius}`}
        >
          {typeof text !== "undefined" ? <p>{text}</p> : null}
          <IconContext.Provider value={{ className: iconSize }}>
            {icon}
          </IconContext.Provider>
        </Link>
      ) : (
        <button
          onClick={func}
          className={`${
            typeof text !== "undefined" ? "flex items-center gap-x-3" : ""
          } ${backgroundColor} ${textColor} ${padding} ${borderRadius} ${typeof miscStyle !== "undefined" ? miscStyle : ""}`}
        >
          {typeof text !== "undefined" ? <p className="text-lg">{text}</p> : null}
          {typeof icon !== "undefined" ? <IconContext.Provider value={{ className: iconSize }}>
            {icon}
          </IconContext.Provider> : ""}
        </button>
      )}
    </>
  );
}
