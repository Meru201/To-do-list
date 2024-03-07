document.getElementById("addButton").addEventListener("click", addTask);
function addTask(){
    let text=document.getElementById("text").value
    localStorage.setItem(localStorage.length + 1, text);
}
for(let i = 0; i < localStorage.length; i++){

    let text = document.createTextNode(
        localStorage
        .getItem(localStorage
            .key(i))
            );
    text.className = "task-text";

    let id = document.createTextNode(
        localStorage
        .key(i)
            );
    id.className = "task-id";

    let newTask = document.createElement("div");
    newTask.className = "task";

    newTask.appendChild(id);
    newTask.appendChild(text);
    document
        .getElementById("tasks")
        .appendChild(newTask);
}
let a="I love my family"
console.log(a);