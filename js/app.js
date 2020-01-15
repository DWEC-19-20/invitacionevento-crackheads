 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyD8Aa_po5GYZt5c_Bx8n-20DqCKpUyd51g",
    authDomain: "speedfest-8a08d.firebaseapp.com",
    databaseURL: "https://speedfest-8a08d.firebaseio.com",
    projectId: "speedfest-8a08d",
    storageBucket: "speedfest-8a08d.appspot.com",
    messagingSenderId: "701176021615",
    appId: "1:701176021615:web:8144bc21b550181181039a",
    measurementId: "G-D36RP2RRND"
  }
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)
  firebase.analytics()

  var firestore = firebase.firestore()

    const docRef = firestore.doc("first/firstDoc")
    const inputTextField = document.getElementById("name")
    const saveButton = document.getElementById("submit")

    saveButton.addEventListener("click", function() {
      const textToSave = inputTextField.value
      console.log("I am going to save " + textToSave + " to Firestore")
      docRef.set({
        name: textToSave
      }).then(function() {
        console.log("Status saved!")
      }).catch(function (error){
        console.log("Got an error: ", error)
      })
    })