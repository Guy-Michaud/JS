const questionContenaire = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const response = document.querySelector("p");
const mousemove = document.querySelector(".mousemove");

questionContenaire.addEventListener("click", () => {
  questionContenaire.classList.toggle("question-click");
});

btn1.addEventListener("click", () => {
  response.classList.add("show-response");
  response.style.background = "green";
});

btn2.addEventListener("click", () => {
  response.classList.add("show-response");
  response.style.background = "red";
});

window.addEventListener("mousemove", (e) => {
  mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";
});

window.addEventListener("mousedown", () => {
  mousemove.style.transform = "scale(2) translate(-25%,-25%)";
});

window.addEventListener("mouseup", () => {
  mousemove.style.transform = "scale(1) translate(-50%,-50%)";
  mousemove.style.border = "2px solid teal";
});

questionContenaire.addEventListener("mouseenter", () => {
  questionContenaire.style.background = "rgba(0,0,0,0.6)";
});
questionContenaire.addEventListener("mouseout", () => {
  questionContenaire.style.background = "pink";
});

response.addEventListener("mouseover", () => {
  response.style.transform = "rotate(2deg)";
});

//============================================================
//===========keypress event======================

const keypressContenaire = document.querySelector(".keypress");
const key = document.getElementById("key");

const ring = () => {
  const audio = new Audio();
  audio.src = "./";
  audio.play();
};

document.addEventListener("keypress", (e) => {
  key.textContent = e.key;

  if (e.key === "g") {
    keypressContenaire.style.background = "pink";
  } else if (e.key === "h") {
    keypressContenaire.style.background = "steal";
  } else {
    keypressContenaire.style.background = "red";
  }
});

//=====================================
