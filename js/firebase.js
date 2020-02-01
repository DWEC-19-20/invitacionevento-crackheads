// Your web app's Firebase configuration
var mySubString2 = "no"

var firebaseConfig = {
  apiKey: "AIzaSyD8Aa_po5GYZt5c_Bx8n-20DqCKpUyd51g",
  authDomain: "speedfest-8a08d.firebaseapp.com",
  databaseURL: "https://speedfest-8a08d.firebaseio.com",
  projectId: "speedfest-8a08d",
  storageBucket: "speedfest-8a08d.appspot.com",
  messagingSenderId: "701176021615",
  appId: "1:701176021615:web:8144bc21b550181181039a",
  measurementId: "G-D36RP2RRND"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var db = firebase.firestore()

const usersRef = db.collection("first")

var invitacion = new Create(document.getElementById("name").value)

// Show current users on DB
db.collection("users").get().then(function (querySnapshot) {
    querySnapshot.forEach(function (doc) {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data())
    let obj = Object.values(doc.data())
    let myJSON = JSON.stringify(obj)
    var mySubString = myJSON.substring(
        myJSON.lastIndexOf(',') + 2,
        myJSON.lastIndexOf('') - 2
    )
    mySubString2 = myJSON.substring(2, myJSON.lastIndexOf(',') - 1)
    //create(mySubString)
    invitacion.createCell(mySubString)
    })
})

/*
// FireBase DB Triggers
var docRef = db.collection("users").doc("user1");

docRef.get().then(function(doc) {
  if (doc.exists) {
      console.log("Document data:", doc.data());
  } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
  }
}).catch(function(error) {
  console.log("Error getting document:", error);
});*/