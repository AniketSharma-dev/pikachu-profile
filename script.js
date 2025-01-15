function sConsole(e) {
    e.preventDefault()
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var message = document.getElementById("message");
    
    console.log(name.value);
    console.log(email.value);
    console.log(message.value);
}
