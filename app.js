const toggleIcons = document.querySelectorAll('.toggle-pass');

toggleIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        const input = icon.previousElementSibling;
        if (input.type === 'password') {
            input.type = 'text';
            icon.classList.remove('fa-eye');
            icon.classList.add('fa-eye-slash');
        } else {
            input.type = 'password';
            icon.classList.remove('fa-eye-slash');
            icon.classList.add('fa-eye');
        }
    });
});

const loginForm = document.querySelector(".login-form");
const signupForm = document.querySelector(".signup-form");
const goSignUp = document.getElementById("goSignUp");
const goLogin = document.getElementById("goLogin");

goSignUp.addEventListener("click" , (e) =>{
    e.preventDefault();
    loginForm.classList.remove("active");
    signupForm.classList.add("active");
})

goLogin.addEventListener("click" , (e) =>{
    e.preventDefault();
    signupForm.classList.remove("active");
    loginForm.classList.add("active");
})

const confirmPassword = document.getElementById("con-password-sign");
const passwordSign = document.getElementById("password-sign");

function checkPasswordMatch(){
    if(confirmPassword.value === "" || passwordSign.value === ""){
        confirmPassword.style.border = "2px solid transparent";
        passwordSign.style.border= "2px solid transparent";
        return;
    }

    if(confirmPassword.value !== passwordSign.value){
        confirmPassword.style.border = "2px solid red";
        passwordSign.style.border= "2px solid red";
    }
    else{
        confirmPassword.style.border = "2px solid green";
        passwordSign.style.border= "2px solid green";
    }
}

confirmPassword.addEventListener("input", checkPasswordMatch);
passwordSign.addEventListener("input", checkPasswordMatch);
