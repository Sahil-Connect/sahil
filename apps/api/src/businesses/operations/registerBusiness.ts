import { z } from "zod";
import { INSERT_NEW_BUSINESS } from "@sahil/lib/graphql/mutations/businesses";

import { client } from "../../lib/graphql-request";

type ContactMethod = "email" | "call" | "sms" | "whatsapp";

type DeliveryMethod = "pick-up-location" | "direct-delivery";

export const businessSchema = z.object({
  name: z.string().trim(),
  //   type: z.string(),
  //   description: z.string(),
  //   contactEmail: z.string(),
  //   contactName: z.string(),
  //   preferredContactMethod: z.string(),
  //   preferredDeliveryMethod: z.string()
  //   price: z
  //   .string()
  //   .min(1, { message: "required" })
  //   .transform((value) => +value)
  //   .refine((value) => !isNaN(value), { message: "Must be a number"})
});

export type BusinessAttributes = z.infer<typeof businessSchema>;

export const registerBusiness = async (
  business: BusinessAttributes
): Promise<any> => {
  const data = await client.request(INSERT_NEW_BUSINESS, {
    object: business,
  });
  // @ts-ignore
  return data?.insert_business_one;
};
