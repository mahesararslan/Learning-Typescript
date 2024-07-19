
// types are very similar to interfaces  but they are not implemented by classes.
// some ither things that only types allow

// 1. give union of different types.
type ID = string | number // can be string or number.

const id1: ID = 1234;
const id2: ID = "1234";

function printID(id: ID) {
    console.log(id);
}

printID(id1);
printID(id2);

// 2. Intersection: what if u want to create a type that has every property of multiple types/interfaces.
// Emp means employee
type Emp = {
    name: string,
    startDate: Date
}

type Manager = {
    name: string,
    dept: string
}

// for a type to have all 3 propertries of the above two types.
type TechLead = Emp & Manager

const t1: TechLead = {
    name: "Haris",
    startDate: new Date(),
    dept: "Product Building"
}
