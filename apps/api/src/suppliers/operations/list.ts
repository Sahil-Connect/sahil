import { db } from "../../lib/kysley/databse";
import {
  findBestCombination,
  generateCombinations,
} from "../../matcher/supplierCombinations";

import { rankedSuppliersBasedOnScore } from "../../matcher/sumOrderItems";

import { sumOrderItems } from "../../matcher/sumOrderItems";

const candidates = [
  {
    name: "Emmanuel Office Solutions",
    id: "514f5a78-9f4c-4cde-b6c0-5f7649a28d60",
    quantity: 9,
    pricePerUnit: 0.95,
    distance: 144
  },
  {
    name: "Twins Construction",
    id: "627460d3-7b29-4bc6-b9ff-3958d6d02fe4",
    quantity: 14,
    pricePerUnit: 0.9,
    distance: 120
  },
  {
    name: "Khan Agricultural",
    id: "403140dc-1d5d-435f-ba3d-ccc65abb1e5f",
    quantity: 7,
    pricePerUnit: 0.8,
    distance: 111
  },
  {
    name: "Energi Dealers",
    id: "6f911d9b-580b-4283-bc8b-fbd381d298be",
    quantity: 6,
    pricePerUnit: 1,
    distance: 97
  },
  {
    name: "Brown Safety Solutions",
    id: "0c8c5d87-b0a3-4409-95ea-d1134e1d72fd",
    quantity: 12,
    pricePerUnit: 0.85,
    distance: 123
  },
  {
    name: "Ozone Supermarket",
    id: "b5f93ced-ba1f-42cb-bb96-e0d388bb111d",
    quantity: 8,
    pricePerUnit: 0.95,
    distance: 109
  },
  {
    name: "Mtn Momo",
    id: "64f3bac9-12f7-4821-bd5c-4c48e5afe4fb",
    quantity: 10,
    pricePerUnit: 0.9,
    distance: 119
  },
];


export const listRecommendedSuppliers = async () => {
  const combinations = await generateCombinations(candidates, 20);
  // Print the combinations
  console.log("Combinations of suppliers that add up to 20kgs:", combinations);


  const pairs = sumOrderItems(candidates, 20);

  // console.log("pairs", pairs);

  const rankedSuppliers = rankedSuppliersBasedOnScore(pairs);

  console.log("rankedSuppliers", rankedSuppliers[0]);
  console.log("*****************");
  console.log("rankedSuppliers", rankedSuppliers[1]);


  let query = db.selectFrom("suppliers");
  const result = await query.selectAll().execute();
  return result;
};
