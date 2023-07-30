let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let array = mix
.map(function (ele) {
    return isNaN(+ele) ? ele : "";
})
.reduce(function (acc, curr) {
    return `${acc}${curr}`;
}) 
console.log(array); // Elzero


let myString = "EElllzzzzzzzeroo";

let outstring = myString
.split('')
.filter(function (ele, index, arr) {
    return ele === arr[index + +true] ? "" : ele;
})
.reduce(function (acc, curr) {
    return `${acc}${curr}`;
});
console.log(outstring); // Elzero

console.log(outstring); // Elzero


let myArray = ["E", "l", "z", ["e", "r"], "o"];

let outArray = myArray
.reduce(function (acc, cur) {
    return `${acc}${cur}`;
});
console.log(); // Elzero

// second Method
// let myArray = ["E", "l", "z", ["e", "r"], "o"];

// let outArray = myArray
// .reduce(function (acc, cur) {
//     return acc.split('').reduce(function(ac,curr) {
//         return `${ac}${curr}`;
//     });
// });
// console.log(); // Elzero


let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let outstr = numsAndStrings
.filter(function(ele,index, arr) {
    return !isNaN(ele);
})
.map(function(ele, index, arr) {
    return -ele;
});

console.log(outstr); // [-1, -10, 10, 20, -5, -3]


let nums = [2, 12, 11, 5, 10, 1, 99];

let outnums = nums
.reduce(function(acc, curr, index, array) {
    return curr % 2 === 0 ? curr * acc : curr + acc;
}, 1);
console.log(outnums) // 500