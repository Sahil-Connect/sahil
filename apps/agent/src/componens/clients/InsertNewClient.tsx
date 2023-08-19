import { useForm, SubmitHandler } from "react-hook-form";
import { useRegisterClient } from "@/hooks/clients";
import { useInsertUser } from "@/hooks/users";

type Inputs = {
  businessName: string;
  businessType: string;
};

export const InsertNewClient = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const { insertClient, loading, error } = useRegisterClient();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    insertClient({
      variables: {
        object: {
          name: data.businessName,
          ...data
        },
      },
    });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
      <div className="form-control">
        <input
          type="text"
          placeholder="Business Name"
          className="input input-md input-bordered w-full"
          {...register("businessName")}
        />
      </div>
      <div className="form-control">
        <input
          type="text"
          placeholder="Business Type"
          className="input input-bordered w-full"
          {...register("businessType")}
        />
      </div>
      <input type="submit" className="btn btn-primary" />
    </form>
  );
};
