import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { useOnBoardingFormStore } from "@sahil/lib/hooks/formStores/useOnBoardingFormStore";
import BusinessRoleDetails from "./role/BusinessRoleDetails";
import { SupplierRoleDetails } from "./role/SupplierRoleDetails";
import { Card } from "ui";
import { ROLE_DETAILS_SCHEMA } from "./constants";
import { HiArrowSmallRight } from "react-icons/hi2";

type RoleDetailsProps = {
  navigateToNextStep: (step: string) => void;
};

export const RoleDetails = ({ navigateToNextStep }: RoleDetailsProps) => {
  const { updateStepFormData, formData } = useOnBoardingFormStore(
    (state) => state
  );
  const role = formData.role as "supplier" | "business";
  const schema = z.object({ [role]: ROLE_DETAILS_SCHEMA.shape[role] });
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
    navigateToNextStep("schedule");
  };

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
