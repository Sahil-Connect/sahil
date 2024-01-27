import { graphQLClient } from "@sahil/lib/graphql/graphql-request";
import { hasuraAdminSecret, hasuraEndpoint } from "../config";

const endpoint = hasuraEndpoint;
const token = "";

export const client = graphQLClient(endpoint, {
  headers: {
    authorization: token,
    "x-hasura-admin-secret": hasuraAdminSecret,
    "x-hasura-role": "user",
  },
});
