let button = document.getElementById("superDuperButton");
button.addEventListener("click", function () {
	// Your code here
	let elem = document.createElement("li");
	elem.innerHTML = "Fourth element";
	document.getElementById("myList").appendChild(elem);

});
