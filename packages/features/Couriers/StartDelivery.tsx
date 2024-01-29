import { Avatar, Card, Icon } from "ui";
import { HiOutlineCheckCircle, HiOutlineXCircle } from "react-icons/hi2";

export const StartDelivery = ({ request }) => {
  return (
    <Card className="w-96">
      <div>
        <Avatar src="https://freesvg.org/img/1502140004.png" alt="Hello" />
        <h3>Emmanuel Gatwech</h3>
      </div>
      <div className="card-actions justify-evenly">
        <button className="btn btn-sm grow btn-danger">
          <Icon icon={HiOutlineXCircle} /> Decline
        </button>
      </div>
    </Card>
  );
};
