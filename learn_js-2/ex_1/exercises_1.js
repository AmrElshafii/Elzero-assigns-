document.write("<h2>Elzero</h2>");
document.querySelector("h2").style.color = "blue";
document.querySelector("h2").style.fontSize = "40px";
document.querySelector("h2").style.fontWeight = "bold";
document.querySelector("h2").style.textAlign = "center";
document.querySelector("h2").style.fontFamily = "arial";

console.log
("%cElzero %cWeb %cschool" , 
'color: red; font-size: 40px;' , 
'color: blue; font-size: 40px; font-weight: bold;' , 
'color: white; background-color: blue; font-size: 40px;');
console.group("Group 1");
console.log("one");
console.log("two");
console.group("Child Group");
console.log("one");
console.log("two");
console.group("Grand Child Group");
console.log("one");
console.log("two");
console.groupEnd();
console.group("Group 2");
console.log("one");
console.log("two");
console.groupEnd();

console.table(['Elzero' , 'Ahmed' , 'Sameh' , 'Gamal' , 'Aya']);

// console.log("Iam In Console");
// document.write("Iam In Page");