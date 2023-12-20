const todoForm = document.querySelector("#todo");
const todoInput = document.querySelector("#todo input");
const todoList = document.querySelector(".todo-list");
let toDos = [];

function savedToDos(toDos) {
  localStorage.setItem("todo", JSON.stringify(toDos));
}

function removeToDo(event) {
  const li = event.target.parentNode;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  savedToDos(toDos);
}
function paintToDo(newToDo, ToDoId) {
  const li = document.createElement("li");
  li.id = ToDoId;
  const span = document.createElement("span");
  span.innerText = newToDo;
  const todoBtn = document.createElement("button");
  todoBtn.innerText = "X";
  li.appendChild(span);
  li.appendChild(todoBtn);
  todoList.appendChild(li);
  todoBtn.addEventListener("click", removeToDo);
}

function handleSubmitTodo(event) {
  event.preventDefault();
  const newToDo = todoInput.value;
  todoInput.value = "";
  const newToDoObj = {
    id: Date.now(),
    text: newToDo,
  };

  toDos.push(newToDoObj);
  paintToDo(newToDo, newToDoObj.id);
  savedToDos(toDos);
}

todoForm.addEventListener("submit", handleSubmitTodo);

const savedToDo = localStorage.getItem("todo");

if (savedToDo !== null) {
  parseToDo = JSON.parse(savedToDo);
  toDos = parseToDo;
  parseToDo.filter((todo) => paintToDo(todo.text, todo.id));
}
