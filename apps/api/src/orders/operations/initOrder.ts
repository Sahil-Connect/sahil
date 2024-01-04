type OrderAttributes = {
  created_at: Date;
  customerId: string;
  destination: string;
  id: string;
  orderId: string;
  origin: string;
  processedBy: string;
};

export const initOrder = (
  attributes: OrderAttributes
): Promise<OrderAttributes> => {
  return new Promise<OrderAttributes>((resolve) => {

    // check for clients that can process this order
    // update order status based on this information
    // alert the notifications service
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
