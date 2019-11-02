/**
 * Convert an array to an object based on the return value of an iteratee.
 * @param arr The array to convert.
 * @param iteratee The iteratee to use when iterating through the array.
 * @example
 * ```
 * const objFromArr = require("obj-from-arr");
 *
 * objFromArr(["a", "b", "c"], val => {
 *     // Handle array here. I'm going to use some simple handling logic as an example.
 *     if (val === "a") return 1;
 *     if (val === "b") return 2;
 *     if (val === "c") return 3;
 * });
 * //=> { "a": 1, "b": 2, "c": 3 }
 * ```
*/
declare function objFromArr<T extends Array>(arr: T, iteratee: (value: any, index: number, array: T) => any): object;

export = objFromArr;
