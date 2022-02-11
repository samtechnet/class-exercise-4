"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var addArr = function (arr) {
    var total = 0;
    arr.forEach(function (x) {
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
var concatArr = function (arr1, arr2) { return __spreadArray(__spreadArray([], arr1, true), arr2, true); };
// Find the largest number in an array
var lgNumber = function (arr) {
    var largest = 0;
    arr.forEach(function (x) {
        if (x > largest) {
            largest = x;
        }
    });
    return largest;
};
// Remove the 3rd item from array
var cut3 = function (arr) {
    arr.splice(2, 1);
    return arr;
};
exports.default = {
    addArr: addArr,
    concatArr: concatArr,
    lgNumber: lgNumber,
    cut3: cut3,
};
