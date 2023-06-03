import { useContext } from "react"
import AboutImage from "../../../assets/image2.jpeg"
import { ThemeContext } from "../../../contexts"

const AboutSection = () => {
  const {isDark} = useContext(ThemeContext)

  return (
    <div
      className={`flex flex-col ${
        isDark ? "bg-[#3e3e3e]" : "bg-white"
      } px-4 pb-20 md:flex-row md:px-6`}
    >
      <div
        className="w-[14rem] h-[18rem] mx-auto -mt-[4rem] drop-shadow-2xl"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${AboutImage}) no-repeat`,
          borderRadius: "130px 130px 39px 120px",
        }}
      ></div>

      <div className="mt-16">
        <h1 className="text-2xl font-medium text-center mb-4 text-primary">
          What we are about
        </h1>
        <p className={`mb-3 ${isDark ? "text-primary-gray" : "text-black"}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          sapiente asperiores fugiat eveniet voluptas nulla? Fuga harum error
          molestiae aliquam dolorem, aut dolore laboriosam ex modi impedit
          quisquam quos voluptatibus!
        </p>
        <p className={`${isDark ? "text-primary-gray" : "text-black"}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          sapiente asperiores fugiat eveniet voluptas nulla? Fuga harum error
          molestiae aliquam dolorem, aut dolore laboriosam ex modi impedit
          quisquam quos voluptatibus!
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
