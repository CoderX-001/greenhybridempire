import { useContext, useEffect, useState } from "react";
import { Mobile, Navbar } from "../../components/navbar";
import { TopNav } from "../../components/navbar/non-mobile";
import { AppContext } from "../../contexts/AppContext";
import { DefaultInput } from "../../components/form/Inputs";
import { ButtonWithIcon } from "../../components/ui/buttons";
import { Footer } from "../../components/ui";
import { BiSearch } from "react-icons/bi";
import { categories } from "../../data/_data";
import { Link } from "react-router-dom";
import NewArrivals from "./components/newArrivals";
import Slider from "react-slick/lib/slider";
import ItemsShop from "./components/itemsShop";
import { products } from "../../utils/dummyProductData";
import { AiOutlineWhatsApp } from "react-icons/ai";

const Shop = ({
  screenWidth,
  screenHeight,
  bodyWidth,
  bodyMargin,
  getNavbarActive,
}) => {
  const { isDark } = useContext(AppContext);

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
        },
      },
    ],
  };

  const [mainData, setMainData] = useState(products);

  useEffect(() => {
    document.title = "Shop - Green Hybrid Empire";
  }, []);

  return (
    <div className="flex flex-col md:flex-row md:justify-center">
      {screenWidth < 768 ? (
        <Mobile />
      ) : (
        <Navbar
          bodyWidth={bodyWidth}
          screenHeight={screenHeight}
          navFunc={getNavbarActive}
        />
      )}

      <main
        className={`relative w-full overflow-x-hidden ${
          isDark ? "bg-[#121212]" : "bg-white"
        } ${
          screenWidth > 767 ? bodyMargin : ""
        } transition-all duration-300 2xl:px-20`}
        style={{ minHeight: screenHeight - 80 + "px" }}
      >
        {screenWidth > 767 ? <TopNav /> : null}

        <div className="px-4 mb-20 lg:px-12">
          {/* SEARCH */}
          <div className="w-full md:flex md:items-center md:justify-end">
            <div className="w-full mt-4 mb-10 relative md:w-1/2 lg:w-[35%]">
              <DefaultInput
                placeholder="Search Shop..."
                name="searchShop"
                type="text"
                style={`w-full bg-transparent border-2 border-primary pl-3 pr-14 py-3 rounded-lg focus:border-dark-green outline-none ${
                  isDark ? "text-secondary-gray" : "text-black"
                }`}
              />
              <ButtonWithIcon
                backgroundColor="bg-dark-green"
                borderRadius="rounded-lg"
                icon={<BiSearch />}
                iconSize="text-2xl"
                padding="p-2"
                textColor="text-secondary"
                func={() => {}}
                miscStyle="absolute top-1/2 -translate-y-1/2 right-2"
              />
            </div>
          </div>

          {/* MAIN */}
          <div className="md:px-12">
            {/* Categories */}
            <section>
              <h2 className="text-lg text-secondary-gray uppercase">
                Categories
              </h2>
              {/* Slider */}
              <Slider {...settings}>
                {categories.map((item) => (
                  <div
                    key={item.name}
                    className="w-56 h-44 py-6 px-1 lg:h-64 lg:px-6"
                  >
                    <Link
                      to={`/shop/${item.name.replace(" ", "-").toLowerCase()}`}
                      className={`relative block w-full h-full font-medium ${
                        item.color
                      } ${
                        item.name === "Seedlings" ? "text-black" : "text-white"
                      } rounded-lg shadow px-2 overflow-hidden`}
                    >
                      <h3
                        className={`absolute z-10 text-[0.85rem] ${
                          item.name === "books" ||
                          item.name === "Seedlings" ||
                          item.name === "Seeds"
                            ? "top-3"
                            : "bottom-3"
                        }`}
                      >
                        {item.name.toUpperCase()}
                      </h3>
                      <img
                        src={item.image}
                        alt={item.name + "'s image"}
                        className={`absolute ${
                          item.name.includes("-") ||
                          item.name.includes("Product")
                            ? "-top-8 -right-6"
                            : "bottom-0 -right-4"
                        } object-cover w-[8rem] h-[8rem]`}
                      />
                    </Link>
                  </div>
                ))}
              </Slider>
            </section>

            <NewArrivals screenWidth={screenWidth} />

            <ItemsShop
              title="books"
              data={mainData.filter((item) => {
                return item.category === "Book";
              })}
            />

            <ItemsShop
              title="farm input"
              data={mainData.filter((item) => {
                return item.category === "Farm-input";
              })}
            />

            <section
              className="w-full h-[50vh] mt-16 rounded-md px-4 py-3 mb-20 grid place-content-center text-white l:w-[60%] lg:h-[70vh] lg:mx-auto"
              style={{
                background:
                  "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://img.freepik.com/free-photo/portrait-attractive-cuban-woman-presenting-statistical-information-her-unrecognizable-boss_1098-20618.jpg?w=740&t=st=1686901232~exp=1686901832~hmac=43ae74b8249e9eef3b8a790dd93840cb25c38fea6bdde8302d8f02f62cbc5da8') no-repeat",
                backgroundSize: "cover",
              }}
            >
              <p className="uppercase text-[0.75rem] -mb-1">consultation</p>
              <h1 className="uppercase text-3xl font-medium mb-6">
                How to run an oil palm plantation
              </h1>

              <p className="text-[0.75rem] mb-2 md:text-sm lg:text-[0.95rem]">
                For more inquires
              </p>
              <ButtonWithIcon
                backgroundColor="bg-dark-green"
                textColor="text-secondary"
                icon={<AiOutlineWhatsApp />}
                iconSize="text-xl md:text-2xl lg:text-3xl"
                padding="px-2 py-1.5"
                borderRadius="rounded-lg"
                miscStyle="w-fit"
                link="https://api.whatsapp.com/send?phone=2348141156233&text=Hi,%20I%20would%20like%20to%20know%20more%20about%20the%20oil%20palm%20plantation%20consultancy."
                target="_blank"
              />
            </section>

            <ItemsShop
              title="courses"
              data={mainData.filter((item) => {
                return item.category === "Courses";
              })}
            />
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default Shop;
