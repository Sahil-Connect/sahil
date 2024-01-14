import { Card, Icon } from "ui";
import { HiOutlineBanknotes } from "react-icons/hi2";


export const AccountQuickViewCard = ({ account }) => {
  return (
    <Card>
      <div className="flex gap-2 items-center justify-between">
        <h3 className="card-title text-xm">{account.name}</h3>
        <span className="bg-primary p-2 rounded">
          <Icon icon={HiOutlineBanknotes} />
        </span>
      </div>
    </Card>
  );
};
