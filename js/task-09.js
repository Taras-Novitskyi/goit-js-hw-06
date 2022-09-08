function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector("body");
const currentColorEl = document.querySelector("span.color");
const btn = document.querySelector("button.change-color");

btn.addEventListener("click", changeBodyColor);

function changeBodyColor() {
  bodyEl.style.backgroundColor = getRandomHexColor();
  currentColorEl.textContent = getRandomHexColor();
}
