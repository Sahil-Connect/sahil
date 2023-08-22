import { Inter } from "next/font/google";
// import { Button } from "ui";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-base-200">
      <div className="space-y-4">
        <div>
          <h1 className="text-3xl">Welcome, Keji Lumori</h1>
          <p>Munuki Market</p>
          <p>Wednesday, 23rd Aug</p>
        </div>
        <div className="flex gap-2 items-start">
          <div className="card card-compact bg-base-100">
            <div className="card-body">
              <div className="space-y-2">
                <h2 className="card-title">Register Business or Supplier</h2>
                <p>
                  Users can register through agents, an app, or USSD codes and
                  set delivery preferences.
                </p>
                <button className="btn btn-sm btn-primary">Proceed</button>
              </div>
            </div>
          </div>

          <div className="card card-compact bg-base-100">
            <div className="card-body">
              <div className="space-y-2">
                <h2 className="card-title">Place Order</h2>
                <p>
                  Users can register through agents, an app, or USSD codes and
                  set delivery preferences.
                </p>
                <button className="btn btn-sm btn-primary">Proceed</button>
              </div>
            </div>
          </div>
          <div className="card card-compact bg-base-100">
            <div className="card-body">
              <div className="space-y-2">
                <h2 className="card-title">Manage Order</h2>
                <p>
                  Users can register through agents, an app, or USSD codes and
                  set delivery preferences.
                </p>
                <button className="btn btn-sm btn-primary">Proceed</button>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-2xl">New Orders</h3>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="card card-compact bg-base-100">
              <div className="card-body">
                <h2 className="card-title">Fish 10kgs</h2>
                <p>Cheben Gabriel</p>
                <div>
                  <p>Souq Libya --- Midan Jamus </p>
                  <p>Cash</p>
                </div>
              </div>
            </div>
            <div className="card card-compact bg-base-100">
              <div className="card-body">
                <h2 className="card-title">Oil 15L</h2>
                <p>Cheben Gabriel</p>
                <div>
                  <p>Souq Libya --- Midan Jamus </p>
                  <p>MGurush</p>
                </div>
              </div>
            </div>
            <div className="card card-compact bg-base-100">
              <div className="card-body">
                <h2 className="card-title">Milk 7L</h2>
                <p>Cheben Gabriel</p>
                <div>
                  <p>Souq Libya --- Midan Jamus </p>
                  <p>MomoPay</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <h3 className="text-2xl">Parcels</h3>
            <p>Shows the items that are currently in store.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
