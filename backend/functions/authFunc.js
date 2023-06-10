export const validateEmail = (email) => {
  const atpos = email.indexOf("@");
  const dotpos = email.lastIndexOf(".");

  if (atpos === -1 || dotpos === -1 || atpos > dotpos || dotpos - atpos < 4)
    return false;

  return true;
};

export const checkJWT = (token) => {
  if (typeof token !== "undefined" && token.error) return false;

  return true;
};
