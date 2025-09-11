
// var task = undefined
// task = "demo"
// task = "demo2"

var taskList = []
if(localStorage.getItem("taskList")){
     taskList = JSON.parse(localStorage.getItem("taskList"))
}

displayTaskList()



// display list
function displayTaskList(event){
    var taskListContainer = document.getElementById("task-list")
    for(i=0;i<taskList.length;i++){
        task = taskList[i]
        var taskItem = document.createElement("li")
        taskItem.innerText = task.description + " " + task.status
        taskListContainer.appendChild(taskItem)
    }
}
// add new task
function addNewTask(){
   
    var task = {}
    task.id = taskList.length+1
    task.description =document.getElementById("description").value
    task.status = "pending"
    taskList.push(task)
    localStorage.setItem("taskList",JSON.stringify(taskList))
}
//update task

// delete task




 