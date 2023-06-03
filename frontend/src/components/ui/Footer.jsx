import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="pb-20 pt-6 px-4 bg-primary">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl text-primary-gray">Work with us!</h1>
        <div className="w-[5rem] h-[5rem] text-sm rounded-full bg-primary-gray text-dark-green flex items-center justify-center">
          <span>Get started</span>
        </div>
      </div>
      <hr className="border-[1px] border-primary-gray my-8" />
      <div className="w-full flex items-center justify-between text-primary-gray px-4">
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/privacy">Privacy</Link>
        <Link to="/terms">Terms</Link>
      </div>
    </footer>
  );
};

export default Footer;