// let start = 10;
// let end = 100;
// let exclude = 40;

// for (let i = start ; i <= end ; i += start) {
//     if (i == exclude) {
//         continue;
//     }
//     console.log(i);
// }
// // Output
// 10
// 20
// 30
// 50
// 60
// 70
// 80
// 90
// 100

// let start_2 = 10;
// let end_2 = 0;
// let stop_2 = 3;

// for (let i = start_2 ; i >= stop_2 ; i--) {
//     if (i !== 10) {
//         console.log('0' + i);
//     }
//     else {
//         console.log(i);
//     }
// }
// // // Output
// // 10
// // 09
// // 08
// // 07
// // 06
// // 05
// // 04
// // 03

// let start_3 = 1;
// let end_3 = 6;
// let breaker_3 = 2;

// for (let i = start_3 ; i <= end_3 ; i++) {
//     console.log(i)
//     for (let j = breaker_3 ; j < end_3 ; j *= breaker_3) {
//         console.log('--' + j)
//     }
// }
// // // Output
// // 1
// // -- 2
// // -- 4
// // 2
// // -- 2
// // -- 4
// // 3
// // -- 2
// // -- 4
// // 4
// // -- 2
// // -- 4
// // 5
// // -- 2
// // -- 4
// // 6
// // -- 2
// // -- 4


// let index = 10;
// let jump = 2;

// for (;;) {
//   // Write Your Code Here
//     if (index >= Math.pow(jump , jump)) {
//         console.log(index);
//         index -= jump;
//     }
//     else {
//         break;
//     }
// }

// // Output
// 10
// 8
// 6
// 4


// let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
// let letter = "a";
// let j = letter.length;

// for (let i = j - j ; i < friends.length ; i++) {
//     if (friends[i].charAt(0) !== letter.toUpperCase()) {
//         console.log(`${[j]} => ${friends[i]}`);
//         j++;
//     }
// }
// // Output
// "1 => Sayed"
// "2 => Eman"
// "3 => Mahmoud"
// "4 => Osama"
// "5 => Sameh"



let start_4 = 0;
let swappedName = "elZerO";
swappedName = swappedName.split("");


// for (let i = start_4 ; i < swappedName.length ; i++) {
//     if (swappedName[i].charCodeAt() >= 65 && swappedName[i].charCodeAt() <= 90) {
//         swappedName[i] = swappedName[i].toLowerCase();
//     }
//     else if (swappedName[i].charCodeAt() >= 97 && swappedName[i].charCodeAt() <= 122) {
//         swappedName[i] = swappedName[i].toUpperCase();
//     }
// }

for (let i = start_4 ; i < swappedName.length ; i++) {
    if (swappedName[i] === swappedName[i].toUpperCase()) {
        swappedName[i] = swappedName[i].toLowerCase();
    }
    else if (swappedName[i] === swappedName[i].toLowerCase()) {
        swappedName[i] = swappedName[i].toUpperCase();
    }
}

console.log(swappedName.join(""))
// Output
"ELzERo"



let start_5 = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];
console.log();
for (let i = start_5 ; i < mix.length ; i++) {
    if (i == start_5 || +mix[i] !== mix[i]) {
        continue;
    }
    else {
        console.log(mix[i]);
    }
}

// let start_5 = 0;
// let mix = [1, 2, 3, "A", "B", "C", 4];
// console.log();
// for (let i = start_5 ; i < mix.length ; i++) {
//     if (i == start_5 || isNaN(mix[i])) {
//         continue;
//     }
//     else {
//         console.log(mix[i]);
//     }
// }

// Output
2
3
4