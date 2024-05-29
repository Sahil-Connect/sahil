import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import BusinessPreference from "./preference/BusinessPreference";
import SupplierPreference from "./preference/SupplierPreference";
import { useOnBoardingFormStore } from "@sahil/lib/hooks/formStores/useOnBoardingFormStore";
import { HiArrowSmallRight } from "react-icons/hi2";
import { Card } from "ui";

const contactMethods = ["email", "phone"];
const deliveryMethods = ["pick-up", "delivery"];
const paymentMethods = ["cash", "credit"];

const business = z
  .object({
    contactMethod: z
      .string()
      .refine(
        (value) => contactMethods.includes(value),
        "Invalid contact method"
      ),
    deliveryMethod: z
      .string()
      .refine(
        (value) => deliveryMethods.includes(value),
        "Invalid delivery method"
      ),
    paymentMethod: z
      .string()
      .refine(
        (value) => paymentMethods.includes(value),
        "Invalid payment method"
      ),
  })
  .optional();

const supplier = z
  .object({
    categories: z.array(z.string()).max(3, "Maximum of 3 categories!"),
  })
  .optional();

const preferenceSchemas = z.object({
  business,
  supplier,
});

type PreferencesProps = {
  navigateToNextStep: (step: string) => void;
};

export const Preferences = ({ navigateToNextStep }: PreferencesProps) => {
  const { updateStepFormData, formData } = useOnBoardingFormStore(
    (state) => state
  );
  const role = formData.role as "supplier" | "business";
  const schema = z.object({ [role]: preferenceSchemas.shape[role] });
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

    updateStepFormData({
      [role]: {
        ...(formData[role] as Object),
        preference: validatedInput[role],
      },
    });
    navigateToNextStep("summary");
  };

  console.log(formData, errors);

  const renderForm = () => {
    switch (role) {
      case "business":
        return (
          <BusinessPreference
            register={register}
            errors={errors}
            methods={{
              contact: contactMethods,
              delivery: deliveryMethods,
              payment: paymentMethods,
            }}
          />
        );
      case "supplier":
        return <SupplierPreference register={register} errors={errors} />;
      default:
        break;
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
      <Card className="space-y-4">
        {renderForm()}

        <div className="btn btn-sm btn-primary w-fit">
          <input type="submit" value="Continue" />
          <HiArrowSmallRight />
        </div>
      </Card>
    </form>
  );
};
