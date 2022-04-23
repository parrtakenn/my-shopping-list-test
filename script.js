var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var list = document.querySelectorAll('ul>li');

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";

	// Delete Button
	var deleteButton = document.createElement("button");
	deleteButton.setAttribute("class", "btn")
	deleteButton.appendChild(document.createTextNode(" Remove "));
	ul>li.appendChild(deleteButton).addEventListener("click", removeItem);

	// Strike-through
	ul.appendChild(li).addEventListener("click", toggleList);
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function removeItem() {
	this.parentNode.remove();
}

function toggleList () {
	this.classList.toggle("done");
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

// If you click on the list item, it toggles the .done class on and off.

// Add buttons next to each list item to delete the item when clicked on 
// its corresponding delete button.

// BONUS: When adding a new list item, it automatically adds the delete 
// button next to it (hint: be sure to check if new items are clickable too!)