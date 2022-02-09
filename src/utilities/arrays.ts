const addArr = (arr: number[]): number => {
	let total = 0;
	arr.forEach(x => {
		total += x;
	});
	return total;
};

const concatArr = (
	arr1arr: (number | string)[],
	arr2arr: (number | string)[],
): (number | string)[] => [...arr1arr, ...arr2arr];

module.exports = {
	addArr,
	concatArr,
};

