
const getData = async () => {
    var data = "Hello World";
    return data;
}
getData().then(data => console.log(data));


const getData1 = async () => {
    var y = await "Hello World";
    console.log(y);
}

console.log(1);
getData();
console.log(2);
// _____________________________________________________________

let promise = new Promise(function(resolve, reject){
    setTimeout(function () {
    resolve("Hey..Whatsup !!")}, 2000);
});
async function display() {
    let result = await promise;

    console.log(result);
    console.log("Hello");
}
display();
// ______________________________________________________________

