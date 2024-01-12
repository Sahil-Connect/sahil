import type { CodegenConfig } from '@graphql-codegen/cli';

const HASURA_GRAPHQL_ADMIN_SECRET = ""
const HASURA_GRAPHQL_ENDPOINT = "";

const config: CodegenConfig = {
  overwrite: true,
  schema: [HASURA_GRAPHQL_ENDPOINT,
  {
    [HASURA_GRAPHQL_ENDPOINT]: {
      headers: {
        "x-hasura-access-key": HASURA_GRAPHQL_ADMIN_SECRET,
      },
    },
  }
],
  documents: [
    "packages/lib/graphql/**/*.{ts,tsx}",
    "packages/lib/graphql/queries/mutations/!payments.{ts,tsx}",
  ],
  ignoreNoDocuments: true,
  generates: {
    './packages/lib/graphql/__generated__/': {
      preset: 'client',
      presetConfig: {
        gqlTagName: "gql",
      }
    }
  }
};

export default config;
