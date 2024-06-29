import { SendVerificationRequestParams } from "next-auth/providers/email";
import { sendEmail } from "@sahil/lib/mailer";
import { capitalizeFirstLetter } from "@sahil/lib";

// interface UserProps {
//   name: string;
//   email: string;
//   role: string;
// }

export const sendVerificationRequest = async (
  params: SendVerificationRequestParams
): Promise<void> => {
  const {
    identifier,
    url,
    provider: { from },
  } = params;
  const parsedUrl = new URL(url);
  const token = parsedUrl.searchParams.get("token");
  const callbackUrl = parsedUrl.searchParams.get("callbackUrl");

  // const userProps = extractUserProps(identifier);
  const customUrl = generateCustomUrl(identifier, token!, callbackUrl!);

  console.log("params:", params);
  console.log("Parsed URL:", parsedUrl);
  console.log("Custom URL:", customUrl);

  await sendVerificationEmail(identifier, from, customUrl);
};

// const extractUserProps = (identifier: string): UserProps => {
//   const [name, email, role] = identifier.split('*');
//   return { name, email, role };
// };

const generateCustomUrl = (
  email: string,
  token: string,
  callbackUrl: string
): string => {
  // const { email, role } = email;
  const params = new URLSearchParams({ token, callbackUrl, email });

  return `http://localhost:3000/api/auth/callback/email?${params}`;
};

const sendVerificationEmail = async (
  email: string,
  from: string,
  customUrl: string
): Promise<void> => {
  await sendEmail({
    to: email,
    from: `Sahil <${from}>`,
    subject: `You've been invited to Sahil`,
    text: `Click the following link to sign in: ${customUrl}`,
    html: generateEmailHtml(customUrl),
  });
};

const generateEmailHtml = (url: string): string => `
  <div style="text-align: center;">
    <h1>Welcome to Sahil!</h1>
    <p>Click the following link to sign in:</p>
    <a href="${url}" style="display: inline-block; padding: 10px 20px; color: #fff; background-color: #067a46; border-radius: 5px; text-decoration: none;">Sign In</a>
  </div>
`;
