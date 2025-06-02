// Your code here
function deleteTaskListener() {
    let trashes = document.querySelectorAll(".fa-trash")
    trashes.forEach(trash => trash.addEventListener("click", () => {
        let listElement = trash.parentNode.parentNode
        listElement.parentNode.removeChild(listElement)
    }))
}

let toDo = document.getElementById("addToDo")
toDo.addEventListener("change", () => {
    // alert(toDo.value)
    let newlistElement = document.createElement("li")
    newlistElement.innerHTML = `<span><i class="fa fa-trash"></i></span> ${toDo.value}`
    document.querySelector("ul").appendChild(newlistElement)
    toDo.value = ""
    deleteTaskListener()
})

deleteTaskListener()