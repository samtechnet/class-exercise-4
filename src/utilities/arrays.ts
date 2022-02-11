const addArr = (arr: number[]): number => {
	let total = 0;
	arr.forEach(x => {
		total += x;
	});
	return total;
};

// Const concatArr = (
//     arr1arr: (number)[],
//     arr2arr: (number | string)[],
// ): (number | string)[] => {
//     return [...arr1arr, ...arr2arr]
// };

const concatArr = (arr1: number[], arr2: (number | string)[]): (number | string)[] => [...arr1, ...arr2];

// Find the largest number in an array
const lgNumber = (arr: (number|string)[]) : number => {
	let largest:(number|string) = 0;
	arr.forEach(x => {
		if (x > largest) {
			largest = x;
		}
	});
	return largest;
};

// Remove the 3rd item from array
const cut3 = (arr: (number | string)[]) : (number | string)[] => {
	arr.splice(2, 1);
	return arr;
};

export default {
	addArr,
	concatArr,
	lgNumber,
	cut3,
};

