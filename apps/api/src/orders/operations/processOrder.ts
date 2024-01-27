type OrderAttributes = {
  created_at: Date;
  customerId: string;
  destination: string;
  id: string;
  orderId: string;
  origin: string;
  processedBy: string;
};

export const processOrder = (
  attributes: OrderAttributes
): Promise<OrderAttributes> => {
  return new Promise<OrderAttributes>((resolve) => {
    resolve({
      created_at: new Date(),
      customerId: "string",
      destination: "string",
      id: "string",
      orderId: "string",
      origin: "string",
      processedBy: "string",
    });
  });
};
