import { ListBusinesses } from "@/components/Businesses/ListBusinesses";
import { useRouter } from "next/router";

export default function Business() {
  const router = useRouter();
  return (
    <main className="min-h-screen p-8">
      <div className="space-y-4">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl">Partner Businesses</h1>
            <p>
              Users can register through agents, an app, or USSD codes and set
              delivery preferences.
            </p>
            <p></p>
          </div>
          <div>
            <button className="btn btn-sm btn-primary" onClick={() => router.push("/businesses/new/basic_info")}>Register Business</button>
          </div>
        </div>
        <ListBusinesses />
      </div>
    </main>
  );
}
