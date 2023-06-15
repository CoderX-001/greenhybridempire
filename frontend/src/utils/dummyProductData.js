import ItemImage from "../assets/products.jpeg";
import NoBgBook from "../assets/no-bg-book-4.png";
import NoBgFertilizer from "../assets/no-bg-fertilizer-2.png";
import NoBgProduct from "../assets/no-bg-seedling-2.png";
import NoBgSeedling from "../assets/no-bg-seedling.png";
import NoBgSeed from "../assets/no-bg-seed.png";

export const products = [
  {
    name: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    category: "Books",
    price: "40000",
    "discount-price": "35000",
    itemsAvailable: 5,
    "item-image": ItemImage,
    id: 1,
    orderFor: 1,
    description: "",
    keywords: "",
  },
  {
    name: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    category: "Courses",
    price: "40000",
    "discount-price": "",
    itemsAvailable: 10,
    "item-image": ItemImage,
    id: 2,
    orderFor: 1,
    description: "",
    keywords: "",
  },
  {
    name: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    category: "Farm inputs",
    price: "50000",
    "discount-price": "",
    itemsAvailable: 10,
    "item-image": ItemImage,
    id: 3,
    orderFor: 1,
    description: "",
    keywords: "",
  },
];

export const newArrivals = [
  {
    name: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    category: "Book",
    price: "30000",
    "discount-price": "",
    itemsAvailable: 20,
    "item-image": NoBgBook,
    id: 4,
    orderFor: 1,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi et excepturi numquam nihil quisquam officia enim, tenetur dicta pariatur molestiae earum officiis corrupti id voluptatum cupiditate voluptas, aliquid culpa praesentium.",
    keywords: ["book", "books"],
  },
  {
    name: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    category: "Farm-input",
    price: "40000",
    "discount-price": "35000",
    itemsAvailable: 20,
    "item-image": NoBgFertilizer,
    id: 5,
    orderFor: 1,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi et excepturi numquam nihil quisquam officia enim, tenetur dicta pariatur molestiae earum officiis corrupti id voluptatum cupiditate voluptas, aliquid culpa praesentium.",
    keywords: ["farm input", "fertilizer", "fertilizers"],
  },
];
