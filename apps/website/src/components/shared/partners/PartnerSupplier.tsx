"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "@/lib/schema";
import { Input, TextArea } from "../Form";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { FormInputType } from "./type";

export const PartnerSupplier = () => {
  const {
    register, 
    handleSubmit, 
    reset, 
    formState: {errors}
  } = useForm<FormInputType>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit: SubmitHandler<FormInputType> = data => {
    console.log(data)
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col space-y-8">
        <Input 
          label="Name"
          name="name" 
          register={register}
          placeholder="John Doe"
          errors={errors}
        />
        <div className="grid md:grid-cols-2 gap-3">
          <Input 
            label="Email"
            name="email" 
            register={register}
            placeholder="johndoe@gmail.com"
            errors={errors}
          />
          <Input 
            label="Phone Number"
            name="phoneNumber" 
            type="number"
            register={register}
            placeholder="070*****00"
            errors={errors}
          />
        </div>
        <Input 
          label="Company Name"
          name="companyName" 
          register={register}
          placeholder="John's Supplies Ltd."
          errors={errors}
        />
        <TextArea 
          label="What supplies do you have?"
          name="supplyDetails" 
          placeholder="Eggs, soft drinks, milk..."
          register={register}
          errors={errors}
        />
      </div>
      <div className="mt-8 flex items-center md:justify-end">
        <button
          type="submit" 
          className="group btn btn-primary font-medium text-white rounded-full" 
        >
          Submit
          <span className="relative group flex justify-center items-center rounded-full">
            <HiOutlineArrowUpRight className="group-hover:rotate-45 transition" />
          </span>
        </button>
      </div>
    </form>
  )
}
