/* =================================
  Events for buttons
==================================== */
var guest = 0

// Catch Submit button
document.getElementById("register").addEventListener("submit", function () {
    let name = document.getElementById("name").value
    if (document.getElementById("name").value != "")
        create(name)
    else
        alert("Campo vacio")
})

function create(name) {
/* cant be created if there's another with the same name
    cant be blank names either */
    event.preventDefault()
    // Create the <li>
    let newLi = document.createElement("li")
    newLi.id = ("guest" + guest)

    // Create the <span>
    let newSpan = document.createElement("span")
    newLi.appendChild(newSpan) //añade texto al div creado. 
    let newContent = document.createTextNode(document.getElementById("name").value)
    newSpan.appendChild(newContent)

    // Create the <label>
    let newLabel = document.createElement("label")
    newLi.appendChild(newLabel)
    newContent = document.createTextNode("Confirmed")
    newLabel.appendChild(newContent)
    newContent = document.createElement("input")
    newLabel.appendChild(newContent)
    newContent.type = 'checkbox'
    newLabel.appendChild(newContent)

    // Create edit <button>
    let newButton = document.createElement("button")
    newButton.id = ("edit")
    newLi.appendChild(newButton)
    newContent = document.createTextNode("edit")
    newButton.appendChild(newContent)

    // Create remove <button>
    let newButton2 = document.createElement("button")
    newLi.appendChild(newButton2)
    newContent = document.createTextNode("remove")
    newButton2.appendChild(newContent)

    // Add created elements to the DOM 
    let currentLi = document.getElementById("li")
    document.getElementById("invitedList").insertBefore(newLi, currentLi)
    guest++

    // Catch edit button
    document.getElementById("edit").addEventListener("click", function () {
        edit()
    })

}

function edit() {
/* cant be modified if there's another with the same name
    cant be blank names either */
    console.log(document.getElementById("edit").parentElement)

    //document.getElementById("edit").setAttribute()
}


// Catch remove button
//document.getElementById("remove").addEventListener("submit", function () {

//})

function remove() {
 //needs to confirm before

}

function confirmed() {
    document.getElementById(guest)
}

function filter () {

}