import { useContext } from "react";
import HeroImage from "../../../assets/image3.jpeg";
import { LinkButtonPrimary, LinkButtonSecondary } from "../../../components/ui/buttons";
import { ThemeContext } from "../../../contexts";

const HeroSection = ({ screenHeight }) => {
  const {isDark} = useContext(ThemeContext)

  return (
    <div
      className="w-full px-4 pt-[20%] text-primary-gray relative md:px-6"
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url(${HeroImage}) no-repeat`,
        backgroundSize: "cover",
        height: (screenHeight - (112)) + "px",
      }}
    >
      <p className="font-medium">Let&apos;s grow wealth</p>
      <h1 className="Amita font-semibold text-2xl mb-2 text-primary">
        Proven Resources to grow your farming business
      </h1>
      <p className="mb-8">
        We help small and medium holding farmers to do it properly and
        profitably in Nigeria.
      </p>
      
      {isDark ?
        <LinkButtonPrimary link="/read-more" text="Read more" /> : 
        <LinkButtonSecondary link="/read-more" text="Read more" />
      }
    </div>
  );
};

export default HeroSection;
