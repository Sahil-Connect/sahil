import { Card } from "ui";
import { HiPlus } from "react-icons/hi2";

export const UsersToolbar = () => {
  return (
    <Card>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl">UsersToolbar</h1>
        </div>
        <div>
          <button className="btn btn-sm btn-primary">Add User <HiPlus /></button>
        </div>
      </div>
    </Card>
  );
};
