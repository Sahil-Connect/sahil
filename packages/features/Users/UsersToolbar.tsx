import { Card } from "ui";
import { HiPlus } from "react-icons/hi2";
import Link from "next/link";

export const UsersToolbar = () => {
  return (
    <Card>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl">Manage Users</h1>
        </div>
        <div>
          <Link className="btn btn-sm btn-primary" href="/users/new">New User <HiPlus /></Link>
        </div>
      </div>
    </Card>
  );
};
