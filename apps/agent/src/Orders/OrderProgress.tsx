import { Card, JoinGrid } from "ui";
import {
  HiCheck,
  HiXMark,
  HiOutlineInformationCircle,
} from "react-icons/hi2";

const progress = [
    {
      id: 1,
      prompt: "Review and Confirm Order",
      completed: true,
    },
    {
      id: 2,
      prompt: "Confirm Courier Pickup",
      completed: true,
    },
    {
      id: 3,
      prompt: "In Transit: Monitor Delivery",
      completed: false,
    },
    {
      id: 4,
      prompt: "Confirm Delivery Completion",
      completed: false,
    },
  ];


export const OrderProgress = () => {
    return (
      <Card title="Order Progress" height="h-fit" titleSize="sm">
        <div className="space-y-4">
          {progress.map((step) => (
            <div className="flex justify-between items-center" key={step.id}>
              <div className="basis-2/5">
                <div className="flex gap-4 items-center">
                  <span className="p-2 shadow rounded-lg w-fit">
                    <HiOutlineInformationCircle />
                  </span>
                  <p>{step.prompt}</p>
                </div>
              </div>
              <div>
                <JoinGrid>
                  <button
                    className={`btn btn-xs join-item ${
                      step?.completed ? "btn-disabled" : "btn-error"
                    }`}
                  >
                    <HiXMark />
                    Cancel
                  </button>
                  <button
                    className={`btn btn-xs join-item ${
                      step?.completed ? "btn-success" : "btn-outline"
                    }`}
                  >
                    <HiCheck />
                    {step?.completed ? "Accepted" : "Accept"}
                  </button>
                </JoinGrid>
              </div>
            </div>
          ))}
        </div>
      </Card>
    );
  };
  