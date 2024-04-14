import { Combination }  from 'js-combinatorics';

export const generateCombinations = async (suppliers: { name: string; id: string; quantity: number; }[], target: number) => {

}

export const findBestCombination = (suppliers: any, target: number) => {
    const combinations = generateCombinations(suppliers, target);
    let bestCombination: never[] = [];
    let bestCombinationSum = 0;

    return bestCombination;
}