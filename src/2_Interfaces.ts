
// how do you assign types to objects? by using interfaces or types.

interface User {
    name: string,
    age: number
    email?: string // optional argument.
}

function isLegal(user: User) {
    if(user.age >= 18) {
        return true;
    }
    return false;
}

const user1: User = {
    name: "arslan",
    age: 21
}

const user2: User = {
    name: "junaid",
    age: 25,
    email: "j@gmail.com"
}

console.log(isLegal(user1));
console.log(isLegal(user2));

// Interview question: Difference b/w interfaces and types? Interfaces can be implemented as classes.
// Implementing a interface:

// used to give a structure/format to classes that implement it that they must contain these properties.
interface Person {
    name: string,
    age: number,
    greet(phrase: string): void
}

class Employee implements Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet(phrase: string) {
        console.log(phrase + " " + this.name);
    }

}