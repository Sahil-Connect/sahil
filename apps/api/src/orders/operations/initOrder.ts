type OrderAttributes = {
  created_at: Date;
  customerId: string;
  destination: string;
  id: string;
  orderId: string;
  origin: string;
  processedBy: string;
};

export const initOrder = (attributes: OrderAttributes): Promise<any> => {
  return new Promise((resolve) => {
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
