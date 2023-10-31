export const formatCost = (cost) => cost.toLocaleString(
  "en-SS",
  {
    style: "currency",
    currency: "SSP"
  }
);