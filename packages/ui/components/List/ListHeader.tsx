import { JoinGrid } from "ui";
import { HiArrowSmallLeft, HiArrowSmallRight } from "react-icons/hi2";

export type ListHeaderProps = {
  onPreviousPage?: () => void;
  onNextPage?: () => void;
  isNextDisabled?: boolean;
  isPrevDisabled?: boolean;
  size?: number;
  limit?: number;
  sizeLabel?: string;
  title?: string;
};
export const ListHeader = ({
  onNextPage,
  onPreviousPage,
  isNextDisabled = false,
  isPrevDisabled = false,
  size,
  limit,
  sizeLabel,
  title,
}: ListHeaderProps) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-2 items-center">
        <h3 className="text-lg">{title}</h3>
        <div className="badge badge-accent">
          {size} {sizeLabel}
        </div>
      </div>
      <div>
        {size > limit && (
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
        )}
      </div>
    </div>
  );
};
