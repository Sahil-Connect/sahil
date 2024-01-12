import { Avatar, Card } from "ui";
export const CourierProfileOveriew = ({ courier }) => {
  return (
    <div>
      <Avatar src={courier.avatar} alt={courier.name} />
      <h3>{courier.name}</h3>
    </div>
  );
};
