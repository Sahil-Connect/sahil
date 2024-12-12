"use client";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema, mappedVehicleStatuses } from "@/lib/schema";
import { Input, Select } from "../Form";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { FormInputType } from "./type";
import { sendEmail } from "@/app/_action";
import emailjs from '@emailjs/browser';

export const PartnerCourier = () => {
  const {
    register, 
    handleSubmit, 
    reset, 
    formState: {errors, isSubmitting}
  } = useForm<FormInputType>({
    resolver: zodResolver(formSchema),
  })

  const [submissionStatus, setSubmissionStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({
    type: null,
    message: ''
  });

  const vehicleStatusOptions = Object.entries(mappedVehicleStatuses).map(
    ([value, label]) => ({ value, label })
  )

  // onSubmit function that takes 2 functions
  const onSubmit: SubmitHandler<FormInputType> = async data => {
    setSubmissionStatus({ type: null, message: '' });

    try {
      // first, send email via Resend
      const resendResult = await sendEmail(data);
      // then, send email via Email.js
      const emailJsResult = await sendEmailViaEmailJs(data);

      if (resendResult?.success && emailJsResult) {
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

  // helper function to send email via Email.js
  const sendEmailViaEmailJs = async (data: FormInputType): Promise<boolean> => {
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID_BUSINESS!,
        {
          // map form data to Email.js template fields
          user_name: data.name,
          user_email: data.email,
          user_phone: data.phoneNumber.toString(),
          user_message: `Vehicle Status: ${data.vehicleStatus}`
        },
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY!,
        }
      );
      return true;
    } catch (error) {
      console.error('Email.js send error:', error);
      return false;
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
        <Select 
          label="Do you own a vehicle?"
          name="vehicleStatus"
          register={register}
          errors={errors}
          options={vehicleStatusOptions}
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
            group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors
            ${
              isSubmitting
                ? 'bg-gray-400 text-black cursor-not-allowed'
                : 'bg-primary text-white hover:bg-secondary'
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
