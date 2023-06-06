import { useContext, useState } from "react";
import { DefaultInput } from "../../../components/form/Inputs";
import { AppContext } from "../../../contexts/AppContext";
import { ButtonWithIcon } from "../../../components/ui/buttons";
import { BiCaretDown, BiCaretUp, BiSearch } from "react-icons/bi";
import { IconContext } from "react-icons";

const BlogSearchAndFilter = ({setItemsDown, itemsDown}) => {
  const { isDark } = useContext(AppContext);

  const filterBy = [
    "All",
    "Oil palm seedlings",
    "Coconut seedlings",
    "Tenera",
    "Malaysian supergene"
  ]

  const sortBy = [
    "Title [A-Z]",
    "Title [Z-A]",
    "Author [Z-A]",
    "Author [A-Z]",
    "Date created [A-Z]",
    "Date created [Z-A]",
  ]

  const [filterState, setFilterState] = useState(false)
  const [filterValue, setFilterValue] = useState("All")
  const [sortState, setSortState] = useState(false)
  const [sortValue, setSortValue] = useState(sortBy[0])

  const availableFilter = filterBy.filter(filter => {
    return filter !== filterValue
  })
  const availableSorter = sortBy.filter(sort => {
    return sort !== sortValue
  })

  const dropFunc = (state) => {
    let result;
    state ? result = true : result = false

    console.log(result)
    return result;
  }

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
      {/* Filter container */}
      <div className="relative max-w-[30rem] mx-auto mt-4 flex justify-center gap-x-6">
        {/* Filter */}
        <div>
          <button
            onClick={() => {
              setFilterState(!filterState);
              setSortState(false);
              setItemsDown(dropFunc(!filterState));
            }}
            className={`flex items-center gap-x-2 px-3 py-2 rounded-md ${
              isDark
                ? "text-secondary bg-dark-green"
                : "text-primary-gray bg-primary"
            } transition-all duration-300`}
          >
            <span>{filterValue}</span>
            <IconContext.Provider value={{ className: "text-base" }}>
              {filterState ? <BiCaretUp /> : <BiCaretDown />}
            </IconContext.Provider>
          </button>

          {/* Filter Dropdown */}
          <div
            className={`bg-primary absolute flex flex-wrap justify-center gap-3 ${
              filterState
                ? "w-full h-fit left-0 translate-x-0 px-2 py-3 mt-2 overflow-auto"
                : "w-0 h-0 m-0 left-1/2 -translate-x-1/2 overflow-hidden"
            } rounded-md transition-all duration-200`}
          >
            {availableFilter.map((filter) => (
              <button
                onClick={(e) => setFilterValue(e.target.value)}
                className={`inline-block w-fit p-2 text-primary-gray rounded-md bg-[#f1f1f11a] active:bg-[#f1f1f140]`}
                key={filter}
                value={filter}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Sort */}
        <div>
          <button
            onClick={() => {
              setSortState(!sortState);
              setFilterState(false);
              setItemsDown(dropFunc(!sortState));
            }}
            className={`flex items-center gap-x-2 px-3 py-2 rounded-md ${
              isDark
                ? "text-secondary bg-dark-green"
                : "text-primary-gray bg-primary"
            } transition-all duration-300`}
          >
            <span>{sortValue}</span>
            <IconContext.Provider value={{ className: "text-base" }}>
              {sortState ? <BiCaretUp /> : <BiCaretDown />}
            </IconContext.Provider>
          </button>

          {/* Sort Dropdown */}
          <div
            className={`bg-primary absolute flex flex-wrap justify-center gap-3 ${
              sortState
                ? "w-full h-fit left-0 translate-x-0 px-2 py-3 mt-2 overflow-auto"
                : "w-0 h-0 m-0 left-1/2 -translate-x-1/2 overflow-hidden"
            } rounded-md transition-all duration-200`}
          >
            {availableSorter.map((sort) => (
              <button
                onClick={(e) => setSortValue(e.target.value)}
                className={`inline-block w-fit p-2 text-primary-gray rounded-md bg-[#f1f1f11a] active:bg-[#f1f1f140]`}
                key={sort}
                value={sort}
              >
                {sort}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSearchAndFilter;
