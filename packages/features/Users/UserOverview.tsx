import { FC } from "react";
import { Avatar, Card } from "ui";
import { Users } from "@sahil/lib/graphql/__generated__/graphql";
import Link from "next/link";


export const UserOverview = ({ user }: any) => {
  return (
    <Card>
      <div className="flex items-center gap-4">
        <h3>
          <Link href={`/users/${user.id}`}>{user.name}</Link>
        </h3>
      </div>
    </Card>
  );
};