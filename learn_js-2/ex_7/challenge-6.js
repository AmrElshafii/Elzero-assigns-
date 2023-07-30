/*
    Array Challenge
*/

let zero = 0;

let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// Write Code Here

console.log(my.slice(zero, counter + (counter / counter)).reverse()); // ["Osama", "Elham", "Mazero", "Ahmed"];

console.log(my.splice((counter / counter) , 2).reverse()); // ["Elham", "Mazero"]

my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];
console.log(
    my
    .slice(counter - (counter / counter) , counter)
    .toString()
    .slice(zero , counter - (counter / counter)) 
+ 
    my
    .slice((counter / counter) , counter - (counter / counter))
    .toString()
    .slice(counter - (counter / counter))
); // "Elzero"


console.log(  
    my
    .slice((counter / counter) , counter - (counter / counter))
    .toString()
    .slice(counter + (counter /counter) , counter + counter - (counter / counter))
    .toLowerCase()
    +
    my
    .slice((counter / counter) , counter - (counter / counter))
    .toString()
    .slice(counter + counter - (counter /counter))
    .toUpperCase()
); // "rO"