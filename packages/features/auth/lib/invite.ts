import { request } from "graphql-request";
import { SendVerificationRequestParams } from "next-auth/providers/email";
import { GET_LATEST_USER_INVITE } from "@sahil/lib/graphql";
import { sendEmail } from "@sahil/lib/mailer";
import { capitalizeFirstLetters } from "@sahil/lib";

interface UserProps {
  name: string;
  email: string;
  role: string;
}

const HASURA_ENDPOINT = process.env.NEXT_PUBLIC_HASURA_GRAPHQL_ENDPOINT!;
const HASURA_ADMIN_SECRET = {
  "x-hasura-admin-secret": process.env.NEXT_PUBLIC_HASURA_GRAPHQL_ADMIN_SECRET!,
};

export const sendVerificationRequest = async (
  params: SendVerificationRequestParams
): Promise<void> => {
  const {
    identifier: email,
    url,
    provider: { from },
  } = params;

  const invite = await fetchInvite(email);
  if (!invite) {
    console.error(`Invite not found for email: ${email}`);
    return;
  }

  const { name, role } = invite;
  const customUrl = generateCustomUrl(url, role);
  const userProps: UserProps = { name, email, role };

  console.log("Custom URL:", customUrl);
  await sendVerificationEmail(userProps, from, customUrl);
};

const fetchInvite = async (email: string): Promise<any | null> => {
  try {
    const { user_invites } = await request<any>(
      HASURA_ENDPOINT,
      GET_LATEST_USER_INVITE,
      { email },
      HASURA_ADMIN_SECRET
    );
    return user_invites[0];
  } catch (error) {
    console.error("Failed to fetch invite:", error);
    return null;
  }
};

const generateCustomUrl = (url: string, role: string): string => {
  const [, params] = url.split("?");

  return `http://localhost:3000/api/auth/callback/email?${params}`;
};

const sendVerificationEmail = async (
  { name, email }: UserProps,
  from: string,
  customUrl: string
): Promise<void> => {
  try {
    await sendEmail({
      to: email,
      from: `Sahil <${from}>`,
      subject: `You've been invited to Sahil`,
      text: `Click the following link to sign in: ${customUrl}`,
      html: generateEmailHtml(name, customUrl),
    });
  } catch (error) {
    console.error("Failed to send email:", error);
  }
};

const generateEmailHtml = (name: string, url: string): string => `
  <div style="text-align: center;">
    <h1>Welcome to Sahil ${capitalizeFirstLetters(name)}!</h1>
    <p>Click the following link to sign in:</p>
    <a href="${url}" style="display: inline-block; padding: 10px 20px; color: #fff; background-color: #067a46; border-radius: 5px; text-decoration: none;">Sign In</a>
  </div>
`;
