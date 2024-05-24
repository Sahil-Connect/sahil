import { useEffect } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { useOnBoardingFormStore } from "@sahil/lib/hooks/formStores/useOnBoardingFormStore";
import BusinessRoleDetails from "./role/BusinessRoleDetails";
import { SupplierRoleDetails } from "./role/SupplierRoleDetails";
import { Card } from "ui";
import { HiArrowSmallRight } from "react-icons/hi2";

const businessTypes = ["hotel", "bar", "restaurant"];

const businessSchema = z.object({
  business: z
    .object({
      name: z.string().min(2, { message: "Must be more than 2 characters" }),
      type: z
        .string()
        .refine(
          (value) => businessTypes.includes(value),
          "Invalid business type"
        ),
      contactName: z
        .string()
        .min(2, { message: "Must be more than 2 characters" }),
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
    })
    .optional(),
});

const supplierSchema = z.object({
  supplier: z
    .object({
      name: z.string().min(2, { message: "Must be more than 2 characters" }),
      streetAddress: z
        .string()
        .min(10, { message: "Must be more than 10 characters" }),
      contactEmail: z.string().email("Invalid email"),
      contactName: z
        .string()
        .min(2, { message: "Must be more than 2 characters" }),
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
    })
    .optional(),
});

const roleSchemas = {
  business: businessSchema,
  supplier: supplierSchema,
};

type FormData = z.infer<typeof businessSchema> | z.infer<typeof supplierSchema>;

type RoleDetailsProps = {
  navigateToNextStep: (step: string) => void;
};

export const RoleDetails = ({ navigateToNextStep }: RoleDetailsProps) => {
  const { updateStepFormData, formData } = useOnBoardingFormStore(
    (state) => state
  );
  const role = formData.role as "supplier" | "business";

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(roleSchemas[role]),
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const validatedInput = roleSchemas[role].parse(data);

    updateStepFormData(validatedInput);
    navigateToNextStep("preferences");
  };

  useEffect(() => {
    //reset role objects on role change
    const allRoles = ["business", "supplier"];
    const newFormData = { [role]: {} };
    allRoles.forEach((r) => {
      newFormData[r] = {};
    });
    reset(newFormData);
  }, [reset, role]);

  const renderForm = () => {
    switch (role) {
      case "business":
        return (
          <BusinessRoleDetails
            register={register}
            errors={errors}
            businessTypes={businessTypes}
          />
        );
      case "supplier":
        return <SupplierRoleDetails register={register} errors={errors} />;
      default:
        break;
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
      <Card>
        {renderForm()}

        <div className="btn btn-sm btn-primary w-fit">
          <input type="submit" value="Continue" />
          <HiArrowSmallRight />
        </div>
      </Card>
    </form>
  );
};
