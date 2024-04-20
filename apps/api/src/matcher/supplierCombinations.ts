import { Combination }  from 'js-combinatorics';

// we could rank the combinations based on the sum of their quantities
// modulus the number of qunatity to get the combination size
export const calculateCombinationSize = (candidates: { name: string, quantity: number }[], targetQuantity: number) : number => {
    let remainingQuantity = targetQuantity;
    let combinationSize = 0;
    for (const candidate of candidates) {
      if (remainingQuantity <= 0) {
        break;
      }
      if (candidate.quantity >= remainingQuantity) {
        combinationSize++;
        break;
      } else {
        combinationSize++;
        remainingQuantity -= candidate.quantity;
      }
    }
    return combinationSize;
  }

export const generateCombinations = async (suppliers: { name: string; id: string; quantity: number; }[], combinationSize: number =  2) => {
    const combinations = new Combination(suppliers, combinationSize);
    return [...combinations];
}

export const findBestCombination = (suppliers: any, target: number) => {
    const combinations = generateCombinations(suppliers, target);
    let bestCombination: never[] = [];
    let bestCombinationSum = 0;

    return bestCombination;
}