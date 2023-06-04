import { useContext } from "react";
import { PrimaryInput, TextArea } from "../../../components/form/Inputs";
import { ButtonWithIcon } from "../../../components/ui/buttons";
import { FaFacebook, FaInstagram, FaPaperPlane, FaTwitter } from "react-icons/fa";
import { AppContext } from "../../../contexts/AppContext";
import ContactImage from "../../../assets/image4.jpeg"
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";

const ContactSection = () => {
  const { isDark } = useContext(AppContext);

  return (
    <div
      className="w-full pt-8 pb-20 px-4"
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${ContactImage}) no-repeat`,
        backgroundSize: "cover"
      }}
    >
      <h2 className="text-center text-2xl text-secondary">Contact us</h2>
      <p
        className="text-primary-gray text-[0.9rem] text-center mx-5 mb-12"
      >
        For more inquiry or complaint, you can contact us via email.
      </p>
      <div className="px-8">
        <form method="POST" className="md:w-1/2 md:mx-auto">
          <PrimaryInput
            type="email"
            name="email"
            label="Your email address"
            margin="mb-6"
          />
          <TextArea
            name="subject"
            margin="mb-6"
            placeholder="Your message body..."
          />
          <ButtonWithIcon
            text="Send mail"
            icon={<FaPaperPlane />}
            iconSize="text-xl"
            backgroundColor={isDark ? "bg-secondary" : "bg-primary"}
            textColor={isDark ? "text-dark-green" : "text-primary-gray"}
            borderRadius="rounded-md"
            padding="px-4 py-2"
          />
        </form>
        <hr className="mt-10 border-2 border-primary-gray rounded-full" />
        <p className="text-primary-gray text-center my-6">OR</p>
        <div className="flex items-center justify-center gap-x-7">
          <Link to="https://www.facebook.com/">
            <IconContext.Provider value={{className: "text-primary-gray text-2xl"}}>
              <FaFacebook />
            </IconContext.Provider>
          </Link>
          <Link to="https://www.instagram.com/">
            <IconContext.Provider value={{className: "text-primary-gray text-2xl"}}>
              <FaInstagram />
            </IconContext.Provider>
          </Link>
          <Link to="https://www.twitter.com/">
            <IconContext.Provider value={{className: "text-primary-gray text-2xl"}}>
              <FaTwitter />
            </IconContext.Provider>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
