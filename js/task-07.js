const inputEL = document.querySelector("input#font-size-control");
const textLabel = document.querySelector('span#text');

inputEL.addEventListener("input", rangeFontSize);

function rangeFontSize(event) {
	textLabel.style.fontSize = `${event.currentTarget.value}px`;
};
