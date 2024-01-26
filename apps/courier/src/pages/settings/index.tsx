import { CourierProfileOverview } from "@sahil/features/Couriers/components/CourierProfileOverview";

const courier = {
  name: "Emmanuel",
  avatar: "https://avatars.githubusercontent.com/u/21015204?v=4"
}

export default function Settings() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h3>Settings Page!</h3>
      <CourierProfileOverview courier={courier} />
    </main>
  );
}
