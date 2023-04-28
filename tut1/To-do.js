// const text = document.getElementById("fname");
// const email = document.getElementById("email");
// const number = document.getElementById("number");
// const Reset = document.getElementById("Reset")
// const edit = document.getElementById("edit")

// function submit(){

//     const x = document.write(text.value);
//     const y = document.write(email.value);
//     const z = document.write(number.value);
// }
var mytodo_list = [];
/*C*/

function CreateTask() {
    var task = document.getElementById("fname").value;
    mytodo_list.push(task);
    ReadAllTask();
}
/*R*/

function ReadAllTask() {
    var data = '';
    for (var i = 0; i < mytodo_list.length; i++) {
        data += '<tr>';
        data += '<td>' + mytodo_list[i] + '</td>';
        // data += '<td><button onclick=UpdateTask(' + i + ')>Update</button></td>';
        // data += '<td><button onclick=DeleteTask(' + i + ')>Delete</button></td>';
        data += '</tr>';
    }
    document.getElementById("mytodo-tasks").innerHTML = data;
}
// /*U*/
// function UpdateTask(item) {
//     document.getElementById("UpdateForm").style.display = 'block';
//     document.getElementById("fname").value = mytodo_list[item];
//     document.getElementById("UpdateForm").onsubmit = function () {
//         var task = document.getElementById("update-task").value;
//         mytodo_list.splice(item, 1, task.trim());
        
//     }
// }
// /*D*/
// function DeleteTask(item) {
//     mytodo_list.splice(item, 1);
//     ReadAllTask();
// }
// function CloseInput() {
//     document.getElementById("UpdateForm").style.display = 'none';
// }
