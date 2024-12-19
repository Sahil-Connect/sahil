import { Card } from "ui";
import { HiArrowLeft, HiArrowUp, HiOutlineClock, HiMap } from "react-icons/hi2";

interface TripInfoProps {
  currentStreet?: string;
  nextStreet?: string;
  distance?: string;
  duration?: string;
  nextTurn?: "left" | "right" | "straight";
}

export const TripInfo = ({
  currentStreet = "Bryant St",
  nextStreet = "N 50th St",
  distance = "0.3 mi",
  duration = "3 min",
  nextTurn = "left",
}: TripInfoProps) => {
  return (
    <Card className="w-full max-w-md mx-auto rounded-none">
      {/* Main Direction Info */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <HiOutlineClock className="w-5 h-5 text-muted-foreground" />
          <span className="font-medium">19:14</span>
        </div>
        <div className="flex items-center gap-3">
          <div>
            <h2 className="text-2xl font-semibold text-foreground">
              {distance}
            </h2>
            <p className="text-sm text-muted-foreground">{currentStreet}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <HiOutlineClock className="w-5 h-5 text-muted-foreground" />
          <span className="font-medium">{duration}</span>
        </div>
      </div>
    </Card>
  );
};