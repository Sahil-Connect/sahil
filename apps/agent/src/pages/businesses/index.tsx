import { ListBusinesses } from "@/components/Businesses/ListBusinesses";
import { InsertNewBusiness } from "@/components/Businesses/AddNewBusiness";

export default function Business() {
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
            <button className="btn btn-sm btn-primary">Register New Business</button>
          </div>
        </div>
        <div className="">
          <ListBusinesses />
        </div>
      </div>
    </main>
  );
}
