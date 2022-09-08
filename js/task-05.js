const inputEl = document.querySelector("input#name-input");
const nameLabel = document.querySelector("span#name-output");

inputEl.addEventListener("input", onInputChange);

function onInputChange(event) {
  if (!event.currentTarget.value) {
    nameLabel.textContent = "Anonymous";
  } else {
    nameLabel.textContent = event.currentTarget.value;
  }
}
