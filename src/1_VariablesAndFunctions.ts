// npm init -y t create pacakge.json file
// npx tsc --init to create a tsconfig.json file
// tsc -b to convert ts to js file.(dont mention the ts filename, just run the command as is in the root folder where your tsconfig file is.)

// note: the dist folder is gitignore along with node modules when pushing your work on github, as you only push ts file.  

const x: number = 1;
console.log(x);

const y: any = 1; // can assign any as type. 

function greet(fName: string) {
    console.log("Hello, " + fName);
}

greet("Arslan");

// syntax for func returning a value of specific type.
// type inference also makes the return type number by default in case its not explicitly assigned as the function takes no. as input.
function sum(a:number, b:number) {
    return a+b;
}

// similarly you dont have to explicitly assign number type to value as it assumes it to be number, because the func returns a number.
const value = sum(5,4);
console.log(value);

function fn() {
    console.log("Function is Void, huihui")
}

// passing a function and telling that it takes no args and its return type is void.
function runAfterOneSec(fn: () => void) {
    setTimeout(fn, 1000);
}

