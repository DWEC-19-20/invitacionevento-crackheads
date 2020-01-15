/* =================================
  Events for buttons
==================================== */
var guest = 0

document.getElementById("register").addEventListener("submit", function () {
    let name = document.getElementById("name").value
    create(name)
})

document.getElementsByClassName

function create(name) {
/* cant be created if there's another with the same name
    cant be blank names either */
    event.preventDefault()
    // crea un nuevo div 
    // y añade contenido 
    var newDiv = document.createElement("div");
    var newContent = document.createTextNode("Hola!¿Qué tal?");
    newDiv.appendChild(newContent); //añade texto al div creado. 

    // añade el elemento creado y su contenido al DOM
    var currentDiv = document.getElementById("div1");
    document.body.insertBefore(newDiv, currentDiv);
}

function edit() {
/* cant be modified if there's another with the same name
    cant be blank names either */

}

function remove() {
 //needs to confirm before

}

function confirmed() {
    document.getElementById(guest)
}

function filter () {

}