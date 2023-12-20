const todoForm = document.querySelector("#todo");
const todoInput = document.querySelector("#todo input");

function handleSubmitTodo(event) {
  event.preventDefault();
  const todoValue = document.querySelector("#todo input").value;
  const li = document.createElement("li");
  const span = document.createElement("span");

  span.innerText = todoValue;

  const todoBtn = document.createElement("button");
  todoBtn.innerText = "X";
  //todoBtn.addEventListener("click", removeData);

  li.appendChild(span);
  li.appendChild(todoBtn);
  todoForm.appendChild(li);

  todoInput.value = "";
}

todoForm.addEventListener("submit", handleSubmitTodo);
