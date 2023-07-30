/*
    Loop Challenge
*/

let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia", "Anwar"];

document.write(`<div>We Have ${myAdmins.length} Admins <hr> </div>`);

for (let i = 0; i < myAdmins.length; i++) {
    if (myAdmins[i] === "Stop") {break;}
    document.write(`<div><p>The Admin of team ${i + 1} is ${myAdmins[i]}</p><h3>Team members</h3></div>`);
    let count = 1;
    for (let j = 0; j < myEmployees.length; j++) {
        if (myAdmins[i][0] === myEmployees[j][0]) {
            document.write(`<p>- ${count} ${myEmployees[j]}</P>`);
            count++;
        }
    }
    document.write(`<hr>`);
}