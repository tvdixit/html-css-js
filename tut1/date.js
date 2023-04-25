// const d = new Date();
// const mon = d.getMonth() + 1;
// console.log(mon);
// ______________________________________________________
// const N = new Date("2002-06-05");
// console.log(N);
// ______________________________________________________
// let day;
// switch (10 == 10) {
//     case 0:
//         day = "Sunday";
//         break;
//     case 1:
//         day = "Monday";
//         break;
//     case 2:
//         day = "Tuesday";
//         break;
//     case 3:
//         day = "Wednesday";
//         break;
//     case 4:
//         day = "Thursday";
//         break;
//     case 5:
//         day = "Friday";
//         break;
//     case 6:
//         day = "Saturday";
//     default :
//         day = "No avail";
// }
// console.log(day);
// ______________________________________________________
// for Loop :
// Expression
//    \/
// for(var a = 11; a <= 10; a++){
//     document.write("yes it is <br>");
// }

// O/P :
// yes it is
// yes it is
// yes it is
// yes it is
// yes it is
// yes it is
// yes it is
// yes it is
// yes it is
// yes it is
// ______________________________________________________
// For in Loop :
// var obj = {
//     firstname : "Hp",
//     lastname : "Laptop",
//     Age : 10,
//     email : "hp@gmail.com"
// };
// for(var key in obj){
//     document.write(key + " : " + obj[key] + "<br>");
// }

// O/P :
// firstname: Hp
// lastname: Laptop
// Age: 10
// email: hp @gmail.com
// ______________________________________________________
// for each :

// var a = ["sanjay", "rahul", "ajay"];

// a.forEach(function(value){
//     document.write(value + "<br>");
// });
// O/P :
// sanjay
// rahul
// ajay

// ______________________________________________________
// looping over a string:

// let language = "Rahul";

// let text = "";
// for (let x of language) {
//     text += x + "<br>";
// }
// document.write(text);

// O/P:
// R
// a
// h
// u
// l
// ______________________________________________________

// while Loop :
// text = " "
// i = 0;
// while(i < 10){
//     text += "<br>"  +i ;
//     i++;
// }
// document.write(text);

// O/P :
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// ______________________________________________________

// text = " "
// i = 1;
// do{
//     text += "\n" + i;
//     i++;
// }
// while(i < 10){
// }
// // document.write(text);
// console.log(text)

// O/P :
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9 i = 0; i < cars.length; i++
// ______________________________________________________


// const cars = ["BMW", "Volvo", "Saab", "Ford"];
// let text = "";

// list:{
//     text += cars[0] + "<br>";
//     text += cars[1] + "<br>";
//     // list; "{continue}"
//     text += cars[2] + "<br>";
//     text += cars[3] + "<br>";
// }
// console.log(text);

// ______________________________________________________
// click event Date : it shows current Date.
const oc = document.querySelector("#onclick")
function date() {
    console.log(Date());
}
// ______________________________________________________
// onChange Event
function myFunction() {
    console.log(document.querySelector("#Change").value.toUpperCase());
}
// ______________________________________________________
// onmouseover :
function text() {
    console.log(document.querySelector("#mouse").style.color = ("red"))
}

// onmouseout :
function normal() {
    console.log(document.querySelector("#mouse").style.color = ("black"))
}

// _____________________________________________________){
// const j = [45, 4, 9, 16, 25];
// for (let i = 0; i < j.length; i++)
// {
//     console.log(j);
// }
// _____________________________________________________
const letters = new Set("a");
letters.add("c");
letters.add("d");
letters.add("e");
letters.add("f");

// catch(error){
console.log(letters);
// }           
// _____________________________________________________
