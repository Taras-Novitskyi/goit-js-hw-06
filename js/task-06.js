const inputEl = document.querySelector("input#validation-input");

inputEl.addEventListener("blur", checkToCorrectInput);

function checkToCorrectInput(event) {
  
  if (event.currentTarget.value.length === Number(inputEl.dataset.length)) {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
  } else {
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
  }
}
