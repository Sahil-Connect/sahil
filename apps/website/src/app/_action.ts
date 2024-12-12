"use server";
import { z } from "zod";
import { Resend } from "resend";
import { formSchema } from "@/lib/schema";
import PartnerEmail from "@/emails/partners";

type Inputs = z.infer<typeof formSchema>

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(data: Inputs) {
  const result = formSchema.safeParse(data)

  if (result.success) {
    const { name, email } = result.data
    try {
      const data = await resend.emails.send({
        // from: `Sahil <${process.env.RESEND_FROM_EMAIL}>`,
        from: 'Sahil <onboarding@resend.dev>',
        // to: [email],
        to: ['mabiorduom5@gmail.com'],
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
