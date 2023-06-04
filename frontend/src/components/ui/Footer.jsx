import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="pb-20 pt-6 px-4 bg-dark-green md:flex md:items-center md:justify-between md:pb-6 md:px-[10%]">
      <div className="flex flex-row items-center justify-between md:flex-row-reverse md:gap-x-6">
        <h1 className="text-2xl text-primary-gray">Work with us!</h1>
        <div className="w-[5rem] h-[5rem] text-sm rounded-full bg-primary-gray text-dark-green flex items-center justify-center md:h-[7rem] md:w-[7rem]">
          <span>Get started</span>
        </div>
      </div>
      <hr className="border-[1px] border-primary-gray my-8 md:hidden" />
      <div className="w-full flex items-center justify-between text-primary-gray px-4 md:w-[21rem]">
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/privacy">Privacy</Link>
        <Link to="/terms">Terms</Link>
      </div>
    </footer>
  );
};

export default Footer;