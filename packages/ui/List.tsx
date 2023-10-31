import { FC, Fragment } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { Card } from "./Card";

type ListProps<T> = {
  data: T[];
  loading?: boolean;
  renderItem: (item: T) => JSX.Element;
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
  loading,
  renderItem,
}: ListProps<T>) => {
  const [parent, enableAnimations] = useAutoAnimate(/* optional config */);

  if (data?.length === 0) {
    return (
      <div>
        <p>No Data</p>
      </div>
    );
  }
  if (loading) {
    return <ListLoadingState />;
  }
  return (
    <div className="flex flex-wrap gap-2" ref={parent}>
      {data.map((item, index) => (
        <Fragment key={index}>{renderItem(item)}</Fragment>
      ))}
    </div>
  );
};
