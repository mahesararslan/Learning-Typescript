// Problem Statement:
// Lets say u have a func that needs to return the first element of an arr. Array can be of type either sting or number
// how would you solve this problem
// Typescript isnt able to infer right type of the return type.

type Input = string | number;

function getFirstElement(arr: Input[]) {
    return arr[0];
}

// first issue
const el = getFirstElement(["Arslan", "Mahesar"])
// el.toUpperCase() // even though the string is returned but ts is not smart enough to know that it just knows it could also be a number and .toUpperCase cant be used on numbers.

// second issue
// ideally you want a person to send either all strings in this array or all numbers.
// but in this case both can be used simultaneously.

const arr1: Input[] = [1,"2", "Khairpur", 4]; // no error.

// Introducing Generics: enable u to create components that work with any data type while still providing
// compile-time safety.

function identity<T>(arg: T): T {
    return arg;
}

let output1 = identity<string>("string");
let output2 = identity<number>(2);

// similarly the above problem can be solved like this:

function getFirstElement2<T> (arr: T[]) {
    return arr[0];
}

const op = getFirstElement2<string>(["Arslan", "Mahesar"]);
console.log(op.toUpperCase());