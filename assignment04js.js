/* JS for Ass03b */

var buttons = document.getElementsByName("checkBox");

function beginSearch() {
	console.log(checkBox.value);
}

for (var i = 0; i < buttons.length; i++)
	buttons[i].addEventListener("change", console.log("example"));