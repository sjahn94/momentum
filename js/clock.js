const time = document.querySelector(".time");

function clock() {
  const date = new Date();

  const hours = date.getHours();
  let minutes = String(date.getMinutes());
  let seconds = String(date.getSeconds());

  minutes = minutes.padStart(2, "0");
  seconds = seconds.padStart(2, "0");
  time.innerText = `${hours}:${minutes}:${seconds}`;
}
clock();
setInterval(clock, 1000);
