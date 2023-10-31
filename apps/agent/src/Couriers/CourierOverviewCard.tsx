import  { Avatar, Card } from "ui";
import Link from "next/link";
export const CourierOveriewCard = ({ courier }) => {
    return (
        <Card>
            <Avatar src={courier.avatar} alt={courier.name} />
            <Link href={`/couriers/${courier.id}`}><h3>{courier.name}</h3></Link>
        </Card>
    )
}