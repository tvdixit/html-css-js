var mytodo_list = [];
var updateInd = null;
function CreateTask() {
    var task = document.getElementById("fname").value;
    var email = document.getElementById("email").value;
    var number = document.getElementById("number").value;
    if (updateInd == null) {
        mytodo_list.push({ task: task, email: email, number: number });
        updateInd = null;
    } else {
        let item = mytodo_list[updateInd];
        item.task = task;
        item.email = email;
        item.number = number;
    }
    ReadAllTask();
}
function ReadAllTask() {
    var data = '';
    console.log(mytodo_list);
    if (mytodo_list.length > 0) {
        for (var i = 0; i < mytodo_list.length; i++) {
            data += '<tr>';
            data += '<td>' + mytodo_list[i].task + '</td >' + '<td>' + mytodo_list[i].email + '</td >' + '<td>' + mytodo_list[i].number + '</td>';
            data += '<td><button onclick = UpdateTask(' + i + ')>Update</button></td>';
            data += '<td><button onclick = DeleteTask(' + i + ')> Delete </button></td>';
            data += '</tr>';
            document.getElementById("mytodo-tasks").innerHTML = data;
        }
    } else {
        document.getElementById("mytodo-tasks").innerHTML = data;
    }
}
function UpdateTask(index) {
    updateInd = index
    let item = mytodo_list[index];
    document.getElementById("fname").value = item.task;
    document.getElementById("email").value = item.email;
    document.getElementById("number").value = item.number;
    closed();
}
function DeleteTask(item) {
    mytodo_list.splice(item, 1);
    // console.log(mytodo_list);
    ReadAllTask();
}
// let DeleteTask = (e) => {
//     // e.parentElement.parentElement.remove();
//     e.mytodo_list.mytodo_list.remove();
//     ReadAllTask();
// }

function CloseInput() {
    document.getElementById("UpdateForm").style.display = 'none';
}

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function () {
    modal.style.display = "block";
}
span.onclick = function () {
    modal.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
function closed() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

// function press() {
//     console.log(document.querySelector("#fname").style.color = ("blue"));
// }
// function down() { onkeypress="press()" onkeydown="down()"
//     console.log(document.querySelector("#fname").style.color = ("red"));
// }