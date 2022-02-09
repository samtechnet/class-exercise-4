// Concatenate two arrays
const concat = (arr1: string[], arr2: string[]) : string[] => [...arr1, ...arr2];

// Remove the 3rd item from array
const cutStr = (arr: number[] | string[]) : number[] | string[] => {
	arr.splice(2, 1);
	return arr;
};

const capitalize = (str: string): string => str.toUpperCase();

module.exports = {concat, cutStr, capitalize};

