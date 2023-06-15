import { SearchPopup } from "../../ui/Popups";
import Sidebar from "./sidebar";

export { default as TopNav } from "./topNav";

const Navbar = ({ navFunc }) => {
  return (
    <nav className="w-fit">
      <Sidebar navFunc={navFunc} />

      <SearchPopup />
    </nav>
  );
};

export default Navbar;
