import { Card } from "ui";
import { HiOutlineCheckBadge } from "react-icons/hi2";

export const WelcomeToOrders = () => {
  return (
    <Card title="Sahil Orders">
      <div className="card-actions">
        <button className="btn btn-primary w-full">
          Verify <HiOutlineCheckBadge />
        </button>
      </div>
    </Card>
  );
};
