import { Avatar, Card, IconButton } from "ui";
import { HiOutlinePlusCircle, HiArrowSmallRight } from "react-icons/hi2";
import Link from "next/link";

const suppliers = [
  {
    id: 1,
    name: "Energi Dealers",
    avatar:
      "https://res.cloudinary.com/dwacr3zpp/image/upload/v1699295129/138b9b22dbc85be57c3898716fcdfd4c.jpg",
  },
  {
    id: 2,
    name: "Twins Construction",
    avatar:
      "https://res.cloudinary.com/dwacr3zpp/image/upload/v1699295129/138b9b22dbc85be57c3898716fcdfd4c.jpg",
  },
];
export const SuppliersOverview = () => {
  return (
    <div className="space-y-2 basis-2/5 grow">
      <div className="flex items-center justify-between">
        <div className="flex gap-2 items-center">
          <h3 className="text-lg">Suppliers</h3>
          <div className="badge badge-accent">9 suppliers</div>
        </div>
        <Link href="/suppliers" className="btn btn-xs btn-outline">
          View All <HiArrowSmallRight />
        </Link>
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
  );
};
