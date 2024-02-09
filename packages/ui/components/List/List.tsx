import { FC, Fragment } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { Card } from "../Card";
import type { ApolloError } from "@apollo/client";
import { ListEmptyState } from "./ListEmptyState";

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
        heading="Unable to load products..."
        message="Products aren't loading due to a technical problem on our side. Please
      try again."
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
      className={`grid grid-cols-auto-250 2xl:grid-cols-4 gap-2`}
      ref={parent}
    >
      {data &&
        data.map((item: any, index: number) => (
          <Fragment key={index}>{renderItem(item)}</Fragment>
        ))}
    </div>
  );
};
