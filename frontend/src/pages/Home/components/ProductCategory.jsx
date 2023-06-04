import CategoryItem from "./sub-components/CategoryItem";
import BookImage from "../../../assets/books.jpeg"
import CourseImage from "../../../assets/courses.jpeg"
import FarmInputImage from "../../../assets/farm-input.jpeg"
import GreenHybridImage from "../../../assets/products.jpeg"
import { useContext } from "react";
import { AppContext } from "../../../contexts/AppContext";

const ProductCategory = () => {
  const {isDark} = useContext(AppContext)

  return (
    <div className="w-full pb-20 pt-8 px-4 md:py-20">
      <h1 className="text-2xl text-center font-medium text-primary">
        Product category
      </h1>
      <p
        className={`text-center text-[0.9rem] ${
          isDark ? "text-primary-gray" : "text-black"
        } transition-all duration-300`}
      >
        Product categories chosen with care to help you become a better and more
        productive agro-business professional.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-6">
        <CategoryItem
          title="Books"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. A, ut."
          image={BookImage}
          link=""
        />

        <CategoryItem
          title="Courses"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. A, ut."
          image={CourseImage}
          link=""
        />

        <CategoryItem
          title="Farm inputs"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. A, ut."
          image={FarmInputImage}
          link=""
        />

        <CategoryItem
          title="GreenHybrid Products"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. A, ut."
          image={GreenHybridImage}
          link=""
        />
      </div>
    </div>
  );
};

export default ProductCategory;