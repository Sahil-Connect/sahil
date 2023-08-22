import { ListBusinesses } from "@/components/Businesses/ListBusinesses";
import { InsertNewBusiness } from "@/components/Businesses/AddNewBusiness";
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
        <ListBusinesses />
          <div>
          <h3>Register, Business</h3>
          <p>This form is designed to gather essential information about your business, ensuring a seamless integration into our platform.</p>
          </div>
          <InsertNewBusiness />
        </div>
      </div>
    </main>
  );
}
