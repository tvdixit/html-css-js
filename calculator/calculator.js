function clearscreen() {
    document.getElementById("result").value = "";
}

function display(value) {

    // if ((document.getElementById("result").value.length == 0 && "+,/,*)".includes(value)) == false && document.getElementById("result").value != '-') {
    document.getElementById("result").value += value;
    addToHistory(value);
}
// else if ((value == '-') && document.getElementById("result").value.length >= 0 && document.getElementById("result").value.length < 1) {
// document.getElementById("result").value += value;
// }
// if ("%" == NaN && "√" == NaN) {
//     return (0)
// }
// }
function arithmetic(value) {
    if ((document.getElementById("result").value.length == 0 && "+,/,*)".includes(value)) == false && document.getElementById("result").value != '-') {
        document.getElementById("result").value += value;
    }
    else if ((value == '-') && document.getElementById("result").value.length >= 0 && document.getElementById("result").value.length < 1) {
        document.getElementById("result").value += value;
    }
    addToHistory(value);
}

function calculate() {
    var a = document.getElementById("result").value;
    console.log("a", a);
    var b = eval(a);
    console.log("b", b);
    document.getElementById("result").value = b;

    addToHistory('=' + b);
}

function ClearOne() {
    let res = document.getElementById("result");
    res.value = res.value.substr(0, res.value.length - 1);
    addToHistory(' ');
}

let history =  " ";
let data = '';
function addToHistory(value) {
    history += value;
    document.getElementById('history').innerText = history;
    
    // document.getElementById('history').innerText = history + "<br>";
    
        // data += '<tr>';
        // data += '<td>' + '</td>';
        
        // data += '</tr>';
        // document.getElementById('history').innerHTML = data;
    // console.log(document.getElementById('history').innerHTML = data);
}