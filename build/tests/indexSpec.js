"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var arrays_1 = __importDefault(require("../utilities/arrays"));
var numbers_1 = __importDefault(require("../utilities/numbers"));
var strings_1 = __importDefault(require("../utilities/strings"));
describe('arrays manipulation', function () {
    it('expected an array [4,5,6] to equal 6', function () {
        expect(arrays_1.default.lgNumber([4, 5, 6])).toEqual(6);
    });
});
it('expect cut3([3, 4, 5, 6]) to be an  array', function () { return expect(arrays_1.default.cut3([])).toBeInstanceOf(Array); });
it('expect the result of multiply(2, 4) to be false if not correct', function () {
    expect(numbers_1.default.multiply(2, 4)).not.toBe(9);
});
it('epxect concat([arr1, arr2] to be true)', function () {
    expect(strings_1.default.capitalize('I AM GREAT')).toMatch('');
});
it('expect the results of sum() to be greater than 5', function () {
    expect(numbers_1.default.sum(3, 4)).toBeGreaterThan(6);
});
