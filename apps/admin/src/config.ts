import { z } from 'zod';

const envSchema = z.object({
  // Server
  SERVER_URL: z.string().url(),

  // Hasura
  HASURA_GRAPHQL_CORS_DOMAIN: z.string(),
  NEXT_PUBLIC_HASURA_GRAPHQL_ENDPOINT: z.string().url(),
  NEXT_PUBLIC_HASURA_GRAPHQL_ADMIN_SECRET: z.string(),
  NEXT_PUBLIC_HASURA_GRAPHQL_WS: z.string().url(),

  // Auth
  SECRET: z.string(),
  NEXTAUTH_SECRET: z.string(),
  NEXT_PUBLIC_NEXTAUTH_URL: z.string().url(),

  // APIs
  NEXT_PUBLIC_GITHUB_SECRET: z.string(),
  NEXT_PUBLIC_GITHUB_ID: z.string(),
  NEXT_PUBLIC_GOOGLE_SECRET: z.string(),
  NEXT_PUBLIC_GOOGLE_API_KEY: z.string().optional(),
  NEXT_PUBLIC_GOOGLE_ID: z.string(),

  // Database
  POSTGRES_USER: z.string(),
  POSTGRES_PASSWORD: z.string(),
  POSTGRES_DATABASE: z.string(),

  // App URLs
  ADMIN_URL: z.string().url(),
  AGENT_URL: z.string().url(),
  CLIENT_URL: z.string().url(),
  COURIER_URL: z.string().url(),
  API_URL: z.string().url(),

  // Email
  EMAIL_SERVER_USER: z.string(),
  EMAIL_SERVER_PASSWORD: z.string(),
  EMAIL_SERVER_HOST: z.string(),
  EMAIL_SERVER_PORT: z.string(),
  EMAIL_FROM: z.string().email(),
  EMAIL_SERVER: z.string(),
});

const env = envSchema.parse(process.env);

export default env;
