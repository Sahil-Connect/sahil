import { FC, Fragment } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { Card } from "../Card";
import type { ApolloError } from "@apollo/client";
import { ListEmptyState } from "./ListEmptyState";
import { HiOutlineExclamationCircle } from "react-icons/hi2";

type ListProps<T> = {
  data?: T[] | null;
  error?: ApolloError;
  loading?: boolean;
  renderItem: (item: T) => JSX.Element;
  cols?: number;
};

type ListAsyncResultProps = {
  heading?: string;
  message?: string;
};

const Skeleton = () => {
  return (
    <div className="flex w-52 flex-col gap-4">
      <div className="skeleton h-32 w-full"></div>
      <div className="skeleton h-4 w-28"></div>
      <div className="skeleton h-4 w-full"></div>
      <div className="skeleton h-4 w-full"></div>
    </div>
  );
};

export const ListErrorState: FC<ListAsyncResultProps> = ({
  heading = "An error occurred",
  message = "We're having trouble loading the data. Please try again later.",
}) => (
  <Card title={heading} titleSize="sm">
    <div className="flex flex-col items-center">
      <span className="text-4xl mb-4">
        <HiOutlineExclamationCircle />
      </span>
      <p>{message}</p>
      <div className="card-actions mt-4">
        <button className="btn btn-sm btn-secondary">Reload</button>
        <button className="btn btn-sm btn-outline">Go Back</button>
      </div>
    </div>
  </Card>
);

export const ListLoadingState: FC<ListAsyncResultProps> = ({
  heading = "Loading Data",
  message,
}) => (
  <div className="w-full">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
      {[1, 2, 3].map((i) => (
        <div key={i} className="flex w-full flex-col gap-4 p-4 border rounded-lg">
          <div className="skeleton h-32 w-full"></div>
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>
      ))}
    </div>
  </div>
);

export const List = <T extends unknown>({
  data,
  error,
  loading,
  renderItem,
  cols = 3,
}: ListProps<T>) => {
  const [parent, enableAnimations] = useAutoAnimate(/* optional config */);

  if (error) {
    return (
      <ListErrorState
        heading="Unable to load data"
        message="We're experiencing technical difficulties. Please try again later."
      />
    );
  }
  if (data?.length === 0) {
    return <ListEmptyState />;
  }
  if (loading) {
    return <ListLoadingState />;
  }
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2`}
      ref={parent}
    >
      {data &&
        data.map((item: any, index: number) => (
          <Fragment key={index}>{renderItem(item)}</Fragment>
        ))}
    </div>
  );
};