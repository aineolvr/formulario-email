function validateEmail(){
    const email = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const emailRegex =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // expressão regular para validar o email

    if(email.value.trim() === ""){
        email.style.backgroundColor = "#FAC9C2";
        email.style.borderColor = "red";
        emailError.style.display = "inline";
    } else if(!emailRegex.test(email.value) ) {
        email.style.backgroundColor = "#FAC9C2";
        email.style.borderColor = "red";
        emailError.style.display = "inline";
    } else{
        email.style.borderColor = "#ccc";
        emailError.style.display = "none";
    }
}

function validateForm(event){
    validateEmail();
   event.preventDefault();
   
}

