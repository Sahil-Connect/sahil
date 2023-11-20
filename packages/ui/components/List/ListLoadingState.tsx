import { FC, Fragment } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { Card } from "../Card";
import type { ApolloError } from "@apollo/client";
import Image from "next/image";

type ListAsyncResultProps = {
  heading?: string;
  message?: string;
};

export const ListLoadingState: FC<ListAsyncResultProps> = ({
    heading = 'Loading Data',
    message,
  }) => (
    <Card title={heading} titleSize='sm'>
      <span className='loading loading-spinner loading-lg'></span>
    </Card>
  );
  