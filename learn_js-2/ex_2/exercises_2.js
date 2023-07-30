// Add Variables Here
let Number_One = 10;
let Number_Two = 20;
// Ouput
console.log(Number_One + "" + Number_Two); // Normal Concatenate => 1020
console.log(typeof(Number_One + "" + Number_Two)); // Normal Concatenate => String
console.log(`${Number_One + "" + Number_Two}`); // Template Literals Way => 1020
console.log(`${Number_One}${Number_Two}`); // Second Method ^
console.log(typeof(Number_One + "" + Number_Two)); // Template Literals Way => String
console.log(typeof(`${Number_One}${Number_Two}`)); // Second Method ^

console.log(Number_One + "\n" + Number_Two);
/*
    Normal Concatenate
    20
    10
*/

console.log(`${Number_One}
${Number_Two}`);
/*
    Template Literals Way
    20
    10
*/



console.log(elzero.innerHTML); // object
console.log(typeof elzero); // object



console.log("I\'m In\n\\\\\nLove \\\\ \"\"\" \'\'\'\n++ With ++\n\\\"\"\"\\\"\"\"\n\"\"JavaScript\"\"`` ");



let a = 21;
let b = 20;

console.log(`_${a}_${b}${a}_${b}${a}_${b}${a}_${b}_`); // _21_2021_2021_2021_20_