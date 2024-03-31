import { HiOutlineClock, HiOutlineArrowLongDown } from "react-icons/hi2";

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

export const TableRow = ({ row }) => {
  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>

      <td>
        <div className="flex items-center gap-3">
          <div>
            <div className="font-bold">{row.name}</div>
            <div className="text-sm opacity-50">{row.address}</div>
          </div>
        </div>
      </td>
      <td>{row.source}</td>
      <td>{row.createdAt}</td>
      <th>
        <button className="btn btn-info btn-sm">
          <HiOutlineClock /> {row.status}
        </button>
      </th>
    </tr>
  );
};

export const TableHead = () => {
  return (
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>
          Name
        </th>
        <th>
          Source
        </th>
        <th className="flex items-center gap-2">
          Date
        </th>
        <th className="flex items-center gap-2">
          Status
        </th>
      </tr>
    </thead>
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

export const TableFooter = () => {
  return (
    <tfoot>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </tfoot>
  );
};

export const Table = () => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <TableHead />
        <tbody>
          {orders.map((order) => (
            <TableRow key={order.id} row={order} />
          ))}
        </tbody>
      </table>
      <TablePagination />
    </div>
  );
};
