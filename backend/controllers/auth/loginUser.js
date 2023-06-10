import bcrypt from "bcryptjs";

import { checkJWT, validateEmail } from "../../functions/authFunc.js";
import User from "../../models/_User.js";
import { signAccessToken, signRefreshToken } from "../../utils/jwt.js";

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  // Check if values are empty
  if (!email || !password)
    return res.status(400).json({ error: "Fields cannot be empty!" });

  // Validate email
  if (!validateEmail(email))
    return res.status(400).json({ error: "Please use a valid email." });

  // Check if user exists in the database
  const user = await User.findOne({ email });
  if (!user)
    return res.status(400).json({ error: "Invalid email or password." });

  // Check if password in the db matches the client password
  const verifyPassword = await bcrypt.compare(password, user.password);
  if (!verifyPassword)
    return res.status(400).json({ error: "Invalid email or password." });

  // Create user JWT
  const tokenUser = { id: user._id };
  const accessToken = await signAccessToken(tokenUser);
  if (!checkJWT(accessToken))
    return res.status(500).json({ error: "Something went wrong. Try again." });

  const refreshToken = await signRefreshToken(tokenUser);
  if (!checkJWT(refreshToken))
    return res.status(500).json({ error: "Something went wrong. Try again." });

  // Create and send required user details to the client
  const clientUserDetails = {
    id: user._id,
    name: user.name,
    accessToken,
    refreshToken,
    role: user.role,
  };

  return res.status(200).json({ user: clientUserDetails });
};

export default loginUser;
