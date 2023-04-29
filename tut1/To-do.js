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
var updateInd = null
/*C*/

function CreateTask() {
    var task = document.getElementById("fname").value;
    var email = document.getElementById("email").value;
    var number = document.getElementById("number").value;
    if (updateInd == null) {
        mytodo_list.push({task: task, email: email, number: number});
        updateInd = null
        console.log('inside create task');
    } else {
        console.log('inside Update task');
        let item = mytodo_list[updateInd]
        item.task = task;
        item.email = email;
        item.number = number;

    }
    ReadAllTask();
}

/*R*/

function ReadAllTask() {
    var data = '  ';
    console.log(mytodo_list);
    for (var i = 0; i < mytodo_list.length; i++) {
        data += '<tr>';
        data += '<td>' + mytodo_list[i].task + '</td >' + '<td>' + mytodo_list[i].email + '</td >' + '<td>' + mytodo_list[i].number + '</td>';
        data += '<td><button onclick = UpdateTask(' + i + ')> Update</button></td>';
        // data += `<td><button onclick="UpdateTask(${i})">Update</button></td>`;
        data += '<td><button onclick = DeleteTask(' + i + ')> Delete </button></td>';
        data += '</tr>';
    }
    document.getElementById("mytodo-tasks").innerHTML = data;
    // ReadAllTask()
}
[{}]
function UpdateTask(index) {
    updateInd = index
    let item = mytodo_list[index]
    console.log(item.task);
    console.log(item.email);
    console.log(item.number);
    console.log(index);
    // document.getElementById("UpdateForm").style.display = 'block';
    document.getElementById("fname").value = item.task;
    document.getElementById("email").value = item.email;
    document.getElementById("number").value = item.number;
    // document.getElementById("UpdateForm").onsubmit = function UpdateTask() {
    //     mytodo_list.splice(index, 1, item);
    //     console.log('inside submit');
    //     // ReadAllTask()
    //     var task = document.getElementById("fname").value;
    //     var email = document.getElementById("email").value;
    //     var number = document.getElementById("number").value;
    //     mytodo_list.splice(index, 1, task.trim(), email.trim(), number.trim());
    //     ReadAllTask()
    //     // document.getElementById("fname") = item.value;
    //     // document.getElementById("email") = item.email;
    //     // document.getElementById("number") = item.number;
    //     // mytodo_list.splice(index, task.trim(), email.trim(), number.trim());
    // }
}
// function UpdateTask(index, item) {
//     // console.log(index);
//     // console.log(item);
//     document.getElementById("UpdateForm").style.display = 'block';
//     document.getElementById("fname").value = mytodo_list[item,index];
//     document.getElementById("UpdateForm").onsubmit = function () {

//         var task = document.getElementById("fname").value;
//         var email = document.getElementById("email").value;
//         var number = document.getElementById("number").value;

//         mytodo_list.splice(item, 1, task.trim(), email.trim(), number.trim());
//     }
// }

function DeleteTask(item) {
    mytodo_list.splice(item, 1);
    ReadAllTask();
}
function CloseInput() {
    document.getElementById("UpdateForm").style.display = 'none';
}
