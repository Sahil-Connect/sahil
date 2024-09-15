import { ChangeEventHandler, Fragment } from "react";
import { JoinGrid } from "ui";
import { HiArrowSmallLeft, HiArrowSmallRight } from "react-icons/hi2";

type ListHeaderProps = {
  title?: string;
  size?: number | null;
  sizeLabel?: string;
  children: React.ReactNode;
};

export const ListHeader: React.FC<ListHeaderProps> = ({
  title,
  size,
  sizeLabel,
  children,
}) => {
  return (
    // <div className="flex items-center justify-center md:justify-between">
    <div className="w-full flex items-center justify-between">
      <div className="flex gap-2 items-center">
        {title && <h3 className="text-lg">{title}</h3>}
        {(size || sizeLabel) && (
          <div className="badge badge-accent">
            {size} {sizeLabel}
          </div>
        )}
      </div>
      {children}
    </div>
  );
};

type ListPaginationProps = {
  onPreviousPage: () => void;
  onNextPage: () => void;
  isNextDisabled?: boolean;
  isPrevDisabled?: boolean;
};

export const ListPagination: React.FC<ListPaginationProps> = ({
  onPreviousPage,
  onNextPage,
  isNextDisabled = false,
  isPrevDisabled = false,
}) => {
  return (
    <JoinGrid>
      <button
        className="join-item btn btn-sm"
        title="Left"
        onClick={onPreviousPage}
        disabled={isPrevDisabled}
      >
        <HiArrowSmallLeft />
      </button>
      <button
        className="join-item btn btn-sm"
        title="Right"
        onClick={onNextPage}
        disabled={isNextDisabled}
      >
        <HiArrowSmallRight />
      </button>
    </JoinGrid>
  );
};

type ListSortProps<T> = {
  options: T[];
  defaultValue?: string;
  onChange: ChangeEventHandler<HTMLSelectElement>;
  renderItem: (item: T) => JSX.Element;
};

export const ListSort = <T,>({
  options,
  defaultValue,
  onChange,
  renderItem,
}: ListSortProps<T>) => {
  return (
    <select
      onChange={onChange}
      className="select focus:outline-none select-bordered select-sm max-w-xs"
      title="select"
    >
      <option disabled value="">
        {defaultValue || "Sort"}
      </option>
      {options.map((item: any, index: number) => (
        <Fragment key={index}>{renderItem(item)}</Fragment>
      ))}
    </select>
  );
};
