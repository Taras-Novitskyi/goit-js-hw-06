const inputEL = document.querySelector("input#font-size-control");
const textLabel = document.querySelector('span#text');

inputEL.addEventListener("input", rangeFontSize);
textLabel.style.fontSize = `${inputEL.value}px`;
	
	function rangeFontSize(event) {
  textLabel.style.fontSize = `${event.currentTarget.value}px`;
};
