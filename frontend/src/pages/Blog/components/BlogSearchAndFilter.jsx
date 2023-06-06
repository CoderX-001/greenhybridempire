import { useContext } from "react";
import { DefaultInput } from "../../../components/form/Inputs";
import { AppContext } from "../../../contexts/AppContext";
import { ButtonWithIcon } from "../../../components/ui/buttons";
import { BiSearch } from "react-icons/bi";

const BlogSearchAndFilter = () => {
  const { isDark } = useContext(AppContext);

  return (
    <div className="px-4 mt-8">
      <form method="POST" className="relative max-w-[30rem] mx-auto">
        <DefaultInput
          name="blog-search"
          placeholder="What post are you looking for?"
          type="text"
          style={`w-full pl-4 pr-16 py-3 outline-primary rounded-md ${
            isDark ? "bg-[#3e3e3e]" : "bg-white"
          }`}
        />
        <ButtonWithIcon
          icon={<BiSearch />}
          iconSize="text-2xl"
          buttonStyle="absolute top-1/2 -translate-y-1/2 right-2 bg-primary text-secondary px-3 py-2 rounded-md"
        />
      </form>
    </div>
  );
};

export default BlogSearchAndFilter;
