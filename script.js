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

//highlight to-dos when mouse cursor is over it
toDoList.addEventListener("mouseover", function(event) {
  //if statement prevents all li tags to be highlighted when mouse is over the
  //parent element
  if (event.target.nodeName !== "UL")
    event.target.classList.add("todo-in-focus");
});

toDoList.addEventListener("mouseout", function(event) {
  event.target.classList.remove("todo-in-focus");
});

//User input
addButton.addEventListener("click", function() {
  if (
    userInput.value.trim() !== "" &&
    userInput.value.trim() !== "Add a new to-do"
  )
    addNewToDo(userInput.value);
  userInput.value = "Add a new to-do";
  userInput.classList.remove("userinput-in-focus");
});

userInput.addEventListener("keydown", function(event) {
  if (event.key === "Enter" && userInput.value.trim() !== "") {
    addNewToDo(userInput.value);
    userInput.value = "";
  }
});

userInput.addEventListener("focus", function(event) {
  event.currentTarget.value = "";
  event.target.classList.add("userinput-in-focus");
});

userInput.addEventListener("focusout", function(event) {
  if (event.currentTarget.value.trim() === "") {
    event.currentTarget.value = "Add a new to-do";
    event.target.classList.remove("userinput-in-focus");
  }
});
