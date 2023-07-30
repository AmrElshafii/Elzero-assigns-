/*
    Function - Random Argument Challenge
    ====================================
    Create Function showDetails
    Function Accept 3 Parameters [a, b, c]
    Data Types For Info Is
    - String => Name
    - Number => Age
    - Boolean => Status
    Argument Is Random
    Data Is Not Sorted Output Depend On Data Types
    - Use Ternary Conditional Operator
*/

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