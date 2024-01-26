import { z } from "zod";

export const courierSchema = z.object({
  name: z.string().trim(),
});

export const courierContactSchema = z.object({
  email: z.string().email({ message: "Invalid email format" }).trim(),
  phoneNumber: z
    .string()
    .regex(/^\d{10}$/i, { message: "Invalid phone number format" })
    .trim(),
});

export type CourierContactFormData = z.infer<typeof courierContactSchema>;

export type CourierAttributes = z.infer<typeof courierSchema>;
