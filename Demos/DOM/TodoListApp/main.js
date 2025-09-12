
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
        var newRow = document.createElement("div");
        newRow.classList.add("row")
        var col1 = document.createElement("div")
        col1.classList.add("col")
        col1.innerHTML = task.description
        var col2 = document.createElement("div")
        col2.classList.add("col")
        col2.innerHTML = task.status
        var col3 = document.createElement("div")
        col3.classList.add("col-2")
        var deleteBtn = document.createElement("button")
        deleteBtn.innerText = "delete"
        deleteBtn.className = "btn btn-danger"
        deleteBtn.name = task.id
        deleteBtn.addEventListener("click",deleteTask)
        col3.appendChild(deleteBtn)
        newRow.appendChild(col1)
        newRow.appendChild(col2)
        newRow.appendChild(col3)
        taskItem.appendChild(newRow)
        // taskItem.innerText = task.description + " " + task.status
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
function deleteTask(event){
    var id = event.target.name
    var taskindex = getTaskIndexById(id)
    taskList.splice(taskindex,1);
    localStorage.setItem("taskList",JSON.stringify(taskList))
    location.reload()
}

function getTaskIndexById(id){
    for(i=0;i<taskList.length;i++){
        var task=taskList[i]
        if(task.id == id){
            return i;
        }
    }
    return -1;
}



 