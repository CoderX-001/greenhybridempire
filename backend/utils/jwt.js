import jwt from "jsonwebtoken";
import User from "../models/_User.js";

export const signAccessToken = async (user) => {
  const payload = user;
  const secretKey = process.env.ACCESS_TOKEN_SECRET;
  const option = {
    expiresIn: "1y",
    issuer: "greenhybridempire",
    audience: [user],
  };

  try {
    const token = jwt.sign(payload, secretKey, option);

    return token;
  } catch (err) {
    const errorInfo = {
      error: true,
      message: err,
    };

    console.log(errorInfo);
    return errorInfo;
  }
};

export const verifyAccessToken = async (req, res, next) => {
  let token;

  if (!req.headers["authorization"])
    return res.status(401).json({ error: "Access denied! Not authorized." });

  const authHeader = req.headers["authorization"];
  token = authHeader.split(" ")[1];

  try {
    const verify = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.user = { id: verify.id };

    next();
  } catch (err) {
    console.log(err);
    return res.status(403).json({ error: "Access denied!" });
  }

  if (!token)
    return res.status(401).json({ error: "Access denied! No token." });
};

export const signRefreshToken = async (user) => {
  const payload = user;
  const secretKey = process.env.REFRESH_TOKEN_SECRET;
  const option = {
    expiresIn: "1y",
    issuer: "greenhybridempire",
    audience: [user],
  };

  try {
    const token = jwt.sign(payload, secretKey, option);

    return token;
  } catch (err) {
    const errorInfo = {
      error: true,
      message: err,
    };

    console.log(errorInfo);
    return errorInfo;
  }
};
