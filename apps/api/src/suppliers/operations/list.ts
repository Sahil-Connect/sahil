import { db } from "../../lib/kysley/databse";

export const listRecommendedSuppliers = async () => {
    let query = db.selectFrom('suppliers');
    const result = await query.selectAll().execute();
    return result;
}