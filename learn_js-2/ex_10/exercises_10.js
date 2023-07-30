function sayHello(theName, theGender = "") {
    // Your Code Here
    if (theGender === 'Male') {
        console.log(`Hello Mr ${theName}`);
    }
    else if (theGender === 'Female') {
        console.log(`Hello Miss ${theName}`);
    }
    else {
        console.log('Hello' , theName);
    }
}

    // Needed Output
    sayHello("Osama", "Male"); // "Hello Mr Osama"
    sayHello("Eman", "Female"); // "Hello Miss Eman"
    sayHello("Sameh"); // "Hello Sameh"


function calculate(firstNum, secondNum, operation) {
    // Your Code Here
    let result = 0;
    if (secondNum === undefined) {
        console.log("Second Number Not Found");
        return
    }
    else {
        switch (operation) {
            case 'add':
            case undefined:
                result = firstNum + secondNum;
                break;
            case 'subtract':
                result = firstNum - secondNum;
                break;
            case 'multiply':
                result = firstNum * secondNum;
                break;
        }
        console.log(result);
        return
    }  
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, 'add'); // 50
calculate(20, 30, 'subtract'); // -10
calculate(20, 30, 'multiply'); // 600


function ageInTime(theAge) {
    // Your Code Here
    let months = 0, weeks = 0; days = 0, hours = 0, minutes = 0, seconds = 0; 
    if (theAge >= 100 || theAge <= 10) {
        console.log("Age Out Of Range");
    }
    else {
        months = 38 * 12;
        weeks = Math.round(months * (30 / 7));
        days = months * 30;
        hours = days * 24;
        minutes = hours * 60;
        seconds = minutes * 60;

        console.log('months =>' , months);
        console.log('weeks =>' , weeks);
        console.log('days =>' , days);
        console.log('hours =>' , hours);
        console.log('minutes =>' , minutes);
        console.log('seconds =>' , seconds);
    }
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months


function showDetails (first = 'unknowen', second = 'unknowen', third = 'unknowen') {
    // Determine the name
    let name;
    typeof first === 'string' ? name = first : typeof second === 'string' ? name = second : name = third;
    // determine the age
    let age;
    typeof first === 'number' ? age = first : typeof second === 'number' ? age = second : age = third;
    // determine the status
    let status;
    typeof first === 'boolean' ? status = first : typeof second === 'boolean' ? status = second : status = third;
    // outputing the results
    status === true ? console.log(`Hello ${name}, Your Age Is ${age}, You Are Available For Hire`) 
    : console.log(`Hello ${name}, Your age Is ${age}, You Are Not Available For Hire`);
}
showDetails("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"



function createSelectBox(startYear, endYear) {
    // Your Code Here
    let diffrence = endYear - startYear;
    if (diffrence < 0) {
        console.log('replace the start with the end');
        return
    }
    else {
        let years = [];
        for (let i = 0; i < diffrence; i++) {
            years[i] = startYear + 1 + i;
        }
        document.write(`<select>`);
        for (let j = 0; j < years.length; j++) {
            document.write(`<option>${years[j]}</option>`);
        }
        document.write(`</select>`);
        return
    }
}
createSelectBox(2000, 2021);


function multiply (...parameters) {
    let result = 1;
    let numbers = [];
    let j = 0;
    for (let i = 0; i < parameters.length; i++) {
        if (typeof parameters[i] === 'number') {
            numbers[j] = parameters[i];
            j++;
        }
    }
    for (let i = 0; i < numbers.length; i++) {
        result *= Math.floor(numbers[i]);
    }
    if (numbers.length >= 1) {
        console.log(result);
    }
    else {
        console.log("there is no numbers");
    }
    
}

multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000
multiply('a');