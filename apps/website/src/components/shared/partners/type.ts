import { formSchema } from "@/lib/schema";
import { z } from "zod";

export type FormInputType = z.infer<typeof formSchema>
