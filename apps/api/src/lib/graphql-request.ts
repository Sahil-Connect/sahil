import { graphQLClient } from "@sahil/lib/graphql/graphql-request";
import { hasuraAdminSecret, hasuraEndpoint } from "../config";

const endpoint = hasuraEndpoint;

export const client = graphQLClient(endpoint, {
  headers: {
    authorization: `Bearer MY_TOKEN`,
    "x-hasura-admin-secret": hasuraAdminSecret,
    "x-hasura-role": "user",
  },
});
