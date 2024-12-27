"use server";
import { Resend } from "resend";
import { basePartnerSchema } from "@/lib/schema";
import PartnerEmail from "@/emails/partners";
import { FormInputType } from "@/components/shared/partners/type";
import PartnerMessage from "@/emails/partner-message";

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(data: FormInputType) {
  const result = basePartnerSchema.safeParse(data)

  if (result.success) {
    const { name, email } = result.data
    try {
      const data = await resend.emails.send({
        from: `Sahil <${process.env.RESEND_FROM_DOMAIN_EMAIL}>`,
        to: [email],
        replyTo: `${process.env.RESEND_REPLY_TO_EMAIL}`,
        subject: 'Partnering with Sahil',
        text: `Name: ${name}\nEmail: ${email}`,
        react: PartnerEmail({ name })
      })
      return { success: true, data }
    } catch (error) {
      return { success: false, error }
    }
  }

  if (result.error) {
    return { success: false, error: result.error.format() }
  }
}

export async function storeUserDetails(data: FormInputType) {
  const result = basePartnerSchema.safeParse(data)
  
  if (result.success) {
    const { 
      name, 
      email, 
      phoneNumber, 
      companyName, 
      supplyDetails, 
      vehicleDetails 
    } = result.data
    
    try {
      const data = await resend.emails.send({
        from: `Sahil <${process.env.RESEND_FROM_DOMAIN_EMAIL}>`,
        to: `${process.env.RESEND_TO_EMAIL}`,
        subject: `New Partner Submission from ${name}`,
        react: PartnerMessage({ 
          name, 
          email, 
          phoneNumber, 
          companyName, 
          supplyDetails, 
          vehicleDetails 
        })
      })
      return { success: true, data }
    } catch (error) {
      return { success: false, error }
    }
  }
  if (result.error) {
    return { success: false, error: result.error.format() }
  }
}
