// Catch default behavior of the submit
function processForm(e) {
    if (e.preventDefault) e.preventDefault();
    // You must return false to prevent the default
    return false;
}
var form = document.getElementById('register');
if (form.attachEvent) {
    form.attachEvent("submit", processForm);
} else {
    form.addEventListener("submit", processForm);
}

document.getElementById("register").addEventListener("submit", function () { 
    
})
