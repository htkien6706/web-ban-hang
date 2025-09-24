let person = {
    firstName: "Hoang", 
    lastName: "Kien",
    age: 19
};

const firstname = person.firstName;
const last_name = person["lastName"];
const age = person["age"];

console.log(last_name);

let numbers = [10,20,30,40];
for(let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}