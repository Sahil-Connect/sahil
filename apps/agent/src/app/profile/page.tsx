import {
  OperationVariables,
  useMutation,
  useQuery,
  useSubscription,
  gql,
} from "@apollo/client";
// import { client } from "@/lib/graphql/apolloClient";

const GET_USERS = gql`
  query getUsers {
    users {
      id
      created_at
      role
      name
    }
  }
`;

export default function Profile() {
  const { error, data, loading } = useQuery(GET_USERS);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  console.log(data);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h3>Profile Page!</h3>
    </main>
  );
}
