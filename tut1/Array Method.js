// toString
// let bikes = ["splendar", "honda", "activa", "pleasure"];
// console.log(bikes.toString());

// o/p:
// splendar, honda, activa, pleasure
// ___________________________________
// join
// let bike = ["splendar", "honda", "activa", "pleasure"];
// console.log(bike.join());
// console.log(bike.join(" "));
// console.log(bike.join("-"));

// o/p :
// splendar, honda, activa, pleasure
// splendar honda activa pleasure
// splendar - honda - activa - pleasure
// ___________________________________________________
// pop
// let BIKE = ["splendor", "activa", "pleasure", "honda"];
// console.log(BIKE.pop());
// console.log(BIKE);

// O/P:
// honda
// ['splendor', 'activa', 'pleasure']
// ___________________________________________________
// push
// let bike = ["splendor", "activa", "pleasure", "honda"];
// console.log(bike.push("car", "Bullet"));
// console.log(bike);

// O/P:
// ['splendor', 'activa', 'pleasure', 'honda', 'car', 'Bullet']
// ___________________________________________________
// shift
// let bike = ["splendor", "activa", "pleasure", "honda"];
// console.log(bike.shift());
// console.log(bike);

// O/P:
// splandar
// ['activa', 'pleasure', 'honda']
// ___________________________________________________
// unshift
// let bike = ["splendor", "activa", "pleasure", "honda"];
// console.log(bike.unshift("car", "bus"));
// console.log(bike);

// O/P:
// ['car', 'bus', 'splendor', 'activa', 'pleasure', 'honda']
// ___________________________________________________
// delete
// let bike = ["splendor", "activa", "pleasure", "honda"];
// delete bike[1];
// console.log(bike);

// O/P :
// ['splendor', empty, 'pleasure', 'honda']
// ___________________________________________________
// concat
// let Array1 = [1, 2, 3, 4];
// let Array2 = [5, 6, 7, 8];
// let Array3 = [9, 10, 11, 12];
// let Arraynew = Array1.concat(Array2, Array3);
// console.log(Arraynew);

// O/P :
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
// ___________________________________________________
// sort
// let Array = [11, 12, 48, 24, 31, 33];
// let String = ["banana", "apple"];
// Array.sort();
// const value = Array.sort( function(a,b) {return b - a});
// console.log(value);

// O/P :
// [48, 33, 31, 24, 12, 11]

// String.sort();
// console.log(String);
// O/P :
// ['apple', 'banana']
// ___________________________________________________
// splice
// let Array = ["11", "22,", "23", "46", "45"];
// Array.splice(1, 3, "A", "b", "c")
// console.log(Array);

// O/P:
// ['11', 'A', 'b', 'c', '45']
// ___________________________________________________
// slice
// let Array = [1, 2, 3, 4, 5, 6];
// let New = Array.slice(2, 5);
// console.log(New);

// O/P :
// [3, 4, 5]
// ___________________________________________________
// reverse
// let Array = [1, 2, 3, 4, 5, 6];
// let String = ["A", "B", "B", "C", "D", "h", "a"];
// Array.reverse();
// console.log(Array);

// O/P:
// [6, 5, 4, 3, 2, 1]
// String.reverse();
// console.log(String);
// O/P :
// ['a', 'h', 'D', 'C', 'B', 'B', 'A']s
// ___________________________________________________
// indexof
// let Array = ["abc", "edf", "ghi"];
// console.log(Array.indexOf("abc"));

// O/P :
// 0
// ___________________________________________________
// lastindexof
// let Array = ["abc", "edf", "ghi"];
// console.log(Array.lastIndexOf("edf"))

// O/P:
// 1
// ___________________________________________________
// find
// let Array = [1, 2, 3, 4, 5];
// const Array2 = Array.find  (function(a) {
//     return a>2
// })
// console.log(Array2)

// O/P:
// 3
// ___________________________________________________
// findindex
// let Array = [1, 2, 3, 4, 5];

// console.log(Array.findIndex(function(a){
//      a > 5
// }));
// ___________________________________________________
// includes
// let num = [1, 2, 3, 4];
// let num2 = num.includes(6);
// console.log(num2);

// O/P:
// false

// let str = ["abc", "bhhh", "abb"];
// let str2 = str.includes("abb");
// console.log(str2);

// O/P:
// true
// ___________________________________________________
// entries

// let Day = ["Monday", "tuesday", "Wednesday", "Thrusday"];
// let Day2 = Day.entries();
// for (let x of Day2) {
//     console.log(x)
// };

// O/P :
// [0, 'Monday']
// [1, 'tuesday']
// [2, 'Wednesday']
// [3, 'Thrusday']

// ___________________________________________________

// filter
// const Age = [10, 20, 30, 40];
// const result = Age.filter(Checkage);

// function Checkage(Age){
//     return Age > 20;
// }
// console.log(result);

// O/P:
// [30, 40]
// ___________________________________________________
// reduce
                                // const numbers = [105, 250, 100];

                                // numbers.reduce(myFunc);

                                // function myFunc(total, num) {
                                //     return total - num;
                                // }
                                // console.log(myFunc);
// ___________________________________________________
// Form :
// console.log(Array.from("Search"));

// O/P :
// ['S', 'e', 'a', 'r', 'c', 'h']
// ___________________________________________________
// Spread means ... dots.

// let y1 = ["Jan", "feb", "March"];
// let y2 = ["april", "may", "june"];
// let y3 = ["July", "aug", "sept"];
// let y4 = ["oct", "nov", "Dec"];

// let Year = [...y1, ...y2, ...y3, ...y4];
// console.log(Year);

// O/P :
// ['Jan', 'feb', 'March', 'april', 'may', 'june', 'July', 'aug', 'sept', 'oct', 'nov', 'Dec']
// ___________________________________________________
// constant:
// const card = ["jio", "Airtel", "idea", "vi"];
// console.log(card);

// o/P:
// ["jio", "Airtel", "idea", "vi"]
// ___________________________________________________


