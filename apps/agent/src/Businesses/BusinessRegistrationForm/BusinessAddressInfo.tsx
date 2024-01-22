import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/router";
import { z } from "zod";
import { Card, FormControl } from "ui";
import { HiArrowSmallLeft, HiArrowSmallRight } from "react-icons/hi2";

const businessAddressSchema = z.object({
  streetName: z.string().min(2, { message: "Must be more than 2 characters" }),
});

type FormData = z.infer<typeof businessAddressSchema>;

export const BusinessAddressInfo = () => {
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const validatedInput = businessAddressSchema.parse(data);
  };
  return (
    <Card title="Address Information">
      <FormControl label="Street Address">
        <input
          type="text"
          className="input input-sm input-bordered w-full bg-gray-100"
          placeholder="Keji's Foods"
        />
      </FormControl>
      <FormControl label="Building">
        <input
          type="text"
          className="input input-sm input-bordered w-full bg-gray-100"
          placeholder="Keji's Foods"
        />
      </FormControl>
      <FormControl label="Building">
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
  );
};
