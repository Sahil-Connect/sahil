import { Card } from "ui";
import {
  HiArrowLeft,
  HiArrowRight,
  HiMinus,
  HiPlus,
  HiOutlineChevronUpDown,
  HiOutlineFunnel,
  HiOutlineShoppingCart,
  HiXMark,
  HiOutlineBanknotes,
  HiArrowPath,
  HiSignalSlash,
  HiOutlineBuildingOffice,
  HiOutlineUsers,
  HiOutlineTruck,
} from "react-icons/hi2";

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl">Hi, Keji Lumori</h1>
          </div>
          <div className="flex gap-2">
            <button className="btn btn-sm">
              <HiPlus /> New Order
            </button>
            <div className="dropdown dropdown-hover">
              <label tabIndex={0} className="btn btn-sm btn-primary">
                <HiOutlineUsers /> Register Customer
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 my-2"
              >
                <li>
                  <a href="/businesses/new/business_info">
                    <HiOutlineBuildingOffice /> Business
                  </a>
                </li>
                <li>
                  <a href="/suppliers/new/business_info">
                    <HiOutlineTruck /> Supplier
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="divider">Wednesday</div>
        <div className="space-y-2">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl">Wednesday, 23rd Aug</h3>
            </div>
          </div>
          <div className="bg-base-200 p-2 rounded-lg flex justify-between items-center">
            <div>
              <div className="badge badge-accent">3 Orders</div>
            </div>
            <div className="flex gap-2">
              <button className="btn btn-sm">Filter</button>
              <button className="btn btn-sm">Sort by</button>
            </div>
          </div>
          <div className="flex gap-2">
            <Card title="Fish 10kgs" titleSize="sm">
              <p>Cheben Gabriel</p>
              <div className="space-y-2">
                <p>Souq Libya --- Midan Jamus </p>
                <div className="badge">
                  <HiOutlineBanknotes /> Cash
                </div>
              </div>
            </Card>
            <Card title="Oil 15L" titleSize="sm">
              <p>Cheben Gabriel</p>
              <div className="space-y-2">
                <p>Souq Libya --- Midan Jamus </p>
                <div className="badge">
                  <HiOutlineBanknotes /> MGurush
                </div>
              </div>
            </Card>
            <Card title="Milk 7L" titleSize="sm">
              <p>Cheben Gabriel</p>
              <div className="space-y-2">
                <p>Souq Libya --- Midan Jamus </p>
                <div className="badge">
                  <HiOutlineBanknotes /> MomoPay
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
