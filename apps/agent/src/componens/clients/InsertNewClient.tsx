import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  businessName: string;
};

export const InsertNewClient = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full max-w-xs"
        defaultValue="test"
        {...register("businessName")}
      />
    </form>
  );
};
