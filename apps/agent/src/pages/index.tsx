import { Inter } from "next/font/google";
// import { Button } from "ui";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="space-y-4">
        <div className="flex justify-between">
          <div>
            <h1 className="text-3xl">Hi, Keji Lumori</h1>
            <p>Wednesday, 23rd Aug</p>
          </div>
          <div className="flex gap-2">
            <button className="btn btn-sm">New Order</button>
            <div className="dropdown dropdown-hover">
              <label tabIndex={0} className="btn btn-sm btn-primary">
                Register Customer
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 my-2"
              >
                <li>
                  <a>Business</a>
                </li>
                <li>
                  <a>Supplier</a>
                </li>
              </ul>
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
