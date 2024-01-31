import { Avatar, Card, Icon } from "ui";

export const DeliveryRequestOverview = ({ request }) => {
  return (
    <Card title={request.name}>
      <h3>{request.name}</h3>
      <div className="badge badge-success">Accepted</div>
    </Card>
  );
};
