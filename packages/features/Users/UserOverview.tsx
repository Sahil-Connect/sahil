import { FC } from "react";
import { Avatar, Card } from "ui";
import { Users } from "@sahil/lib/graphql/__generated__/graphql";
import Link from "next/link";

type Props = {
  user: Users;
} & {
  avatar?: string;
};

export const UserOverview: FC<Props> = ({ user }) => {
  return (
    <Card>
      <div className="flex items-center gap-4">
        {user?.avatar && <Avatar src={user?.avatar} alt={user.name} />}
        <h3>
          <Link href={`/users/${user.id}`}>{user.name}</Link>
        </h3>
      </div>
    </Card>
  );
};
