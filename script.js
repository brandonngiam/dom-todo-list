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

//strikethrough
toDoList.addEventListener("click", function(event) {
  event.target.classList.toggle("done");
});

//highlight in focus to-dos
toDoList.addEventListener("mouseover", function(event) {
  //if statement prevents all li tags to be highlighted when mouse is over the
  //parent element
  if (event.target !== event.currentTarget)
    event.target.classList.add("todo-in-focus");
});

toDoList.addEventListener("mouseout", function(event) {
  event.target.classList.remove("todo-in-focus");
});

//add new to do

// userInput.addEventListener("click", function(event) {
//   event.currentTarget.value = "";
//   event.target.classList.add(".userinput-in-focus");
// });

// addButton.addEventListener("click", function() {
//   if (userInput.value !== "") addNewToDo(userInput.value);
//   userInput.value = "";
// });
