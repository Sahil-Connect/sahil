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
