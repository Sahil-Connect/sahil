import { Avatar, Card, Icon } from "ui";
import {
  HiOutlineCheckCircle,
  HiOutlineXCircle,
  HiOutlineMapPin,
} from "react-icons/hi2";

export const IncomingDeliveryRequest = ({ request }) => {
  return (
    <Card className="w-96" title="Your Location">
      <div>
        <h3>25 minutes - 13km</h3>
      </div>
      <div className="flex items-center gap-4">
        <h3 className="card-title">Emmanuel Gatwech</h3>
      </div>
      <div className="flex items-center gap-4">
        <span className="shadow p-2 rounded-md">
          <HiOutlineMapPin />
        </span>
        <div>
          <p>Pick Up Point</p>
          <h3 className="text-lg">Notos Bar and Grill</h3>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <span className="shadow p-2 rounded-md">
          <HiOutlineMapPin />
        </span>
        <div>
          <p>Drop Off Point</p>
          <h3 className="text-lg">Ozone Supermarket</h3>
        </div>
      </div>
      <div className="card-actions justify-evenly">
        <button className="btn btn-sm grow btn-danger">
          <Icon icon={HiOutlineXCircle} /> Decline
        </button>
        <button className="btn btn-sm grow btn-primary">
          <Icon icon={HiOutlineCheckCircle} /> Accept
        </button>
      </div>
    </Card>
  );
};
