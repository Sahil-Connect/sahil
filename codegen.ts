/* eslint-disable turbo/no-undeclared-env-vars */

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
  documents: "packages/lib/graphql/**/*.ts",
  generates: {
    './packages/lib/graphql/globalTypes.ts': {
      preset: 'client'
    }
  }
};

export default config;
