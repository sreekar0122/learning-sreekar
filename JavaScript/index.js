let userForm = document.getElementById("userForm")
let emailInput = document.getElementById("emailInput");
let passwordInput = document.getElementById("passwordInput");
let loginBtn = document.getElementById("loginBtn");
let passwordError = document.getElementById("passwordError");

userForm.addEventListener("submit", function(event){
    event.preventDefault()
    let userEmail = emailInput.value
    let userPassword = passwordInput.value

    if(userEmail === "" || userPassword === ""){
        alert("Please fill in email and password")
    }

    if(userPassword.length < 5){

        let paraElement = document.createElement("p")
        paraElement.textContent = "Password should be at least 5 characters long"
        userForm.appendChild(paraElement)


        alert("Password should be at least 5 characters long")
    }

    if(userPassword.match(/[a-z]/g) && userPassword.match(/[A-Z]/g) && userPassword.match(/[0-9]/g) && userPassword.match(/[!@#$%^&*()]/g)){
        alert("Password is valid")
    }else{
        alert("Password should contain at least one uppercase letter, one lowercase letter, one number, and one special character")
    }
    

})