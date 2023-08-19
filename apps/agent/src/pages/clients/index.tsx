import { ListClients } from "@/components/clients/ListClients";
import { InsertNewClient } from "@/components/clients/InsertNewClient";

export default function Business() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <div className="space-y-2">
          <div className=" space-y-2">
            <h1 className="text-xl">Register, Business</h1>
            <p>
              This form is designed to gather essential information about your
              business, ensuring a seamless integration into our platform.
            </p>
          </div>
          <InsertNewClient />
        </div>
        <ListClients />
      </div>
    </main>
  );
}
