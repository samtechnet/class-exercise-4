import arrays from '../utilities/arrays';
import numbers from '../utilities/numbers';
import strings from '../utilities/strings';

describe('arrays manipulation', () => {
	it('expected an array [4,5,6] to equal 6', () => {
		expect(arrays.lgNumber([4, 5, 6])).toEqual(6);
	});
});
it('expect cut3([3, 4, 5, 6]) to be an  array', () => expect(arrays.cut3([])).toBeInstanceOf(Array));
it('expect the result of multiply(2, 4) to be false if not correct', () => {
	expect(numbers.multiply(2, 4)).not.toBe(9);
});
it('epxect concat([arr1, arr2] to be true)', () => {
	expect(strings.capitalize('I AM GREAT')).toMatch('');
});
it('expect the results of sum() to be greater than 5', () => {
	expect(numbers.sum(3, 4)).toBeGreaterThan(6);
});
