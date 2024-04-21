import { ReactNode } from "react";
import { JoinGrid } from "../JoinGrid";
import { HiArrowSmallLeft, HiArrowSmallRight } from "react-icons/hi2";

export type Column<T> = {
  accessKey: keyof T;
  header: string;
  cell?: (row: T) => JSX.Element;
};

type TableProps<T> = {
  data: T[];
  columns: Column<T>[];
  title: string;
  onNextPage: () => void;
  onPreviousPage: () => void;
  isNextDisabled?: boolean;
  isPrevDisabled?: boolean;
};

export const Table = <T extends unknown>({
  data,
  columns,
  title,
  onNextPage,
  onPreviousPage,
  isNextDisabled,
  isPrevDisabled,
}: TableProps<T>) => {
  return (
    <div className="space-y-2">
      <TableControls
        title={title}
        onNextPage={onNextPage}
        onPreviousPage={onPreviousPage}
        isNextDisabled={isNextDisabled}
        isPrevDisabled={isPrevDisabled}
      />
      <div className="overflow-auto rounded-2xl shadow">
        <table className="table">
          <TableHead columns={columns} />
          <tbody>
            {data.map((row, rowIndex) => (
              <TableRow
                key={rowIndex}
                className={` ${rowIndex % 2 ? "bg-base-200 " : ""}`}
              >
                {columns.map((column) => (
                  <TableCell
                    key={column.accessKey as string}
                    row={row}
                    column={column}
                  />
                ))}
              </TableRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

type TableHeadProps<T> = {
  columns: T[];
};

export const TableHead = <T extends unknown>({
  columns,
}: TableHeadProps<Column<T>>) => {
  return (
    <thead className="bg-primary/90 text-primary-content">
      <TableRow>
        {columns.map((column, index) => (
          <th key={index} className="font-bold">
            {column.header}
          </th>
        ))}
      </TableRow>
    </thead>
  );
};

export const TableRow = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return <tr className={` ${className}`}>{children}</tr>;
};

type TableCellProps<T> = {
  row: T;
  column: Column<T>;
};

export const TableCell = <T extends unknown>({
  row,
  column,
}: TableCellProps<T>) => {
  return (
    <td className="min-w-[5rem]">
      {column.cell ? column.cell(row) : String(row[column.accessKey])}
    </td>
  );
};

type TableControlsProps = {
  title: string;
} & TablePaginationProps;

export const TableControls = ({
  title = "Suppliers",
  onNextPage,
  onPreviousPage,
  isNextDisabled,
  isPrevDisabled,
}: TableControlsProps) => {
  return (
    <div className="flex justify-between items-center px-2">
      <h3 className="font-bold text-lg">{title}</h3>
      <TablePagination
        onNextPage={onNextPage}
        onPreviousPage={onPreviousPage}
        isNextDisabled={isNextDisabled}
        isPrevDisabled={isPrevDisabled}
      />
    </div>
  );
};

type TablePaginationProps = {
  onPreviousPage: () => void;
  onNextPage: () => void;
  isNextDisabled?: boolean;
  isPrevDisabled?: boolean;
};

export const TablePagination = ({
  onPreviousPage,
  onNextPage,
  isNextDisabled = false,
  isPrevDisabled = false,
}: TablePaginationProps) => {
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
