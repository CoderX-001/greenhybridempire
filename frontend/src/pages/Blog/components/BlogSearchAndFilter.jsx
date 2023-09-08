import { useContext, useState } from "react";
import { DefaultInput } from "../../../components/form/Inputs";
import { AppContext } from "../../../contexts/AppContext";
import { ButtonWithIcon } from "../../../components/ui/buttons";
import { BiSearch } from "react-icons/bi";
import SearchFilter from "./sub-components/SearchFilter";

const BlogSearchAndFilter = ({ setItemsDown }) => {
  const { isDark } = useContext(AppContext);

  const filterBy = [
    "All",
    "Oil palm seedlings",
    "Coconut seedlings",
    "Tenera",
    "Malaysian supergene",
  ];

  const sortBy = [
    "Date created (newest)",
    "Date created (oldest)",
    "Title (A-Z)",
    "Title (Z-A)",
    "Author (Z-A)",
    "Author (A-Z)",
  ];

  const [filterState, setFilterState] = useState(false);
  const [filterValue, setFilterValue] = useState("All");
  const [sortState, setSortState] = useState(false);
  const [sortValue, setSortValue] = useState(sortBy[0]);

  const availableFilter = filterBy.filter((filter) => {
    return filter !== filterValue;
  });
  const availableSorter = sortBy.filter((sort) => {
    return sort !== sortValue;
  });

  return (
    <div className="px-4 mt-8">
      {/* Search form */}
      <form
        onSubmit={(e) => e.preventDefault()}
        method="POST"
        className="relative max-w-[30rem] mx-auto"
      >
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

      {/* Filter and sort container */}
      <div className="relative max-w-[30rem] mx-auto mt-4 flex justify-center gap-x-6">
        {/* Filter */}
        <SearchFilter
          bodyFunc={setItemsDown}
          filteredItem={availableFilter}
          mainState={filterState}
          secStateFunc={setSortState}
          stateFunc={setFilterState}
          value={filterValue}
          valueFunc={setFilterValue}
        />

        {/* Sort */}
        <SearchFilter
          bodyFunc={setItemsDown}
          filteredItem={availableSorter}
          mainState={sortState}
          secStateFunc={setFilterState}
          stateFunc={setSortState}
          value={sortValue}
          valueFunc={setSortValue}
        />
      </div>
    </div>
  );
};

export default BlogSearchAndFilter;
