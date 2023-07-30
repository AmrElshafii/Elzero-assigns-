// Examples
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000

// Your Solutions
console.log(Math.round(99_999.9)); // 100000
console.log(Math.ceil(99_999.9)); // 100000
console.log(Math.floor(100_000.9)); // 100000
console.log(Math.trunc(100_000.9)); // 100000
console.log(+parseInt(100_000.9)); // 100000
console.log(+parseFloat(100_000).toFixed(0)); // 100000
console.log(Math.pow(10 , 5)); // 100000
console.log(10 ** 5); // 100000
console.log(Math.max(100_000)); // 100000
console.log(Math.min(100_000)); // 100000



console.log(-Number.MIN_SAFE_INTEGER); // 9007199254740991

console.log(((Number.MIN_SAFE_INTEGER).toString()).length - +true); // 16


let myVar = "100.56789 Views";

console.log(parseInt(myVar)); // 100
console.log(+parseFloat(myVar).toFixed(2)); // 100.57


let num = 10;

console.log(Number.isInteger(num) + Number.isInteger(num)); // 2


let flt = 10.4;

console.log(Math.round(flt)); // 10
console.log(Math.floor(flt)); // 10
console.log(Math.trunc(flt)); // 10
console.log(parseInt(flt)); // 10
console.log((flt).toFixed(0)); // 10


console.log(Math.round(Math.random() * 5)); // 0 || 1 || 2 || 3 || 4

// console.log(Math.floor(Math.random() * (max - min + 1) + 0));
console.log(Math.floor(Math.random() * (5 - 0 + 1) + 0));
