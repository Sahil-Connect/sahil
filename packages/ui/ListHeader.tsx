import { JoinGrid } from "ui";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";

export type ListHeaderProps = {
    size?: string;
    sizeLabel?: string;
    title?: string;
};
export const ListHeader = ({ size, sizeLabel, title }: ListHeaderProps) => {
  return (
    <div className="flex items-center justify-between bg-primary">
      <div className="flex gap-2 items-center">
        <h3 className="text-lg">{title}</h3>
        <div className="badge badge-accent">
          {size} {sizeLabel}
        </div>
      </div>
      <div>
        <JoinGrid>
          <button className="join-item btn btn-sm" title="Left">
            <HiArrowLeft />
          </button>
          <button className="join-item btn btn-sm" title="Right">
            <HiArrowRight />
          </button>
        </JoinGrid>
      </div>
    </div>
  );
};
