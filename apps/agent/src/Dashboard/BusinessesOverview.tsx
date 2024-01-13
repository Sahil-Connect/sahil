import { Avatar, Card, IconButton } from "ui";
import { HiOutlinePlusCircle, HiArrowSmallRight } from "react-icons/hi2";

const businesses = [
  {
    id: 1,
    name: "Notos Bar & Grill",
    avatar:
      "https://res.cloudinary.com/dwacr3zpp/image/upload/v1699295128/Chef-restaurant-logo-illustrations-template-on-transparent-background-PNG.png",
  },
  {
    id: 2,
    name: "Amigos Bar & Restaurant",
    avatar:
      "https://res.cloudinary.com/dwacr3zpp/image/upload/v1699295128/Chef-restaurant-logo-illustrations-template-on-transparent-background-PNG.png",
  },
];
export const BusinessesOverview = () => {
  return (
    <div className="space-y-2 basis-2/5 grow">
      <div className="flex items-center justify-between">
        <div className="flex gap-2 items-center">
          <h3 className="text-lg">Businesses</h3>
          <IconButton icon={HiOutlinePlusCircle} title="Add" />
          <div className="badge badge-accent">34 businesses</div>
        </div>
        <button className="btn btn-xs">
          View All <HiArrowSmallRight />
        </button>
      </div>
      <div className="flex gap-2">
        {businesses.map((business) => (
          <div className="basis-1/4" key={business.id}>
            <Card>
              <div className="flex gap-4 items-center">
                <Avatar alt="Hello" src={business.avatar} />
                <h3 className="card-title text-sm">{business.name}</h3>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};
