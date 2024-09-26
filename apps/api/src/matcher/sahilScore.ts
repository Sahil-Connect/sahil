export const calculateSahilScore = (pair: any) => {
    const totalQuantity = pair[0].quantity + pair[1].quantity;
    const totalDistance = pair[0].distance + pair[1].distance;
    const totalPricePerUnit = pair[0].pricePerUnit + pair[1].pricePerUnit;
    const distanceCost = totalDistance * 0.5;
    const unitCost = totalQuantity * totalPricePerUnit;
    return distanceCost + unitCost;
  };
  