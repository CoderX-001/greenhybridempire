import { Link } from "react-router-dom";
import Slider from "react-slick/lib/slider";
import { priceComma } from "../../../functions/CartFuncs";
import { ButtonWithIcon } from "../../../components/ui/buttons";
import { BiCartAdd } from "react-icons/bi";
import { useContext } from "react";
import { AppContext } from "../../../contexts/AppContext";

const ItemsShop = ({ title, data }) => {
  const { isDark } = useContext(AppContext);

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          loop: true,
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
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className={`mt-12 ${isDark ? "text-secondary-gray" : "text-black"}`}>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-secondary-gray uppercase">{title}</h2>
        <Link
          to={`/shop/${title.replace(" ", "-")}`}
          className="text-sm hover:underline"
        >
          View all
        </Link>
      </div>
      <Slider {...settings}>
        {data.map((item) => (
          <div key={item.id} className="w-full md:px-3">
            <div className="relative w-full h-52 p-4">
              <img
                src={item["item-image"]}
                alt=""
                className="w-24 h-24 mx-auto object-cover bg-[#33b05f89] rounded-full drop-shadow-2xl"
              />
              <Link
                to={`/shop/${item.id}`}
                className="block mt-3 text-[0.9rem] font-medium text-ellipsis overflow-hidden whitespace-nowrap"
              >
                {item.name}
              </Link>
              <div className="flex flex-col gap-y-2">
                {/* ITEM PRICE */}
                <div className="flex items-center gap-x-3">
                  <p className="text-[0.8rem]">
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
                  iconSize="text-lg"
                  padding="px-2 py-1.5"
                  textColor="text-secondary"
                  miscStyle="w-fit absolute bottom-2 right-4"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ItemsShop;
