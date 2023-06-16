import { useContext } from "react";
import { newArrivals } from "../../../utils/dummyProductData";
import { AppContext } from "../../../contexts/AppContext";
import { Link } from "react-router-dom";
import Slider from "react-slick/lib/slider";
import { ButtonWithIcon } from "../../../components/ui/buttons";
import { BiCartAdd } from "react-icons/bi";
import { priceComma } from "../../../functions/CartFuncs";

const NewArrivals = ({ screenWidth }) => {
  const { isDark } = useContext(AppContext);

  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 5000,
          pauseOnHover: false,
          cssEase: "linear",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 5000,
          pauseOnHover: false,
          cssEase: "linear",
        },
      },
    ],
  };

  return (
    <section className="mb-4">
      <h2 className="text-lg text-secondary-gray uppercase mt-2 mb-4">
        New Arrivals
      </h2>
      <Slider {...settings}>
        {newArrivals.map((item) => (
          <div
            key={item.id}
            className={`w-32 h-[18rem] bg-[#33b05f56] rounded-lg shadow-lg overflow-hidden pb-5 ${
              screenWidth > 480 ? "p-4" : "p-0"
            }`}
          >
            <div className="relative w-full h-full">
              {/* ITEM IMAGE */}
              <div className="relative">
                <img
                  src={item["item-image"]}
                  alt={item.name}
                  className={`relative z-10 w-[15rem] mx-auto mt-6 ${
                    item.id === 7 && "w-[9rem]"
                  }`}
                />
                <div
                  className={`${
                    isDark ? "bg-[#33b05f89]" : "bg-[#33b05f58]"
                  } w-32 h-32 rounded-full absolute -top-2 left-1/2 -translate-x-1/2`}
                ></div>
              </div>

              <div
                className={`absolute bottom-5 w-full px-12 ${
                  isDark ? "text-secondary-gray" : "text-[#121212]"
                }`}
              >
                {/* ITEM NAME */}
                <Link
                  to={`/shop/${item.id}`}
                  className={`block text-[0.9rem] overflow-hidden text-ellipsis whitespace-nowrap mb-2`}
                >
                  {item.name}
                </Link>

                <div className="flex flex-wrap items-center justify-between">
                  {/* ITEM PRICE */}
                  <div className="flex items-center gap-x-3">
                    <p className="text-[0.9rem]">
                      ₦
                      {item["discount-price"]
                        ? priceComma(item["discount-price"])
                        : priceComma(item.price)}
                    </p>
                    {item["discount-price"] ? (
                      <p className="text-[0.75rem] text-red-500 line-through">
                        ₦{priceComma(item.price)}
                      </p>
                    ) : null}
                  </div>

                  {/* ADD-TO-CART BUTTON */}
                  <ButtonWithIcon
                    backgroundColor="bg-dark-green"
                    borderRadius="rounded-lg"
                    func={() => {}}
                    icon={<BiCartAdd />}
                    iconSize="text-xl"
                    padding="px-3 py-2"
                    textColor="text-secondary"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default NewArrivals;
