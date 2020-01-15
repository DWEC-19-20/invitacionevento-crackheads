var _guest = 0
var _edit = 0
var _names = [""]

// Catch Submit button
document.getElementById("register").addEventListener("submit", function () {
    let name = document.getElementById("name").value
/* cant be created if there's another with the same name
    cant be blank names either */
    if (document.getElementById("name").value != "" && names())
        create(name)
    else {
        document.getElementById("nameModal").style.display = "block"
        document.getElementById("wrapper").style.opacity = "0.4"
        event.preventDefault()
    }

    function names() {
        for (let i = 0; i < _names.length; i++) {
            if (document.getElementById("name").value == _names[i])
                return false
        }
        return true
    }
})

function create(name) {
    event.preventDefault()
    // Create the <li>
    let newLi = document.createElement("li")
    newLi.id = ("guest" + _guest)

    // Create the <span>
    newSpan = document.createElement("span")
    newSpan.id = ("edit" + _guest)
    newSpan = document.createElement("span")
    newLi.appendChild(newSpan) //añade texto al div creado. 
    let newContent = document.createTextNode(document.getElementById("name").value)
    _names.push(document.getElementById("name").value)
    console.log(_names)
    newSpan.appendChild(newContent)

    // Create the <label>
    let newLabel = document.createElement("label")
    newLi.appendChild(newLabel)
    newContent = document.createTextNode("Confirmed")
    newLabel.appendChild(newContent)
    // Create the checkbox
    newContent = document.createElement("input")
    newLabel.appendChild(newContent)
    newContent.type = 'checkbox'
    newLabel.appendChild(newContent)
    newContent.addEventListener('change', function() {
        if(this.checked) {
            newLabel.parentElement.className = "responded"
        } else {
            newLabel.parentElement.className = "not-responded"
        }
    })
    

    // Create edit <button>
    let newButton = document.createElement("button")
    newButton.className = "edit"
    newButton.addEventListener("click", function () {
        document.getElementById("wrapper").style.opacity = "0.4"
        modal.style.display = "block";
        //console.log(newButton.parentElement.firstElementChild)
        document.getElementById("newName").focus()

        //console.log(newButton.parentElement.firstElementChild)
        document.getElementById("newNameButton").onclick = function () {
            newButton.parentElement.firstElementChild.textContent = document.getElementById("newName").value
            modal.style.display = "none";
            document.getElementById("wrapper").style.opacity = "1"
        }

        document.getElementById("newName").addEventListener("keyup", function (e) {
            if (e.keyCode === 13) {
                newButton.parentElement.firstElementChild.textContent = document.getElementById("newName").value
                modal.style.display = "none";
                document.getElementById("wrapper").style.opacity = "1"
            }
        })
    })
    newLi.appendChild(newButton)
    newContent = document.createTextNode("edit")
    newButton.appendChild(newContent)

    // Create remove <button>
    let newButton2 = document.createElement("button")
    newButton2.addEventListener("click", function (){
        // Removes an element from the document
        remove.style.display = "block"
        document.getElementById("wrapper").style.opacity = "0.4"
        document.getElementById("delButton").onclick = function () {
            newButton2.parentElement.parentElement.removeChild(newLi)
            remove.style.display = "none"
            document.getElementById("wrapper").style.opacity = "1"
            console.log(newLi.removeChild(newLi.lastChild))
            _names.splice(newLi.removeChild(newLi.lastChild))
        }
    })
    newLi.appendChild(newButton2)
    newContent = document.createTextNode("remove")
    newButton2.appendChild(newContent)

    // Add created elements to the DOM 
    let currentLi = document.getElementById("li")
    document.getElementById("invitedList").insertBefore(newLi, currentLi)
    

    //console.log(document.getElementsByClassName("edit"))
    // Catch edit button
    _guest++
}

// Catch Filter button
    document.getElementById("filter").addEventListener('change', function() {
        let list = document.getElementById("invitedList")
        let confirmed = list.getElementsByClassName("responded")
        if(this.checked) {
            for (let i = 0 ; confirmed; i++)
                confirmed.item(i).setAttribute("style", "display: none;")
        } else {
            for (let i = 0 ; confirmed; i++)
                confirmed.item(i).setAttribute("style", "display: block;")
        }
    })

function filter () {

}

// ################## MODAL BOX #######################
// Get the modal
var modal = document.getElementById("editModal")
var remove = document.getElementById("removeModal")
var nameModal = document.getElementById("nameModal")

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0]
var delClose = document.getElementById("delClose")
var nameClose = document.getElementById("nameClose")

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none"
  document.getElementById("wrapper").style.opacity = "1"
}

// When the user clicks on X
delClose.onclick = function () {
    remove.style.display = "none"
    document.getElementById("wrapper").style.opacity = "1"
  }

nameClose.onclick = function () {
    nameModal.style.display = "none"
    document.getElementById("wrapper").style.opacity = "1"
  }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none"
    document.getElementById("wrapper").style.opacity = "1"
  }
}

