import { useContext } from "react";
import CTAImage from "../../../assets/image6.jpg";
import { ButtonWithIcon } from "../../../components/ui/buttons";
import { BiRightArrow } from "react-icons/bi";
import { ThemeContext } from "../../../contexts";

const Cta = () => {
  const {isDark} = useContext(ThemeContext)

  return (
    <div className={`w-full ${isDark ? "bg-[#3e3e3e]" : "bg-white"} pb-20 pt-8 px-4`}>
      {/* Image */}
      <div className="w-fit mx-auto relative">
        <img
          src={CTAImage}
          alt="countryside worker planting out field"
          className="w-[12rem] h-[15rem] object-cover drop-shadow-2xl"
          style={{ borderRadius: "100px 50px 100px 60px" }}
        />
        <div
          className={`px-8 py-4 absolute -ml-8 z-20 top-1/2 -translate-y-1/2 rounded-lg shadow-2xl
          overflow-hidden flex items-center justify-center`}
        >
          <div
            className="absolute w-full h-full"
            style={{
              background: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(8px)",
            }}
          ></div>
          <p className={`w-full h-full ml-[6px] ${isDark ? "text-secondary" : "text-white"} relative`}>Join Now</p>
        </div>
      </div>

      <div className="mt-12 w-fit">
        <h2 className={`text-2xl ${isDark ? "text-secondary" : "text-black"} font-semibold`}>
          Thousands of people trust to our agricultural products
        </h2>
        <p className={`mt-6 ${isDark ? "text-primary-gray" : "text-black"}`}>
          Join the amazing Farming that we provide for you and just you.
        </p>
        <div className="flex items-center justify-between py-8 px-8 bg-dark-green rounded-lg drop-shadow-lg mt-6">
          <div className="flex flex-col gap-y-3">
            <div className={`flex flex-col ${isDark ? "text-primary-gray" : "text-white"}`}>
              <span className="font-semibold">5,000+</span>
              <span className="text-sm">People join with us</span>
            </div>
            <div className={`flex flex-col ${isDark ? "text-primary-gray" : "text-white"}`}>
              <span className="font-semibold">20+</span>
              <span className="text-sm">States we deliver to</span>
            </div>
          </div>
          <ButtonWithIcon
            link="/join/login"
            icon={<BiRightArrow />}
            iconSize="text-2xl"
            backgroundColor="bg-secondary"
            textColor={isDark ? "text-dark-green" : "text-white"}
            padding="p-[10px]"
            borderRadius="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Cta;
