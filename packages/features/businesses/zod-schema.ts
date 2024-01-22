import { z } from "zod";

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
