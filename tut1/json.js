// Object.json

const txt = '{"name":"John", "age":30, "city":"New York"}'
// const x = employees[0]
const obj = JSON.parse(txt);
console.log(obj.age);
// _______________________________________________________
//array.json :

const string = '[ "Ford", "BMW", "Audi", "Fiat" ]';
const y = JSON.parse(string);
console.log(y[0]);

const employees = '{"name":"John", "age":30, "city":"New York"}'
employees.name = "gilbert";
console.log(employees);
// Index find :
// console.log(employees[0].firstName);

// _______________________________________________________
// ForEach:
const employee = [{ "name": "John", "age": 30, "city": "New York" }]
employee.forEach((value) => {
    console.log(value.name)
});
// _______________________________________________________
// Stringify :

const data = { name: "John", age: 30, city: "New" };
const myJson = JSON.stringify(data);
console.log(myJson);

// _______________________________________________________
const all = ["John", "Peter", "Sally", "Jane"];
const myjson = JSON.stringify(all);
console.log(myjson);
// _______________________________________________________
const myObj = { name: "John", age: 31, city: "New York"};
const myJSON1 = JSON.stringify(myObj);
localStorage.setItem("testJSON", myJSON1);
console.log(localStorage);

let text = localStorage.getItem("testJSON");
let obj1 = JSON.parse(text);
console.log(obj1.name);

// _______________________________________________________
const myJSON4 = '{"name":"John", "age":20, "car":null}';
const myObj4 = JSON.parse(myJSON4);

let text4 = "";
for(let a in myObj4){
    text4 += a + ", ";
}
console.log(text4);
