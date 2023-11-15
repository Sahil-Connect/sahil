import { FC, Fragment } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { Card } from "../Card";
import type { ApolloError } from "@apollo/client";
import Image from "next/image";

type ListAsyncResultProps = {
  heading?: string;
  message?: string;
};

export const ListErrorState: FC<ListAsyncResultProps> = ({
  heading,
  message,
}) => (
  <Card title={heading} titleSize="sm">
    <p>{message}</p>
    <div className="card-actions">
      <button className="btn btn-sm btn-secondary">Reload</button>
      <button className="btn btn-sm btn-outline">Go Back</button>
    </div>
  </Card>
);
