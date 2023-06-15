import NoBgBook from "../assets/no-bg-book-2.png";
import NoBgFertilizer from "../assets/no-bg-fertilizer-2.png";
import NoBgProduct from "../assets/no-bg-seedling-2.png";
import NoBgSeedling from "../assets/no-bg-seedling.png";
import NoBgSeed from "../assets/no-bg-seed.png";

export const categories = [
  {
    name: "books",
    link: "/shop/books",
    itemsAvailable: 1,
    color: "bg-[#cb0272]",
    image: NoBgBook,
  },
  {
    name: "farm-inputs",
    link: "/shop/farm-inputs",
    itemsAvailable: 1,
    color: "bg-[#7ba539]",
    image: NoBgFertilizer,
  },
  {
    name: "GreenHybrid Products",
    link: "/shop/greenhybrid-product",
    itemsAvailable: 1,
    color: "bg-[#65493e]",
    image: NoBgProduct,
  },
  {
    name: "Seedlings",
    link: "/shop/seedlings",
    itemsAvailable: 1,
    color: "bg-[#f6edd2]",
    image: NoBgSeedling,
  },
  {
    name: "Seeds",
    link: "/shop/seeds",
    itemsAvailable: 1,
    color: "bg-[#f8d981]",
    image: NoBgSeed,
  },
];
