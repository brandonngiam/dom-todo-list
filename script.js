const tasks = ["buy milk", "eat dinner", "nail javascript", "give feedback"];

let toDoList = document.body.querySelector("#todo-list");
let addButton = document.body.querySelector("button");
let userInput = document.body.querySelector("input");

function addNewToDo(newToDo) {
  let newToDoElement = document.createElement("li");
  newToDoElement.innerHTML = newToDo;
  toDoList.appendChild(newToDoElement);
}

for (task of tasks) {
  addNewToDo(task);
}

toDoList.addEventListener("click", function(event) {
  event.target.classList.toggle("done");
});

toDoList.addEventListener("mouseover", function(event) {
  event.target.classList.add("toDoInFocus");
});

toDoList.addEventListener("mouseout", function(event) {
  event.target.classList.remove("toDoInFocus");
});

addButton.addEventListener("click", function() {
  if (userInput.value !== "") addNewToDo(userInput.value);
  userInput.value = "";
});
