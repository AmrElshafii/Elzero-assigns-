let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;

let names = [];
let numbers = [];

let i = counter;
let j = counter;
while (index < friends.length) {
    if (friends[index] === friends[index].toString()) {
        names[i] = friends[index];
        i++
    }
    else {
        numbers[j] = friends[index];
        j++
    }
    index++;
}

index = counter;
i = counter;

while (index <= names.length) {
    if (names[index] === "Sayed" || names[index] === "Mahmoud") {
        console.log(numbers[counter] + " => " + names[index]);
        counter++;
        index++;
    }
    else {
        index++;
        continue;
    }
}
// Output
"1 => Sayed"
"2 => Mahmoud"