import { SendVerificationRequestParams } from "next-auth/providers/email";
import { sendEmail } from "@sahil/lib/mailer";

export const sendVerificationRequest = async (
  params: SendVerificationRequestParams
) => {
  const {
    identifier: email,
    url,
    provider: { server, from },
  } = params;
  // Parse the URL to extract custom parameters
  const parsedUrl = new URL(url);
  const token = parsedUrl.searchParams.get("token");
  const role = parsedUrl.searchParams.get("role");

  // Generate a new URL based on the role
  let customUrl;
  switch (role) {
    case "admin":
      customUrl = `https://admin.yourapp.com/auth/verify?token=${token}`;
      break;
    case "user":
      customUrl = `https://user.yourapp.com/auth/verify?token=${token}`;
      break;
    default:
      customUrl = `https://default.yourapp.com/auth/verify?token=${token}`;
  }

  await sendEmail({
    to: email,
    from,
    subject: "Your sign-in link",
    text: `Click the following link to sign in: ${customUrl}`,
    html: `<p>Click the following link to sign in:</p><p><a href="${customUrl}">${customUrl}</a></p>`,
  });
};
