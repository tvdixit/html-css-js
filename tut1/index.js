// let x, y;
// x = 5 + 6;
// y = x * 11;
// document.getElementById("Demo").innerHTML = y;

// var a, b;
// x = 5 + 6;
// y = x * 10;
// document.getElementById("Demo1").innerHTML = y;

// let c;
// c = 5;
// document.getElementById("Demo2").innerHTML = c;

// variables:
// var x = 5;
// var y = 6;
// var z = x + y;
// document.getElementById("Demo").innerHTML =  "the value of z is : " + z;

// innerHTML:
// document.getElementById("Demo").innerHTML = 5 + 6;

//document.write():
// document.write(5 + 6);

// window.alert():
// window.alert(5 + 6);

// alert(5 + 6);

// console.log:
// it was in impact,
// console.log(5 + 6);

// operators use:
// document.getElementById("Demo").innerHTML= (5 + 6) * 10;

// ASSIGNMENT OPERATOR :
// let x , y;
// x = 5;
// y = 6;
// document.getElementById("Demo").innerHTML = x + y; 

// Expression operator
// document.getElementById("Demo").innerHTML = 5 * 10;

// operators : +=
// var x = 15;
// x += 5;
// document.getElementById("Demo").innerHTML = x;

// let text ="Hello"; text += "world";
// document.getElementById("Demo").innerHTML = text;

// -=
// var x = 15;
// x -= 10;
// document.getElementById("Demo").innerHTML = x;

// *=
// var x = 15;
// x *= 15;
// document.getElementById("Demo").innerHTML = x;

// **=
// var x = 5;
// x **= 2;
// document.getElementById("Demo").innerHTML = x;

// /=
// var x = 10;
// x /= 2;
// document.getElementById("Demo").innerHTML = x;

// %=
// var x = 10;
// x %= 6;
// document.getElementById("Demo").innerHTML = x;

// <<= 
// var x = 4;
// x <<= 3;
// document.getElementById("Demo").innerHTML = x;

// ++
// var x = 5;
// x++
// let z = x;
// document.getElementById("Demo").innerHTML = x;

//--
// var x = 6;
// x--
// let z = x;
// document.getElementById("Demo").innerHTML = x;

// **
// var x = 6;
// let z = x ** 2;
// document.getElementById("Demo").innerHTML = x ** 2;

// =
// let y = 50;
// let x = 10 + y;
// document.getElementById("Demo").innerHTML =  + x;

// +=
// let x = 50;
//  x +=  5;
// document.getElementById("Demo").innerHTML =  + x;

//-=
// let x = 50;
//  x -=  5;
// document.getElementById("Demo").innerHTML =  + x;

// Data Types :
//String :
// var x = "scassaa"
// document.write(x);
// document.write("<br>");            // console.log(typeof(x))
// document.write(typeof x);

// number
// var x = 25;
// document.write(x);
// document.write("<br>");
// document.write(typeof x);

// Boolean
// var x = true;
// document.write(x);
// document.write("<br>");
// document.write(typeof x)

// Object
// var x = ["a", "b", "c"];
// document.write(x);
// document.write("<br>");
// document.write(typeof x);

// Array
// var x = {a:"12" ,b:"22" ,c:"33"};
// document.write(x);
// document.write("<br>");
// document.write(typeof x);

// console
// var x = 50;
// console.log(x + 20);

// Function:

// function myFunction(p1, p2){
//     return p1 * p2;
// }
// document.getElementById("Demo").innerHTML = myFunction(4, 3);

// var x = myFunction(4, 3);
// document.getElementById("Demo").innerHTML = x;
// function myFunction(a, b) {
//     return a * b;
// }

// function toCel(farh){
//     return(5/9) * (farh-32);
// }
// document.getElementById("Demo").innerHTML = toCel(77);

// Local variable

// function myFunction(){
//     let carName = "Volvo";
//     document.getElementById("Demo").innerHTML = 
//     typeof carName + " " + carName;
// }
// document.getElementById("Demo").innerHTML =
// typeof carName;

// var a = 10;
// var b ="10";

// console.log(a == b);

// var a = 10;
// var b = "10";

// console.log(a === b);

// var a = 10;
// var b = "10";

// console.log(2 != 3);

// var a = 200;
// var b = 400;

// if (a>=b || a<=b){
//     console.log("Yees");
// }


// if else:

// a = 200;

// if (a>100){
//     console.log("Yes it is")
// }
// else{
//     console.log("No this is not")
// }


// if (a<10){
//     console.log("Yes is it")
// }
// else{
//     console.log("NO  this is not")
// }

//  ? :
// var x = 15;
// var z;

// (x > 10) ? b = "true" : b = "false";
// // document.write(b);
// console.log(b);

// String Methods :
// 1.length :
// var str = "Javascript is a Great Language";
// var a = str.length;

// document.write(a);

// 2.toLowercase:
// var str = "javascript is a greater language";
// var a =str.toLowerCase();

// document.write(a);

// // 3.toUppercase
// var str = "javascript is a greater language";
// var a = str.toUpperCase();

// document.write(a);

// 4.includes
// var str ="Javascript is a greater language";
// var a =str.includes("is");
// document.write(a);

// 5.startswith
// var str = "Javascript is a greater language";
// var a = str.includes("Javascript");
// document.write(a);

// 6.endswith
// var str = "Javascript is a greater language";
// var a = str.endsWith("language");
// document.write(a);

// 7.search
// var str = "Javascript is a greater language";
// var a = str.search("is");
// document.write(a);

// 8.match
// var str = "Javascript is a greater language";
// var a = str.includes("is a ");
// document.write(a);

// 9.indexof
// var str = "Javascript is a greater language";
// var a = str.indexOf("is");
// document.write(a);
// document.write("<br>")


// 10.lastindexof
// var str = "Javascript is a greater language";
// var a = str.lastIndexOf("script");
// document.write(a);
// document.write("<br>")


// 11.replace
// var str = "Javascript is a greater language";
// var a = str.replace("Javascript", "Php");
// document.write(a);
// document.write("<br>")

// 12.trim
// var str = "Javascript is a greater language";
// var a = str.trim();
// // document.write(a);
// alert(a)
// document.write("<br>")

// 13.charAT
// var str = "Javascript is a greater language";
// var a = str.charAt(7);
// document.write(a);
// document.write("<br>")

// 14.charCodeat
// var str = "Javascript is a greater language";
// var a = str.charCodeAt("1");
// document.write(a);
// document.write("<br>")

// 15.fromCharcode
// var str = "Javascript is a greater language";
// var a = String.fromCharCode("68", "73", "88", "73", "84");
// document.write(a);
// document.write("<br>")

// 16.concat :
// var str = "Javascript is a greater language";
// var str2 = "Hello "
// var a = str.concat(str2);
// document.write(a);
// document.write("<br>")

// 17.split
// var str = "Javascript is a greater language";
// var a = str.split("i");
// document.write(a);
// document.write("<br>")

// 18.repeat
// var str = "edioawjfojoFJJAWIODJIXJ";
// var a = str.repeat(2);
// document.write(a);
// document.write("<br>")

//19.SLICE:
// var str = "Javascript is a greater language";
// var a = str.slice(3);
// document.write(a);
// document.write("<br>")

// 20.substr:
// var str = "Javascript is a greater language";
// var a = str.substr(1, 5);
// document.write(a);
// document.write("<br>")

// 21.substring
// var str = "Javascript is a greater language";
// var a = str.substring(1,5);
// document.write(a);
// document.write("<br>")

// 22.tostring
// var str = "Javascript is a greater language";
// var str = 33;
// var a = str.toString();
// document.write(str + 22);
// document.write("<br>")

// 23.valueof
// var str = "Javascript is a greater language";
// var a = str.valueOf();
// document.write(a);
// document.write("<br>")

// try {
//     var a = 10;
//     john;
// } 
// catch (error) {
//     console.log(error.name);
//     console.log(error.message);
// }

// slice :(start, end)
// substring:(start, end)
// substr: (start, length)

// slice
// let text = "apple, banana, cherry";
// let part = text.slice(2, 4);
// document.getElementById("Demo").innerHTML = part;

// let text = "apple, banana, cherry";
// let part = text.slice(-7);
// console.log(part);
// document.getElementById("Demo").innerHTML = part;

// substring
// let text = "apple, banana, cherry";
// let part = text.substring(7);
// console.log(part);
// document.getElementById("Demo").innerHTML = part;

// // substr
// let text = "apple, banana, cherry";
// let part = text.substr(7);
// console.log(part);
// document.getElementById("Demo").innerHTML = part;



// var grade = "C";
// var result;
// switch (grade) {
//     case "A":
//         result = "A Grade";
//         break;
//     case "B":
//         result = "B Grade";
//         break;
//     case "C":
//         result = "C Grade";
//         break;
//     default:
//         result = "No Grade";
// }
// document.write(result);
// console.log(result);

let x = Number.MAX_SAFE_INTEGER;
document.getElementById("Demo").innerHTML = x;