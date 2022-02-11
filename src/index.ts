import arrays from './utilities/arrays';
import numbers from './utilities/numbers';
import strings from './utilities/strings';

const numArr: number [] = [3, 4, 5, 6];
const wordArr: string [] = ['cat', 'dog', 'rabbit', 'bird'];
const arrSum = arrays.addArr(numArr);
const mixArr = arrays.concatArr(numArr, wordArr);
const myNum = ('15'as unknown as number) % 2;

console.log(arrays.cut3(mixArr));
console.log(numbers.sum(arrSum, myNum));
console.log(strings.capitalize('the quick brown fox'));
console.log(numbers.multiply('5', 8));
console.log(arrays.lgNumber(mixArr));
