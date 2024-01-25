import { z } from "zod";
import { INSERT_NEW_BUSINESS } from "@sahil/lib/graphql/mutations/businesses";

import { client } from "../../lib/graphql-request";

type ContactMethod = "email" | "call" | "sms" | "whatsapp";

type DeliveryMethod = "pick-up-location" | "direct-delivery";

export const businessSchema = z.object({
  name: z.string().trim(),
  type: z.string(),
  description: z.string().optional(),
  contactEmail: z.string().optional(),
  contactName: z.string().optional(),
  preferredContactMethod: z.string().optional(),
  preferredDeliveryMethod: z.string().optional(),
});

export type BusinessAttributes = z.infer<typeof businessSchema>;

export const registerBusiness = async (
  business: BusinessAttributes
): Promise<any> => {
  const data = await client.request(INSERT_NEW_BUSINESS, {
    object: business,
  });
  // @ts-ignore
  return Promise.resolve(data?.insert_business_one);
};
