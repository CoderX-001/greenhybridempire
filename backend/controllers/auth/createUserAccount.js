import bcrypt from "bcryptjs";

import User from "../../models/_User.js";
import { signAccessToken, signRefreshToken } from "../../utils/jwt.js";
import { checkJWT, validateEmail } from "../../functions/authFunc.js";

const createUserAccount = async (req, res) => {
  const { name, email, password } = req.body;
  const role = "user";

  // Empty field validation
  if (!email || !name || !password)
    return res
      .status(400)
      .json({ error: "Please fill all the provided fields!" });

  // Email validation
  if (!validateEmail(email))
    return res.status(400).json({ error: "Please use a valid email!" });

  // Check if user exists in the database
  const user = await User.findOne({ email });
  if (user) return res.status(400).json({ error: "User already exists." });

  // Create salt and hash for password
  const salt = await bcrypt.genSalt(10);
  if (!salt)
    return res.status(500).json({ error: "Something went wrong. Try again." });

  const hash = await bcrypt.hash(password, salt);
  if (!hash)
    return res.status(500).json({ error: "Something went wrong. Try again." });

  const newUser = new User({
    name,
    email,
    password: hash,
    role,
  });

  // Get the jwt token for the user
  const tokenUser = { id: newUser._id };
  const accessToken = await signAccessToken(tokenUser);
  if (!checkJWT(accessToken))
    return res.status(500).json({ error: "Something went wrong. Try again." });

  const refreshToken = await signRefreshToken(tokenUser);
  if (!checkJWT(refreshToken))
    return res.status(500).json({ error: "Something went wrong. Try again." });

  // Save the user to the database
  const saveUser = await newUser.save();
  if (!saveUser)
    return res.status(500).json({ error: "Something went wrong. Try again." });

  const clientUserDetails = {
    id: saveUser._id,
    name: saveUser.name,
    accessToken,
    refreshToken,
    role: saveUser.role,
  };

  // Send the required user details to the client
  return res.status(201).json({ user: clientUserDetails });
};

export default createUserAccount;
