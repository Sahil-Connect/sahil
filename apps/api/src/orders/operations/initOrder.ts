import { z } from "zod";

export const orderSchema = z.object({
  orderId: z.string(),
  created_at: z.date(),
  customerId: z.string(),
  destination: z.string(),
  id: z.string(),
  origin: z.string(),
  processedBy: z.string(),
});

export type OrderAttributes = z.infer<typeof orderSchema>;

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
