
const form = document.getElementById("form")
const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")
const password2 = document.getElementById("password2")

form.addEventListener('submit',e =>{

    e.preventDefault();
    checkInput();
})

function checkInput(){
    const usernamevalue = username.value.trim();
    const emailvalue = email.value.trim();
    const passwordvalue = password.value.trim();
    const password2value = password2.value.trim();

    if(usernamevalue === ''){
        setError(username,'Username Cannot Be Blank');
    }
    else{
        setSuccess(username);
    }

    if(email === ''){
        setError(email, 'Email Cannot Be Blank');
    }
    else if(!isEmail(emailvalue))
    {

    }
}