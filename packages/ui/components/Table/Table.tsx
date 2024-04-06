import { HiOutlineClock, HiOutlineArrowLongDown } from "react-icons/hi2";
import { TableFooter } from "./TableFooter";
import { TableRow } from "./TableRow";
import { TableHead } from "./TableHead";

const orders = [
  {
    id: 1,
    name: "Radisson Blu",
    job: "Job",
    favoriteColor: "Red",
    status: "Processing",
    createdAt: "27/03/2024",
    address: "Kigali Heights",
    source: "Direct",
  },
  {
    id: 2,
    name: "Norrsken House",
    job: "Job",
    favoriteColor: "Red",
    status: "Processing",
    createdAt: "27/03/2024",
    address: "Kigali Heights",
    source: "Agent Assisted",
  },
  {
    id: 3,
    name: "KFC",
    job: "Job",
    favoriteColor: "Red",
    status: "Processing",
    createdAt: "27/03/2024",
    address: "Kigali Heights",
    source: "Direct",
  },
];

export const TableControls = () => {
  return (
    <div>
      <div>
        <h3>Hello, World</h3>
      </div>
      <div>
        <button>Sort</button>
      </div>
    </div>
  );
};


export const TablePagination = () => {
  return (
    <div className="join">
      <button className="join-item btn">1</button>
      <button className="join-item btn btn-active">2</button>
      <button className="join-item btn">3</button>
      <button className="join-item btn">4</button>
    </div>
  );
};



export const Table = () => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Name</th>
            <th>Job</th>
            <th>Quantity</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {orders.map(order => <TableRow key={order.id} row={order} /> )}
        </tbody>
        {/* foot */}
        <tfoot>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th></th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};
