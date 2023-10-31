const couriers = [
    {
        id: 1,
        name: "Wani Michael",
    },
    {
        id: 2,
        name: "Maged Faiz"
    },
    {
        id: 3,
        name: "Maged Faiz"
    }
];

const CourierOveriewCard = ({ courier }) => {
    return (
        <div>
            <h3>{courier.name}</h3>
        </div>
    )
}

export const ListCouriers = () => {
    return (
        <div>
            {
                couriers.map(courier =><CourierOveriewCard  key={courier.id} courier={courier}/>)
            }
        </div>
    )
}