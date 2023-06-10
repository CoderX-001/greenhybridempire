import User from "../models/_User.js";

const getUser = async (req, res) => {
  const { id } = req.query;
  if (id !== req.user.id)
    return res.status(401).json({ error: "Access denied! Cannot read token." });

  const findUser = await User.findById(id);
  if (!findUser)
    return res.status(400).json({ error: "Cannot find user. Try again." });

  const clientDetails = {
    name: findUser.name,
    email: findUser.email,
    phone: findUser.phone,
  };

  return res.status(200).json({ user: clientDetails });
};

export default getUser;
