"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema, mappedVehicleStatuses } from "@/lib/schema";
import { Input, Select } from "../Form";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { FormInputType } from "./type";

export const PartnerCourier = () => {
  const {
    register, 
    handleSubmit, 
    reset, 
    formState: {errors}
  } = useForm<FormInputType>({
    resolver: zodResolver(formSchema),
  })

  const vehicleStatusOptions = Object.entries(mappedVehicleStatuses).map(
    ([value, label]) => ({ value, label })
  )

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
        <Select 
          label="Do you own a vehicle?"
          name="vehicleStatus"
          register={register}
          errors={errors}
          options={vehicleStatusOptions}
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
