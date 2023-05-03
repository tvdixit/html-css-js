function clearscreen() {
    document.getElementById("result").value = "";
}

function display(value) {
    document.getElementById("result").value += value;
}

function calculate() {
    var a = document.getElementById("result").value;
    console.log("a", a);
    var b = eval(a);
    console.log("b", b);
    document.getElementById("result").value = b;
}

function cancel() {
    console.log(document.getElementById("result"));
    document.getElementById("result").value;
    calc.result = calc.result.substr(0, calc.result.length - 1);
}

function ClearOne() {
    let res = document.getElementById("result");
    res.value = res.value.substr(0, res.value.length - 1)
}

// if (calc.result.value.includes("!")) {

//     size = calc.result.value.length;
//     n = Number(calc.result.value.substring(0, size - 1));
//     f = 1;

//     for (i = 2; i <= n; i++)
//         f = f * i;
//     calc.result.value = f;
// }
// function braces(){
// let a = arr.forEach(value => {
//     result.push(value in result
//     ? options[value](...stack.splice(-2)): value);
// });
// }
// return braces;
// console.log(stackCalculator(arr));