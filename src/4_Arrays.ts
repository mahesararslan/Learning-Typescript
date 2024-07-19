
// arrays in typescript

const arr: number[] = [3,1,5,2,4];
function maxValue(arr: number[]) {
    let maxValue = 0;
    for(let i=0; i<arr.length; i++) {
        if(arr[i] > maxValue) {
            maxValue = arr[i];
        }
    }
    return maxValue;
}

console.log("Max Value = " + maxValue(arr));

// given a list of users, filter out users that are legal
// User already defined before. contains name and age.

const list: User[] = [{
    name: "Arslan",
    age: 21
}, {
    name: "Umar",
    age: 17
}, {
    name: "junaid",
    age: 25
}, {
    name: "Wali",
    age: 15
}]

function filteredUsers(list: User[]) {
    let filteredList: User[] = [];
    list.map((user) => {
        if(user.age >= 18) {
            filteredList.push(user);
        }
    })
    return filteredList;
}

console.log(filteredUsers(list));