function clearscreen() {
    document.getElementById("result").value = "";
}

function display(value) {

    if ((document.getElementById("result").value.length == 0 && "+,/,*)".includes(value)) == false && document.getElementById("result").value != '-') {
        document.getElementById("result").value += value;
    }
    else if ((value == '-') && document.getElementById("result").value.length >= 0 && document.getElementById("result").value.length < 1) {
        document.getElementById("result").value += value;
    }
    // if ("%" == NaN && "√" == NaN) {
    //     return (0)
    // }
}

function calculate() {
    var a = document.getElementById("result").value;
    console.log("a", a);
    var b = eval(a);
    console.log("b", b);
    document.getElementById("result").value = b;
}

function ClearOne() {
    let res = document.getElementById("result");
    res.value = res.value.substr(0, res.value.length - 1)
}