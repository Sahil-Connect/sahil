import { JoinGrid } from "ui";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";

export type ListHeaderProps = {
  onPreviousPage?: () => void;
  onNextPage?: () => void;
  size?: string;
  sizeLabel?: string;
  title?: string;
};
export const ListHeader = ({
  onNextPage,
  onPreviousPage,
  size,
  sizeLabel,
  title,
}: ListHeaderProps) => {
  return (
    <div className="flex items-center justify-between bg-primary">
      <div className="flex gap-2 items-center">
        <h3 className="text-lg">{title}</h3>
        <div className="badge badge-accent">
          {size} {sizeLabel}
        </div>
      </div>
      <div>
        {parseInt(size as string) > 10 && (
          <JoinGrid>
            <button
              className="join-item btn btn-sm"
              title="Left"
              onClick={onPreviousPage}
            >
              <HiArrowLeft />
            </button>
            <button
              className="join-item btn btn-sm"
              title="Right"
              onClick={onNextPage}
            >
              <HiArrowRight />
            </button>
          </JoinGrid>
        )}
      </div>
    </div>
  );
};
