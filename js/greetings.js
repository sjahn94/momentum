const form = document.querySelector("#login");
const userform = document.querySelector(".user");
const user = document.querySelector(".user h2");
let deleteBtn;

function deleteUsername() {
  const button = document.querySelector(".user button");
  localStorage.removeItem("username");
  button.remove();
  userform.className = "hidden";
  form.className = "";
}

function addDelteBtn() {
  const button = document.createElement("button");
  button.innerText = "X";
  userform.appendChild(button);
  button.addEventListener("click", deleteUsername);
}

function handleSubmitUser(event) {
  event.preventDefault();
  const username = document.querySelector("#login input").value;
  localStorage.setItem("username", username);
  form.className = "hidden";
  userform.className = "user";
  user.innerText = `Hello ${username}`;

  addDelteBtn();
}

const username = localStorage.getItem("username");
// 로컬 스토리지에 username이 있으면 input 숨기고 hello username 출력
if (username !== null) {
  form.className = "hidden";
  user.innerText = `Hello ${username}`;

  addDelteBtn();
}

form.addEventListener("submit", handleSubmitUser);
