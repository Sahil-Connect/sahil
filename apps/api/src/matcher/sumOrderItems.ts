export const sumOrderItems = (suppliersArray: any, target: number) => {
  const map = new Map();
  const pairs = [];

  for (let i = 0; i < suppliersArray.length; i++) {
    const complement = target - suppliersArray[i].quantity;

    if (map.has(complement)) {
      // If the complement is found, add all pairs that include the current supplier
      const indices = map.get(complement);
      for (const element of indices) {
        pairs.push([suppliersArray[element], suppliersArray[i]]);
      }
    }

    // Update the map with the current supplier's quantity and its index
    if (map.has(suppliersArray[i].quantity)) {
      map.get(suppliersArray[i].quantity).push(i);
    } else {
      map.set(suppliersArray[i].quantity, [i]);
    }
  }
  return pairs;
};

export const calculateSahilScore = (pair: any) => {
  const totalQuantity = pair[0].quantity + pair[1].quantity;
  const totalDistance = pair[0].distance + pair[1].distance;
  const totalPricePerUnit = pair[0].pricePerUnit + pair[1].pricePerUnit;
  const distanceCost = totalDistance * 0.5;
  const unitCost = totalQuantity * totalPricePerUnit;
  return distanceCost + unitCost;
};


// Calculate total cost for each pair and rank them
export const rankedSuppliersBasedOnScore = (suppliers: any) => {
    return suppliers.map((supplier: any) => ({
        supplier,
        totalCost: calculateSahilScore(supplier)
       })).sort((a: any, b: any) => a.totalCost - b.totalCost);
}