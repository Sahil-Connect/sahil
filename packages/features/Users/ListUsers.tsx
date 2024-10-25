import { UserOverview } from "./UserOverview";
import { UsersToolbar } from "./UsersToolbar";
import {  useFetchUsers} from "@sahil/lib/hooks/users";


export const ListUsers = () => {
  const { data: users, loading, error } = useFetchUsers();
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <section className="space-y-2">
      <UsersToolbar />
      <div className="space-y-2">
        {users?.map((user) => (
          <UserOverview key={user.id} user={user} />
        ))}
      </div>
    </section>
  );
};