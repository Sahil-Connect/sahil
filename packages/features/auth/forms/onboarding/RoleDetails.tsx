import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { useOnBoardingFormStore } from "@sahil/lib/hooks/formStores/useOnBoardingFormStore";
import BusinessRoleDetails from "./role/BusinessRoleDetails";
import { SupplierRoleDetails } from "./role/SupplierRoleDetails";
import { Card } from "ui";
import { HiArrowSmallRight } from "react-icons/hi2";

const business = z.object({
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

const supplier = z.object({
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

const roleSchemas = z.object({
  business,
  supplier,
});

type RoleDetailsProps = {
  navigateToNextStep: (step: string) => void;
};

export const RoleDetails = ({ navigateToNextStep }: RoleDetailsProps) => {
  const { updateStepFormData, formData } = useOnBoardingFormStore(
    (state) => state
  );
  const role = formData.role as "supplier" | "business";
  const schema = z.object({ [role]: roleSchemas.shape[role] });
  type FormData = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const validatedInput = schema.parse(data);

    updateStepFormData(validatedInput);
    navigateToNextStep("preferences");
  };

  console.log(formData, errors);

  const renderForm = () => {
    switch (role) {
      case "business":
        return <BusinessRoleDetails register={register} errors={errors} />;
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
