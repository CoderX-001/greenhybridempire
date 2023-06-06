import { useContext } from "react";
import { DefaultInput } from "../../../components/form/Inputs";
import { AppContext } from "../../../contexts/AppContext";
import { ButtonWithIcon } from "../../../components/ui/buttons";
import { BiSearch } from "react-icons/bi";

const BlogSearchAndFilter = () => {
  const { isDark } = useContext(AppContext);

  return (
    <div className="px-4 mt-8">
      <form method="POST" className="relative w-[85%] bg-red-500">
        <DefaultInput
          name="blog-search"
          placeholder="Search blogs..."
          type="text"
          style={`w-full px-4 py-3 rounded-md ${isDark ? "bg-[#3e3e3e]" : "bg-white"}`}
        />
        <ButtonWithIcon
          icon={<BiSearch />}
          iconSize="text-2xl"
          buttonStyle="absolute top-1/2 -translate-y-1/2 right-4 bg-primary text-secondary px-3 py-2 rounded-md"
        />
      </form>
    </div>
  );
};

export default BlogSearchAndFilter;
