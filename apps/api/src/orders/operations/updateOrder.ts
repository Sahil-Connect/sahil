import { UPDATE_ORDER_STATUS, FETCH_ORDER_BY_PK } from "@sahil/lib/graphql";
import { z } from "zod";
import { client } from "../../lib/graphql-request";

export const updateOrder = async (orderId: string, data = {
    status: "IN-PROGRESS"
}) => {
    // check if the order exists
    const order = await client.request(FETCH_ORDER_BY_PK, {
        id: orderId
    });

    if(!order) {
        throw new Error("Order Not Found");
    }

    const updatedOrder = await client.request(UPDATE_ORDER_STATUS, {
        object: {
            ...order,
            status: "IN_PROGRESS"
        }
    });

    return updateOrder;
}