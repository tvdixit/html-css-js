// try catch :
// try {
//     const a = 10;
// }
// catch (error) {
//     document.getElementById("Demo").innerHTML = err.message;
// }

// Error 
// console.error("error");


// arrow Function :

// const hello =  ()=>{
// }

// Function :
// function name(){
// }

// date = new Date();
// console.log(date.getDay());


// const a = 10;
// function error(text) {
//     try {
//         const a = 10;
//         return true;
//     } catch {
//         return false;
//     }
// }
// console.error("text not defined");
// _____________________________________________
"use strict";
try {
    var a = 2;
    if (a == 2)
        // document.write("ok");
        console.log("Ok");
}
catch (Error) {
    // document.write("Error found" + e.message);
    console.log("Error founf" + e.message);
}
finally {
    // document.write("Value of a is 2 ");
    console.log("value of a is 2 ");
}


function myFunction() {
    const message = document.getElementById("Demo");
    let x = document.getElementById("demo").value;
    // console.log("").value;

    try {
        if (x.trim() == "") throw "is empty";
        if (isNaN(x)) throw "is not a number";
        x = Number(x);
        if (x > 10) throw "is too high";
        if (x < 5) throw "is too low";
    }
    catch (error) {
        message.innerHTML = "input" + error;
    }
    finally {
        document.getElementById("demo").value = "";
    }
}

const oc = document.querySelector("#onclick")
function day() {
    const d = new Date();
    document.getElementById("onclick").innerHTML = d;
    console.log(Date());
}

// function test(a, b, c){
//     console.log(a + b + c);
// }
// test(10, 20, 30);
// let hello = ""
// hello = () => {
//     return "Hello World";

// }
// console.log(hello);
// _______________________________________________________
// Object.json

const txt = '{"name":"John", "age":30, "city":"New York"}'
// const x = employees[0]
const obj = JSON.parse(txt);
console.log(obj.age);
// _______________________________________________________
//array.json :

const string = '[ "Ford", "BMW", "Audi", "Fiat" ]';
const x = JSON.parse(string);
console.log(x[0]);

    employees[0].firstName = "gilbert";
    console.log(employees[0].firstName);
// Index find :
    console.log(employees[0].firstName);

ForEach :
employees.forEach((employees) => {
    let x = employees.firstName;
    console.log(x)
});