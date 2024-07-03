const { ADMIN_URL, AGENT_URL, CLIENT_URL, COURIER_URL, SERVER_URL } =
  process.env;
if (!ADMIN_URL || !AGENT_URL || !CLIENT_URL || !COURIER_URL || !SERVER_URL) {
  throw new Error("Missing required environment variables for Apps url");
}

export const URLS = {
  development: SERVER_URL,
  staging: {},
  production: {
    admin: ADMIN_URL!,
    agent: AGENT_URL!,
    client: CLIENT_URL!,
    courier: COURIER_URL!,
  },
};
