document.getElementById("register").addEventListener("submit", function () { 
    event.preventDefault()
    
    let name = document.getElementById("name").value
    invitacion.Button.addUser(name)
    invitacion.createCell(name)
})
