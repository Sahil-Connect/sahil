import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/router";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
// import { useBusinessFormStore } from "@/hooks/useBusinessFormStore";
import { Card, FormControl } from "ui";
import { HiArrowSmallLeft, HiArrowSmallRight } from "react-icons/hi2";

const businessInfoSchema = z.object({
  name: z.string().min(2, { message: "Must be more than 2 characters" }),
});

type FormData = z.infer<typeof businessInfoSchema>;

export const BusinessInfo = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(businessInfoSchema),
  });

  const router = useRouter();

  // const { formData } = useBusinessFormStore((state) => state);
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const validatedInput = businessInfoSchema.parse(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
      <Card title="Business Info" titleSize="sm">
        <FormControl label="Name of your business">
          <input
            type="text"
            className="input input-sm input-bordered w-full bg-gray-100"
            placeholder="Keji's Foods"
          />
        </FormControl>
        <div className="btn btn-sm btn-primary w-fit">
          <input type="submit" value="Continue" />
          <HiArrowSmallRight />
        </div>
      </Card>
    </form>
  );
};
