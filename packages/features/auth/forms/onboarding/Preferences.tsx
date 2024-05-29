import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import BusinessPreference from "./preference/BusinessPreference";
import SupplierPreference from "./preference/SupplierPreference";
import { useOnBoardingFormStore } from "@sahil/lib/hooks/formStores/useOnBoardingFormStore";
import { HiArrowSmallRight } from "react-icons/hi2";
import {
  CONTACT_METHODS,
  DELIVERY_METHODS,
  PAYMENT_METHODS,
  PREFERENCE_SCHEMA,
} from "./constants";
import { Card } from "ui";

type PreferencesProps = {
  navigateToNextStep: (step: string) => void;
};

export const Preferences = ({ navigateToNextStep }: PreferencesProps) => {
  const { updateStepFormData, formData } = useOnBoardingFormStore(
    (state) => state
  );
  const role = formData.role as "supplier" | "business";
  const schema = z.object({ [role]: PREFERENCE_SCHEMA.shape[role] });
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
      preference: validatedInput[role],
    });
    navigateToNextStep("summary");
  };

  const renderForm = () => {
    switch (role) {
      case "business":
        return (
          <BusinessPreference
            register={register}
            errors={errors}
            methods={{
              contact: CONTACT_METHODS,
              delivery: DELIVERY_METHODS,
              payment: PAYMENT_METHODS,
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
    <form onSubmit={handleSubmit(onSubmit)}>
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
