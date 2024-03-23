export const formatCost = (cost: any) =>
  cost.toLocaleString("en-SS", {
    style: "currency",
    currency: "SSP",
  });

export const formatCurrency = (number: number) => {
  const formattedNumber = number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
  return `${formattedNumber} SSP`;
};

export const  calculateDiscountedPrice = (originalPrice, discountPercentage) =>{
  // Convert discount percentage to a decimal
  const discountDecimal = discountPercentage / 100;
  
  // Calculate discounted price
  const discountedPrice = originalPrice - (originalPrice * discountDecimal);
  
  return discountedPrice;
}