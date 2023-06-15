import { useContext, useEffect } from "react";
import { Mobile, Navbar } from "../../components/navbar";
import { TopNav } from "../../components/navbar/non-mobile";
import { AppContext } from "../../contexts/AppContext";
import { DefaultInput } from "../../components/form/Inputs";
import { ButtonWithIcon } from "../../components/ui/buttons";
import { BiSearch } from "react-icons/bi";
import Slider from "react-slick";
import { categories } from "../../data/_data";
import { Link } from "react-router-dom";

const Shop = ({
  screenWidth,
  screenHeight,
  bodyWidth,
  bodyMargin,
  getNavbarActive,
}) => {
  const { isDark } = useContext(AppContext);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

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
        } ${screenWidth > 767 ? bodyMargin : ""} transition-all duration-300`}
        style={{ minHeight: screenHeight - 80 + "px" }}
      >
        {screenWidth > 767 ? <TopNav /> : null}

        <div className="px-4">
          {/* SEARCH */}
          <div className="mt-4 mb-10 relative">
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

          {/* MAIN */}
          <div>
            {/* Categories */}
            <section>
              <h2 className="text-lg text-secondary-gray uppercase">
                Categories
              </h2>
              {/* Slider */}
              <Slider {...settings}>
                {categories.map((item) => (
                  <div key={item.name} className="w-56 h-44 py-6 px-1">
                    <Link
                      to="/"
                      className={`relative block w-full h-full font-medium ${
                        item.color
                      } ${
                        item.name === "Seedlings" || isDark
                          ? "text-black"
                          : "text-white"
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

            <section>
              <h2 className="text-lg text-secondary-gray uppercase mt-2">
                New Arrivals
              </h2>
              <div></div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Shop;
