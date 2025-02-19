document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("addTaskBtn").addEventListener("click", addTask);
    document.getElementById("taskInput").addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            addTask();
        }
    });
});
function addTask (){
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();
    if (taskText === "")return;

 let li= document.createElement("li");
 let taskSpan = document.createElement("span");
 taskSpan.textContent = taskText;

 taskSpan.addEventListener("click", function() {
    taskSpan.classList.toggle("completed");
 });
let deleteButton = document.createElement("button");
deleteButton.textContent = "X";
deleteButton.classList.add("delete-btn");
deleteButton.addEventListener("click", function() {
    li.remove();
});

li.appendChild(taskSpan);
li.appendChild(deleteButton);
document.getElementById("taskList").appendChild(li);
taskInput.value = "";
}