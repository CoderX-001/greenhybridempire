import Sidebar from "./sidebar";

export { default as TopNav } from "./topNav";

const Navbar = ({navFunc, bodyWidth}) => {
  return (
    <nav className="w-fit">
      <Sidebar navFunc={navFunc} />
    </nav>
  );
};

export default Navbar;