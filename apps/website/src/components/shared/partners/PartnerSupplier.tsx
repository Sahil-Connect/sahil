"use client";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { basePartnerSchema } from "@/lib/schema";
import { Input, TextArea } from "../Form";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { FormInputType } from "./type";
import { sendEmail, storeUserDetails } from "@/app/_action";

export const PartnerSupplier = () => {
  const {
    register, 
    handleSubmit, 
    reset, 
    formState: {errors, isSubmitting}
  } = useForm<FormInputType>({
    resolver: zodResolver(basePartnerSchema),
  })

  const [submissionStatus, setSubmissionStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({
    type: null,
    message: ''
  });

  // onSubmit function that takes 2 functions
  const onSubmit: SubmitHandler<FormInputType> = async data => {
    setSubmissionStatus({ type: null, message: '' });

    try {
      // first, send email via Resend
      const resendResult = await sendEmail(data);
      // store user details
      const storeResult = await storeUserDetails(data);

      if (resendResult?.success && storeResult) {
        setSubmissionStatus({
          type: 'success',
          message: 'Message sent successfully!'
        });
        reset();
        return;
      }

      setSubmissionStatus({
        type: 'error',
        message: 'Error sending message. Please try again.'
      });
    } catch (error) {
      setSubmissionStatus({
        type: 'error',
        message: 'An unexpected error occurred.'
      });
    }
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
      {submissionStatus.type && (
        <div 
          className={`
            p-4 rounded-md my-4
            ${submissionStatus.type === 'success' 
              ? 'bg-green-100 text-green-800' 
              : 'bg-red-100 text-red-800'}
          `}
        >
          {submissionStatus.message}
        </div>
      )}
      <div className="mt-8 flex items-center md:justify-end">
        <button
          type="submit"
          disabled={isSubmitting}
          className={`
            group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm text-white font-semibold transition-colors
            ${
              isSubmitting
                ? 'bg-gray-400 text-white cursor-not-allowed'
                : 'bg-primary hover:bg-secondary'
            }
          `}
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
          <span className="relative flex items-center justify-center rounded-full">
            <HiOutlineArrowUpRight className={`transition-transform ${isSubmitting ? '' : 'group-hover:rotate-45'}`} />
          </span>
        </button>
      </div>
    </form>
  )
}
