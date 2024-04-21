export const formatCost = (cost: any) =>
  cost.toLocaleString("en-SS", {
    style: "currency",
    currency: "SSP",
  });

export const formatCurrency = (number: number) => {
  let formattedNumber = "";
  if (number >= 1e6) {
    formattedNumber = (number / 1e6).toFixed(2) + "M";
  } else if (number >= 1e3) {
    formattedNumber = (number / 1e3).toFixed(2) + "K";
  } else {
    formattedNumber = number.toFixed(2);
  }
  return `${formattedNumber} SSP`;
};

export const calculateDiscountedPrice = (
  originalPrice: number,
  discountPercentage: number
) => {
  // Convert discount percentage to a decimal
  const discountDecimal = discountPercentage / 100;

  // Calculate discounted price
  const discountedPrice = originalPrice - originalPrice * discountDecimal;

  return discountedPrice;
};
