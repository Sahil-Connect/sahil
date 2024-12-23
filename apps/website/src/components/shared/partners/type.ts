// import { z } from "zod";
// import { businessPartnerSchema, courierPartnerSchema, supplierPartnerSchema } from "@/lib/schema";

export type FormInputType = {
  name: string;
  email: string;
  phoneNumber: string;
  companyName: string;
  vehicleDetails?: "yes" | "no";
  supplyDetails?: string;
}