import { request, gql } from "graphql-request";
import { GraphQLClient } from "graphql-request";

type GraphQLClientOptions = {
  headers?: {
    authorization?: string;
    "x-hasura-admin-secret"?: string;
    "x-hasura-role"?: string;
  };
};

export const graphQLClient = (
  endpoint: string,
  options: GraphQLClientOptions = {}
) => {
  return new GraphQLClient(endpoint, {
    headers: {
      ...options.headers,
    },
  });
};
