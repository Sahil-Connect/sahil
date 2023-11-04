import { Avatar, Card, IconButton } from "ui";
import { HiOutlinePlusCircle } from "react-icons/hi2";

const suppliers = [
  {
    id: 1,
    name: "Energi Dealers",
    avatar: "https://avatars.githubusercontent.com/u/21015204?v=4",
  },
  {
    id: 2,
    name: "Twins Construction",
    avatar: "https://avatars.githubusercontent.com/u/91534137?v=4",
  },
];
export const SuppliersOverview = () => {
    return (
        <div className="space-y-2 basis-2/5 grow">
        <div className="flex items-center justify-between">
          <div className="flex gap-2 items-center">
            <h3 className="text-lg">Suppliers</h3>
            <IconButton icon={HiOutlinePlusCircle} title="Add" />
            <div className="badge badge-accent">9 suppliers</div>
          </div>
          <button className="btn btn-xs btn-secondary">View All</button>
        </div>
        <div className="flex gap-2">
        {suppliers.map((supplier) => (
          <div className="basis-1/4" key={supplier.id}>
            <Card>
              <div className="flex gap-4 items-center">
                <Avatar alt="Hello" src={supplier.avatar} />
                <h3 className="card-title text-sm">{supplier.name}</h3>
              </div>
            </Card>
          </div>
        ))}
        </div>
      </div>
    )
}