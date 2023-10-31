import { Avatar, Card } from "ui";
export const CourierProfileOveriew = ({ courier }) => {
    return (
        <Card>
            <Avatar src={courier.avatar} alt={courier.name}/>
            <h3>{courier.name}</h3>
        </Card>
    )
};
