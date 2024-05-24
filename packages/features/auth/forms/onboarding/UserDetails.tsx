import { z } from "zod";
import { useRouter } from "next/router";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { Card, Input } from "ui";
import { HiArrowSmallRight } from "react-icons/hi2";
import { useOnBoardingFormStore } from "@sahil/lib/hooks/formStores/useOnBoardingFormStore";

const userSchema = z.object({
  name: z.string().min(2, { message: "Must be more than 2 characters" }),
  email: z.string().min(2, { message: "Must be more than 2 characters" }),
});

type FormData = z.infer<typeof userSchema>;

type UserInformationProps = {
  navigateToNextStep: (step: string) => void;
};

export const UserDetails = ({ navigateToNextStep }: UserInformationProps) => {
  const { goToStep, updateStepFormData, formData } = useOnBoardingFormStore(
    (state) => state
  );

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    // @ts-ignore
    resolver: zodResolver(userSchema),
  });

  const router = useRouter();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const validatedInput = userSchema.parse(data);

    updateStepFormData(validatedInput);
    navigateToNextStep("role_details");
  };
  return (
    <div className="p-4">
      <h1 className="text-2xl">Welcome to Sahil</h1>
      <form className="space-y-2" onSubmit={handleSubmit(onSubmit)}>
        <Card>
          <Input
            name="name"
            label="Your name"
            placeholder="Keji Lumuro"
            register={register}
            errors={errors}
          />
          <Input
            name="email"
            type="email"
            label="Your Email"
            placeholder="keji@sahil.app"
            register={register}
            errors={errors}
          />
        </Card>
        <div className="btn btn-sm btn-primary w-fit">
          <input type="submit" value="Continue" />
          <HiArrowSmallRight />
        </div>
      </form>
    </div>
  );
};
