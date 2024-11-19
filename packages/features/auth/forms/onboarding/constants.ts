import { z } from "zod";
import { isValidTimeString } from "@sahil/lib";

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
  preferredContactMethod: z
    .string()
    .refine(
      (value) => CONTACT_METHODS.includes(value),
      "Invalid contact method"
    ),
  preferredDeliveryMethod: z
    .string()
    .refine(
      (value) => DELIVERY_METHODS.includes(value),
      "Invalid delivery method"
    ),
  preferredPaymentMethod: z
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

// Schedule schema
export const WORK_SHIFT_SCHEMA = z.object({
  start_time: z.string().refine(isValidTimeString, {
    message: "Invalid time format.",
  }),
  end_time: z.string().refine(isValidTimeString, {
    message: "Invalid time format.",
  }),
});

export const WORK_SCHEDULE_SCHEMA = z.object({
  days: z.array(z.string()).min(1, "At least one day is required."),
  shifts: z
    .array(WORK_SHIFT_SCHEMA)
    .min(1, "At least one shift is required.")
    .max(3, "Maximum of 3 shifts allowed."),
});

export const daysOfWeek = [
  { value: "0", label: "Sunday" },
  { value: "1", label: "Monday" },
  { value: "2", label: "Tuesday" },
  { value: "3", label: "Wednesday" },
  { value: "4", label: "Thursday" },
  { value: "5", label: "Friday" },
  { value: "6", label: "Saturday" },
];

export const defaultShift = { start_time: "09:00", end_time: "17:00" };
