import { formatTime } from "@sahil/lib/dates";
import { HiCalendarDays, HiOutlineClock } from "react-icons/hi2";
import { Work_Schedules } from "@sahil/lib/graphql/__generated__/graphql";

type Props = {
  schedule: Work_Schedules;
};

export const Schedule = ({ schedule }: Props) => {
  const labels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const { days, shifts } = schedule;
  return (
    <div className="space-y-2 max-w-lg">
      <div className="flex items-center gap-2">
        <span className="shadow rounded-md p-2">
          <HiCalendarDays />
        </span>
        <h4 className="font-medium">Schedule</h4>
      </div>

      <div className="grid grid-cols-7 gap-2">
        {labels.map((day, index) => (
          <span
            key={index}
            className={`rounded-md p-2 border text-center text-sm ${
              days[index] ? "border-primary" : " border-slate-400 opacity-50"
            }`}
          >
            {day}
          </span>
        ))}
      </div>

      {shifts && shifts.length > 0 && (
        <div className="mt-4">
          <div className="flex flex-wrap items-center gap-2">
            {shifts.map((shift) => (
              <div
                key={shift.id}
                className="flex items-center gap-1 bg-gray-100 p-2 rounded-md"
              >
                <HiOutlineClock />
                {formatTime(shift.start_time)} - {formatTime(shift.end_time)}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
