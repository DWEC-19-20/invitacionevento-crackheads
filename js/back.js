class Create {

    constructor(n) {
        this.name = n
    }

    createCell = (name) => {
        let newLi = document.createElement("li")

        let newSpan = document.createElement("span")
        newSpan.textContent = name
        newLi.appendChild(newSpan)

        let newLabel = document.createElement("label")
        newLabel.textContent = "Confirmed "
        let newContent = document.createElement("input")
        newContent.type = 'checkbox'
        newContent.onchange = () => {
            this.Button.checkListener(newContent)
        }
        newLabel.appendChild(newContent)
        newLi.appendChild(newLabel)

        let newEditButton = document.createElement("button")
        newEditButton.className = "edit"
        newEditButton.textContent = "edit"
        newLi.appendChild(newEditButton)

        let newDelButton = document.createElement("button")
        newDelButton.textContent = "remove"
        newContent = this.Button
        newDelButton.onclick = () => {
            this.Button.delButton(newSpan.textContent)
            newDelButton.parentElement.parentElement.removeChild(newLi)
        }
        newLi.appendChild(newDelButton)

        document.getElementById("invitedList").appendChild(newLi)
    }

    Button = {

        addUser: function (name) {
            db.collection("users").doc(name).set({
                username: name,
                confirmed: "no"
              }).then(function() {
                console.log("User saved!")
              }).catch(function (error){
                console.log("Got an error: ", error)
              })
        },

        delButton: function (user) {
            db.collection("users").doc(user + "").delete().then(function() {
                console.log("Document successfully deleted!");
              }).catch(function(error) {
                console.error("Error removing document: ", error);
              })
        },

        checkListener: function (objectN) {
            console.log(objectN)
            if (objectN)
                objectN.parentElement.className = "responded"
            else
                objectN.parentElement.className = "not-responded"
        }
    }
}