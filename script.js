function futurama() {
	var x = document.getElementById("textinputid").value;
	if (x == "Electric Mucus") {
		document.getElementById("buttonid").disabled = false;
	} else if (x == "pink") {
		document.getElementById("buttonid").style.backgroundColor = "#FFC0CB";
	}
}