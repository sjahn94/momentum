const imgArray = ["img/0.jpeg", "img/1.jpeg", "img/2.jpeg"];
const img = document.querySelector("img");

const randomNum = Math.floor(Math.random() * imgArray.length);
console.log(randomNum);
img.src = imgArray[randomNum];
