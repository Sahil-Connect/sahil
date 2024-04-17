import { db } from "../../lib/kysley/databse";
// given a product label and category, this function returns the supplier as well as the product information
// for instance, suppliers could have milk as a label and diary as a category but a unique brand name for the product which
// we need to get the exact product from each supplier for comparison
export const supplierProductInfo = async (supplierId: string, product: any) => {
  // Construct the query
  const query = db
    .selectFrom("products")
    // .where("products.supplier_id", "=", supplierId)
    // .andWhere("products.category", "=", product.category)
    // .andWhere("products.label", "=", product.label)

  // Execute the query
  const result = await query.execute();
  return result; 
};
