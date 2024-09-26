import { UserOverview } from "./UserOverview";
import { UsersToolbar } from "./UsersToolbar";

const users = [
  {
    id: 1,
    name: "John Doe",
    avatar: "https://avatars.dicebear.com/api/initials/JD.svg",
  },
  {
    id: 2,
    name: "John Doe",
    avatar: "https://avatars.dicebear.com/api/initials/JD.svg",
  },
  {
    id: 3,
    name: "John Doe",
    avatar: "https://avatars.dicebear.com/api/initials/JD.svg",
  },
];

export const ListUsers = () => {
  return (
    <section className="space-y-2">
      <UsersToolbar />
      <div className="space-y-2">
        {users.map((user) => (
          <UserOverview key={user.id} user={user} />
        ))}
      </div>
    </section>
  );
};
