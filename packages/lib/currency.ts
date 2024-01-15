export const formatCost = (cost) =>
  cost.toLocaleString("en-SS", {
    style: "currency",
    currency: "SSP",
  });

export const formatCurrency = (number: number) => {
  const formattedNumber = number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
  return `${formattedNumber} SSP`;
};
