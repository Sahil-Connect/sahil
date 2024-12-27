import { z } from "zod";

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

// array for select elements
export const vehicleStatuses = [
  'yes',
  'no',
] as const;

export type VehicleStatus = typeof vehicleStatuses[number];

export const mappedVehicleStatuses: { [key in VehicleStatus]: string } = {
  yes: 'Yes',
  no: 'No',
};

export const basePartnerSchema = z.object({
  name: z.string().min(3, 'Must be at least 3 characters'),
  email: z.string().email({message: "Email is required"}),
  phoneNumber: z.string().regex(phoneRegex, 'Phone number is required'),
  companyName: z.string().min(3, 'Must be at least 3 characters').optional(),
  supplyDetails: z
  .string()
  .min(3, {message: 'Must be at least 3 characters'})
  .max(250, {message: 'Must not exceed 250 characters'})
  .optional(),
  vehicleDetails: z.enum(vehicleStatuses).optional(),
});
