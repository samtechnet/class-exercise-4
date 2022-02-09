// Add numbers in an array
const sum = (arr: number[], arr2: number) : number => {
	let total = 0;
	arr.forEach(x => {
		total += x;
	});
	return total + arr2;
};

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

const multiply = (num1: string |number, num2: string|number) => {
	const result = (num1 as unknown as number) * (num2 as unknown as number);
	return result;
};

module.exports = {
	sum, lgNumber, multiply,
};
