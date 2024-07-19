import { request } from "graphql-request";
import { SendVerificationRequestParams } from "next-auth/providers/email";
import { GET_LATEST_USER_INVITE, GET_USER_BY_EMAIL } from "@sahil/lib/graphql";
import { sendEmail } from "@sahil/lib/mailer";
import { capitalizeFirstLetters } from "@sahil/lib";
import { URLS } from "@sahil/configs/env";
import { GetUsersQuery } from "@sahil/lib/graphql/__generated__/graphql";

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

  try {
    let user = await fetchUser(email);
    let invite = null;

    if (!user) {
      invite = await fetchInvite(email);
    }

    const role = user ? user.role : invite?.role;
    const customUrl = generateCustomUrl(url, role);

    const userProps: UserProps = {
      name: user ? user.name : invite?.name || "",
      email,
      role: role || "",
    };

    console.log("Custom URL:", customUrl);
    console.log("User Props:", userProps);

    await sendVerificationEmail(userProps, from, customUrl);
  } catch (error) {
    console.error("Error sending verification email:", error);
    throw error;
  }
};

const fetchUser = async (email: string): Promise<any | null> => {
  try {
    const { users } = await request<GetUsersQuery>(
      HASURA_ENDPOINT,
      GET_USER_BY_EMAIL,
      { email },
      HASURA_ADMIN_SECRET
    );
    return users[0];
  } catch (error) {
    console.error("Failed to fetch user:", error);
    return null;
  }
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
  const env = process.env.NODE_ENV || "development";

  const { development, production } = URLS;

  if (env === "development") {
    return `${development}/api/auth/callback/email?${params}`;
  }

  const roleUrls: Record<string, string> = {
    admin: `${production.admin}/auth/callback/email?${params}`,
    agent: `${production.agent}/auth/callback/email?${params}`,
    courier: `${production.courier}/auth/callback/email?${params}`,
    business: `${production.client}/auth/callback/email?${params}`,
    supplier: `${production.client}/auth/callback/email?${params}`,
    user: `${production.client}/auth/callback/email?${params}`,
  };

  // Ensure role defaults to 'user' if not provided or invalid
  const validRole = roleUrls[role] ? role : "user";
  return roleUrls[validRole];
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
