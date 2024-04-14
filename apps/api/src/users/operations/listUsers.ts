import { db } from "../../lib/kysley/databse";
import { Users } from "../../lib/kysley/types";

export const listUsers = async () => {
    let query = db.selectFrom('users');
    const result = await query.selectAll().execute();
    return result;
}