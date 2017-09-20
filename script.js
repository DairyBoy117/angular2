function futurama() {
	var x = document.getElementById("textinputid").value;
	if (x == "Electric Mucus") {
		document.getElementById("buttonid").disabled = false;
	} else {
		document.getElementById("buttonid").disabled = true;
	}
}