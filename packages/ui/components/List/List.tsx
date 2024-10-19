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
  <Card title={heading} titleSize="sm">
    <span className="loading loading-spinner loading-lg"></span>
  </Card>
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
