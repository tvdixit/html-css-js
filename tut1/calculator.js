function clearscreen() {
    document.getElementById("result").value = "";
}

function display(value) {
    document.getElementById("result").value += value;
}

function calculate() {
    var a = document.getElementById("result").value;
    var b = eval(a);
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