import { Fragment } from "react";
import { formatTime } from "@sahil/lib/dates";
import { HiCalendarDays, HiOutlineClock } from "react-icons/hi2";
import { Work_Schedules } from "@sahil/lib/graphql/__generated__/graphql";

type Props = {
  schedule: Work_Schedules;
};

export const Schedule = ({ schedule }: Props) => {
  const labels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const { days, shifts } = schedule;

  console.log(shifts);

  return (
    <div className="space-y-4 max-w-lg">
      <div className="flex items-center gap-2">
        <span className="shadow rounded-md p-2">
          <HiCalendarDays className="text-gray-600" />
        </span>
        <h4 className="font-medium">Schedule</h4>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-7 gap-2">
          {labels.map((day, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="text-sm font-medium text-gray-600">{day}</span>
              <div
                className={`w-8 h-8 mt-1 rounded-full flex items-center justify-center ${
                  days[index]
                    ? "bg-green-500 text-white"
                    : "bg-gray-200 text-gray-400"
                }`}
              >
                {days[index] ? "✓" : "✗"}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-100 p-4 rounded-md">
          <h5 className="font-medium mb-2 flex items-center gap-2">
            <HiOutlineClock />
            Working Hours
          </h5>
          <div className="flex items-center">
            {shifts.map((shift, index) => (
              <Fragment key={shift.id}>
                <span className="text-sm">
                  {formatTime(shift.start_time)} - {formatTime(shift.end_time)}
                </span>
                <div className="divider divider-horizontal mx-2 md:mx-4 last:hidden" />
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
