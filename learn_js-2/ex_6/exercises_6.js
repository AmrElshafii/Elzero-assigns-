console.log(100 == "100"); // true
console.log(100 != 1000); // true
    console.log(100 < 1000); // true second method
console.log(110 != 100 && 10 != 20); // true
console.log(-10 == "-10"); // true
console.log(- -50 + - 10 != "-40"); // true
console.log(- 10 + 50 == -"-40"); // true
console.log(- "10" === - 10); // true
console.log(- 20 != false); // true



let num1 = 10;
let num2 = 20;

console.log(num1 >! num2); // true
console.log(num1 < num2); // true
console.log(typeof num1 === typeof num2); // true
console.log(typeof num1 == typeof num2); // true
console.log(num1 != num2); // true
console.log(num1 !== num2); // true
console.log(typeof num1 !== num2); // true
console.log(typeof num1 != num2); // true
console.log(num1 !== typeof num2); // true
console.log(num1 !=  typeof num2); // true



let a = 20;
let b = 30;
let c = 10;

console.log(a < b && a > c || a > b); // true
    console.log(a < b && a > c || a < b); // true second method
console.log(a < b || a > c); // true
    console.log(a < b || a < c); // true second method
    console.log(a > b || a > c); // true second method
console.log(+(a < b) && !(a > b) && +(a > c) && !(a < c)); // true




// Test Case 1
let num = 9; // "009"

num < 10 ? console.log("00" + num) : console.log(num);
// Test Case 2
let num_2 = 20; // "020"

num_2 >= 10 && num_2 < 100 ? console.log("0" + num_2) : console.log(num_2);
// Test Case 3
let num_3 = 110; // "110"

num_3 > 100 ? console.log(num_3) : console.log(num_3);


let num1_2 = 9;
let str = "9";
let str2 = "20";

// Output
num1_2 == str 
? console.log(`${num1_2} Is The Same Value As ${str}`) 
: num1_2 === str ? console.log(`${num1_2} Is The Same Value As ${str} But Not The Same Type`) 
: num1_2 !== str2 
? console.log(`${num1_2} Is Not The Same Value Or The Same Type As ${str2}`)
: typeof str == typeof str2 
? console.log(`${str} Is The Same Type As ${str2} But Not The Same Value`)
: console.log('')



let num1_3 = 10;
let num2_3 = 30;
let num3_3 = "30";

num1_3 < num3_3 && num3_3 === num2_3 
? console.log(`${num3_3} Is Larger Than ${num1_3} And Type ${typeof num3_3} Not The Same Type As ${typeof num2_3}`)
: num2_3 > num1_3 && num2_3 == num3_3 
? console.log(`${num2_3} Is Larger Than 10 And Value Is The Same As ${num3_3} And Type ${typeof num3_3} Not The Same Type As ${typeof num2_3}`)
: num3_3 !== num1_3 && num3_3 !== num2_3
? console.log(`${num3_3} Value And Type Is Not The Same As ${num1_3} And Type Is Not The Same As ${num2_3}`)
: console.log('')
// Needed Output



