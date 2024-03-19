import { z } from "zod";
import { client } from "../../lib/graphql-request";
import { INSERT_NEW_ORDER } from "@sahil/lib/graphql";

export const orderSchema = z
  .object({
    created_at: z
      .date()
      .refine((value) => value > new Date())
      .optional(),
    customerId: z.any(),
    origin: z.string(),
    processedBy: z.string().optional(),
    orderItems: z.any()
  });

export type OrderAttributes = z.infer<typeof orderSchema>;

export const initOrder = async (order: OrderAttributes): Promise<unknown> => {
  // const data = await client.request(INSERT_NEW_ORDER, {
  //   object: {
  //     ...order,
  //   },
  // });
  // return Promise.resolve(data);
  return Promise.resolve(order);
};
