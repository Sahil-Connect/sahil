import { Card, Timeline } from "ui";
import { Orders } from "@sahil/lib/graphql/__generated__/graphql";
import { formatDateTime } from "@sahil/lib/dates";
import { allStatuses, statusLabels } from "./constants";

type Props = {
  order: Orders;
};

export const OrderProgress = ({ order }: Props) => {
  const { status_histories } = order;
  const timeline = createTimeline(status_histories);
  return (
    <div>
      <Card>
        <Timeline items={timeline} />
      </Card>
    </div>
  );
};

type Timeline = {
  prefix: string;
  label: (typeof allStatuses)[number] | "CANCELED";
  description: string;
  status: "completed" | "pending" | "cancelled";
};

export const createTimeline = (statusHistories: Orders["status_histories"]) => {
  const timeline: Timeline[] = statusHistories
    .map((history) => {
      let status: "completed" | "pending" | "cancelled";
      switch (history.status) {
        case "CANCELED":
          status = "cancelled";
          break;
        case "FULFILLED":
          status = "completed";
          break;
        default:
          status = "completed";
          break;
      }
      return {
        prefix: formatDateTime(history.created_at),
        label: history.status,
        description: statusLabels[history.status],
        status: status,
      };
    })
    .reverse();
  return timeline;
};
