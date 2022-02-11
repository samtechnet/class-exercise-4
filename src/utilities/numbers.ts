// Add numbers in an array
const sum = (arr: number, arr2: number) : number => arr + arr2;

const multiply = (num1: string |number, num2: string|number) => {
	const result = (num1 as unknown as number) * (num2 as unknown as number);
	return result;
};

export default {
	sum, multiply,
};
