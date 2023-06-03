export const getTotalPrice = (items) => {
  let prices = [];
  items.map((item) => {
    let discount = item["discount-price"].includes(",")
      ? item["discount-price"].replace(",", "")
      : item["discount-price"];
    let price = item.price.includes(",")
      ? item.price.replace(",", "")
      : item.price;

    discount ? prices.push(parseInt(discount)) : null;
    price && !discount ? prices.push(parseInt(price)) : null;
  });
  return prices;
};

export const priceComma = (price) => {
  if (price.toString().length >= 4 && price.toString().length < 7) {
    const priceArray = price.toString().split("")
    priceArray.splice(-3, 0, ".")
    let newPrice = priceArray.toString().replace(/,/g, "").replace(".", ",")

    return newPrice
  }
  else if (price.toString().length >= 7 && price.toString().length < 10) {
    const priceArray = price.toString().split("")
    priceArray.splice(-3, 0, ".")
    priceArray.splice(-7, 0, ".")
    let newPrice = priceArray.toString().replace(/,/g, "").replace(/\./g, ",")
    
    return newPrice
  }
  else if (price.toString().length >= 10) {
    const priceArray = price.toString().split("")
    priceArray.splice(-3, 0, ".")
    priceArray.splice(-7, 0, ".")
    priceArray.splice(-11, 0, ".")
    let newPrice = priceArray.toString().replace(/,/g, "").replace(/\./g, ",")

    return newPrice
  }
}
