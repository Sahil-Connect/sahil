import { z } from "zod";

export const USER_ROLES = ["business", "supplier"];

export const CONTACT_METHODS = ["email", "phone"];
export const DELIVERY_METHODS = ["pick-up", "delivery"];
export const PAYMENT_METHODS = ["cash", "credit"];

export const USER_DETAILS_SCHEMA = z.object({
  name: z.string().min(2, { message: "Must be more than 2 characters" }),
  email: z.string().email("Invalid email."),
  role: z
    .string()
    .min(1, "Role is required")
    .refine((value) => USER_ROLES.includes(value)),
});

// ROLE SCHEMAS
export const BUSINESS_ROLE_SCHEMA = z.object({
  name: z.string().min(2, { message: "Must be more than 2 characters" }),
  type: z.string(),
  contactName: z.string().min(2, { message: "Must be more than 2 characters" }),
  description: z
    .string()
    .min(10, { message: "Must be more than 10 characters" }),
  contactEmail: z.string().email("Invalid email"),
  phoneNumber: z.string().refine(
    (phone) => {
      const internationalFormat = /^\+\d{1,3}\d{6,14}$/;

      return internationalFormat.test(phone);
    },
    {
      message: "Use international format for phone number",
    }
  ),
});

export const SUPPLIER_ROLE_SCHEMA = z.object({
  name: z.string().min(2, { message: "Must be more than 2 characters" }),
  streetAddress: z
    .string()
    .min(10, { message: "Must be more than 10 characters" }),
  contactEmail: z.string().email("Invalid email"),
  contactName: z.string().min(2, { message: "Must be more than 2 characters" }),
  description: z
    .string()
    .min(10, { message: "Must be more than 10 characters" }),
  phoneNumber: z.string().refine(
    (phone) => {
      const internationalFormat = /^\+\d{1,3}\d{6,14}$/;

      return internationalFormat.test(phone);
    },
    {
      message: "Use international format for phone number",
    }
  ),
});

export const ROLE_DETAILS_SCHEMA = z.object({
  business: BUSINESS_ROLE_SCHEMA,
  supplier: SUPPLIER_ROLE_SCHEMA,
});

// PREFERENCE SCHEMAS
export const BUSINESS_PREFERENCE = z.object({
  contactMethod: z
    .string()
    .refine(
      (value) => CONTACT_METHODS.includes(value),
      "Invalid contact method"
    ),
  deliveryMethod: z
    .string()
    .refine(
      (value) => DELIVERY_METHODS.includes(value),
      "Invalid delivery method"
    ),
  paymentMethod: z
    .string()
    .refine(
      (value) => PAYMENT_METHODS.includes(value),
      "Invalid payment method"
    ),
});

export const SUPPLIER_PREFERENCE = z.object({
  categories: z.array(z.string()).max(3, "Maximum of 3 categories!"),
});

export const PREFERENCE_SCHEMA = z.object({
  business: BUSINESS_PREFERENCE,
  supplier: SUPPLIER_PREFERENCE,
});
