import { ListClients } from "@/components/clients/ListClients";
import { InsertNewClient } from "@/components/clients/InsertNewClient";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Business() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <div>
        <h3>Hello, Business</h3>
        <button onClick={(e) => signOut()}>Insert</button>
        </div>
        <div>
        <ListClients />
          <div>
          <h3>Register, Business</h3>
          <p>This form is designed to gather essential information about your business, ensuring a seamless integration into our platform.</p>
          </div>
          <InsertNewClient />
        </div>
      </div>
    </main>
  );
}
