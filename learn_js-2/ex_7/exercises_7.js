let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
console.log(myFriends.splice(num - num , num)); // ["Ahmed", "Elham", "Osama"];

myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
// Method 2
console.log(myFriends.slice(num - num , num)); // ["Ahmed", "Elham", "Osama"];


let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here
let a = friends.length;

console.log(friends.splice((a / a) , (a / a) + (a / a))); // ["Eman", "Osama"]



let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code

console.log(finalArr.concat(arrOne , arrTwo).sort().reverse()); // ["Z", "X", "D", "C", "B", "A"]




let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];
let b = website.length;

console.log(words[b][0].toString().substring(b).toUpperCase()); // ZERO



let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
if (haystack.includes(needle)) {
    console.log("Found");
}

if (haystack.indexOf(needle) !== -1) {
    console.log("Found");
}

if (haystack.lastIndexOf(needle) !== -1) {
    console.log("Found");
}

haystack.includes(needle) == true ? console.log("Found") : console.log();
haystack.indexOf(needle) !== -1 ? console.log("Found") : console.log();
haystack.lastIndexOf(needle) !== -1? console.log("Found") : console.log();

switch (needle) {
    case haystack[0]:
        console.log("Found");
        break;
    case haystack[1]:
        console.log("Found");
        break;
    case haystack[2]:
        console.log("Found");
        break;
}


let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

let two = arr1.length - (arr1.length / arr1.length);
let three = arr1.length;

// Your Code Here

console.log(allArrs.concat(arr1[two] , arr2[three] , arr2[two]).sort().join("").toLowerCase()); // fxy
console.log(allArrs.concat(arr2[two] , arr1[two] , arr2[three]).join("").toLowerCase()); // 
console.log(allArrs.concat(arr1[two] , arr2.splice(two , three)).sort().join("").toLowerCase()); // fxy