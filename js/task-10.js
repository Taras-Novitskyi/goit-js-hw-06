function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector("#controls > input");
const btnCreateEl = document.querySelector("[data-create]");
const btnDestroyEl = document.querySelector("[data-destroy]");
const boxEl = document.querySelector('#boxes');

btnDestroyEl.addEventListener("click", destroyBoxes);
btnCreateEl.addEventListener("click", createBoxes);
inputEl.addEventListener("input", rangeAmount);



function rangeAmount(event) {
  return event.currentTarget.value;
}

function createBoxes(amount) {
  const arroyDives = [];
  const inputValue = inputEl.value;

  for (let index = 0; index < inputValue; index += 1) {
    const size = 30 + 10 * index;
    const divEl = document.createElement("div");

    divEl.style.backgroundColor = getRandomHexColor();
    divEl.style.width = `${size}px`;
    divEl.style.height = `${size}px`;
    
    arroyDives.push(divEl);
  }
  boxEl.append(...arroyDives);

  cleanInput();
}

function cleanInput() {
  inputEl.value = '';
}

function destroyBoxes() {
  boxEl.innerHTML = '';
  cleanInput();
}

