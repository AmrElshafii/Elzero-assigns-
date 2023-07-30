/* Challenge one */

let a = 10, b = "20", c = 80;

console.log(++a + +b++ + +c++ - +a++);
console.log(++a + -b + +c++ - -a++ + +a);
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);

/* 
    console.log (one)

    [++a] [+] [+b] [b++] [+] [+c] [c++] [-] [+a] [a++]
    [++a] 
    - value: 11 (number)
    - Explain: pre increament
    [+] 
    - Explain: plus operation
    [+b] 
    - value: 20 (number)
    - Explain: Unary Plus type coercion from a string to number
    [b++] 
    - value: 20 (number)
    - Explain: post increament
    [+] 
    - Explain: plus operation
    [+c] 
    - value: 80 (number)
    - Explain: Unary Plus type coercion from a string to number
    [c++] 
    - value: 80
    - Explain: post increament
    [-] 
    - Explain: minus operation
    [+a] 
    - value: 11 (number)
    - Explain: Unary Plus type coercion from a string to number 
    [a++]
    - value: 12 (number)
    - Explain: post increament

    console (two)

    [++a] [+] [-b] [+] [+c] [c++] [-] [-a] [a++] [+] [+a]
    [++a] 
    - value: 12 (number)
    - Explain: post increament
    [+] 
    - Explain: plus operation
    [-b] 
    - value: -20 (number)
    Explain: Unary Negative type coercion from a string to number
    [+] 
    - Explain: plus operation
    [+c] 
    - value: 80 (number)
    - Explain: Unary Postive type coercion from a string to number
    [c++] 
    - value: 81 (number)
    - Explain: post increament
    [-] 
    Explain: minus operation
    [-a] 
    - value: -12 (number)
    - Explain: Unary Negative type coercion from a string to number
    [a++] 
    - value: -11 (number)
    - Explain: post increament
    [+] 
    - Explain: plus operation
    [+a]
    - value: 11
    - Explain: Unary Postive

    console.log (three)

    [--c] [+] [+b] [+] [--a] [*] [+b] [b++] [-] [+b] [*] [a] [+] [--a] [-] [+true]
    [--c] 
    - value: 80 (number)
    - Explain: post decreament
    [+] 
    - Explain: plus operation
    [+b] 
    - value: 20 (number)
    - Explain: Unary Postive type coercion from a string to number
    [+] 
    - Explain: plus operation
    [--a] 
    - value: 10
    - Explain: pre decreament
    [*] 
    - Explain: multiply operation
    [+b] 
    - value: 20 (number)
    - Explain: Unary Postive type coercion from a string to number
    [b++] 
    - value: 20 (number)
    - Explain: post increament
    [-] 
    - Explain: minus operation
    [+b]
    - value: 21 (number)
    - Explain: Unary Postive type coercion from a string to number
    [*] 
    - Explain: multiply operation
    [a] 
    - value: 9
    [+] 
    - Explain: plus operation
    [--a] 
    - value: 8
    - Explain: pre decreament
    [-] 
    - Explain: minus operation
    [+true]
    - value: 1 (number)
    - Explain: Unary Postive type coercion from a boolean to number
*/




/* challenge two */

let d = "-100" , e ="20" , f = 30 , g = true;

console.log(-d * e); // 2000
console.log(++e * ++g + -d + ++f); // 173