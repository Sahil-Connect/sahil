import { useGetUsers } from "@/hooks/users";

export default function Profile() {
  const { error, data, loading } = useGetUsers();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h3>Profile Page!</h3>
    </main>
  );
}
