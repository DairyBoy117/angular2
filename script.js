/*function futurama() {
	var x = document.getElementById("textinputid").value;
	if (x == "Electric Mucus") {
		document.getElementById("buttonid").disabled = false;
	} else if (x == "pink") {
		document.getElementById("buttonid").style.backgroundColor = "#FFC0CB";
	}
}*/

const button = window.document.getElementById("buttonid");
button.disabled = true;

window.document.getElementById("textinputid") //getting an html element
	.addEventListener("input", 
		function(event) {
			const userInputText = event.target.value; //what the user types

			button.style.backgroundColor = userInputText;

			button.disabled = userInputText.toLowerCase() !== 'electric mucus';
		}
	);