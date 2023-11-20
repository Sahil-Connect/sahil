import { FC, Fragment } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { Card } from "../Card";
import type { ApolloError } from "@apollo/client";
import Image from "next/image";

type ListAsyncResultProps = {
  heading?: string;
  message?: string;
};

export const ListEmptyState: FC<ListAsyncResultProps> = ({
  heading = "Loading Data",
  message,
}) => (
  <div className="mx-auto w-full">
    <Image
      src="https://res.cloudinary.com/dwacr3zpp/image/upload/v1658948724/inspirers/images/e63b28db-a6fc-4a1c-9b32-2bc14aec6ac3.png"
      alt="Empty"
      height="200"
      width="200"
    />
    <h3 className="text-lg">No Orders Yet</h3>
    <p>
      It looks like this client has not placed any orders through Sahil yet.
    </p>
  </div>
);
