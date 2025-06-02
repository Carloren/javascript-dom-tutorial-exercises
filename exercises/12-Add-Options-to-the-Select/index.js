let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];

// Your code here
for (let index = 0; index < countries.length; index++) {
    let element = countries[index];
    let option = document.createElement("option")
    option.innerHTML = element
    document.getElementById("mySelect").appendChild(option)
}

let dropDown = document.getElementById("mySelect");
dropDown.addEventListener("change", function () {
    alert(dropDown.value)
})