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
    <Link
      to={link}
      className="text-dark-green bg-primary-gray px-4 py-3 rounded-md shadow-md"
    >
      {text}
    </Link>
  );
};

export const DefaultSubmitButton = ({ func, text, loader, style }) => {
  return (
    <button
      type="submit"
      className={typeof style !== "undefined" ? style : ""}
      onClick={typeof func !== "undefined" ? func : null}
    >
      {typeof text !== "undefined" ? <span>{text}</span> : null}
      {typeof loader !== "undefined" ? loader : null}
    </button>
  );
};

export const ButtonWithIcon = ({
  link,
  buttonStyle,
  text,
  image,
  imageAlt,
  imageStyle,
  icon,
  iconSize,
  func,
  backgroundColor,
  textColor,
  padding,
  borderRadius,
  miscStyle,
}) => {
  return (
    <>
      {typeof link !== "undefined" ? (
        <Link
          to={link}
          className={`${
            typeof buttonStyle !== "undefined" ? buttonStyle : ""
          } ${typeof backgroundColor !== "undefined" ? backgroundColor : ""}  ${
            typeof textColor !== "undefined" ? textColor : ""
          } ${typeof padding !== "undefined" ? padding : ""} ${
            typeof borderRadius !== "undefined" ? borderRadius : ""
          } ${typeof miscStyle !== "undefined" ? miscStyle : ""}`}
        >
          {typeof text !== "undefined" ? <p>{text}</p> : null}
          {typeof icon !== "undefined" ? (
            <IconContext.Provider value={{ className: iconSize }}>
              {icon}
            </IconContext.Provider>
          ) : null}
          {typeof image !== "undefined" ? (
            <img src={image} alt={imageAlt} className={imageStyle} />
          ) : null}
        </Link>
      ) : (
        <button
          onClick={func}
          className={`${typeof buttonStyle !== "undefined" ? buttonStyle : ""}
            ${typeof backgroundColor !== "undefined" ? backgroundColor : ""} 
            ${typeof textColor !== "undefined" ? textColor : ""} 
            ${typeof padding !== "undefined" ? padding : ""} 
            ${typeof borderRadius !== "undefined" ? borderRadius : ""} 
            ${typeof miscStyle !== "undefined" ? miscStyle : ""}
          `}
        >
          {typeof text !== "undefined" ? (
            <p className="text-lg">{text}</p>
          ) : null}
          {typeof icon !== "undefined" ? (
            <IconContext.Provider value={{ className: iconSize }}>
              {icon}
            </IconContext.Provider>
          ) : null}
          {typeof image !== "undefined" ? (
            <img src={image} alt={imageAlt} className={imageStyle} />
          ) : null}
        </button>
      )}
    </>
  );
};
