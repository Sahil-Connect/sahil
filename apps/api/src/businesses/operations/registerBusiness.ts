import { z } from "zod";
import { gql } from "graphql-request";

import { client } from "../../lib/graphql-request";

const query = gql`
  query getBusinesses {
    business {
      created_at
      id
      updated_at
      name
    }
  }
`;

export const businessSchema = z.object({
  name: z.string(),
});

export type BusinessAttributes = z.infer<typeof businessSchema>;

export const registerBusiness = async (business: BusinessAttributes) => {
  const data = await client.request(query);
  console.log(business);
  console.log(data);
  return business;
};
