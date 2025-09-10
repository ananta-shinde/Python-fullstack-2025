
// var task = undefined
// task = "demo"
// task = "demo2"

var taskList = []


// display list
function displayTaskList(){
    for(i=0;i<taskList.length;i++){
        task = taskList[i]
        console.log(task.id+" "+task.description+" "+task.status)
    }
}
// add new task
function addNewTask(){
    var task = {}
    task.id = document.getElementById("taskId").value
    task.description =document.getElementById("description").value
    task.status = "pending"
    taskList.push(task)
}
//update task

// delete task




 