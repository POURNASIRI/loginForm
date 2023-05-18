const $ = document
const userName = $.querySelector('.username');
const password= $.querySelector('.password');
const email = $.querySelector('.email')
const passwordValid = $.querySelector('.password__validation');
const userNameValid = $.querySelector('.username__validation');
const emailValid = $.querySelector('.email__validation');
var emailRegex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
var usernameRegex =/^[A-aZ=z]$/;
var passwordRegex = /^[a-zA-Z0-9]+$/;
const configPassword = $.querySelector('.config');
const configValid = $.querySelector('.config__password');
const btn = $.querySelector('.btn')
const form = $.querySelector('.form')
const loginMessage = $.createElement('p')
form.after(loginMessage)
loginMessage.classList.add('message')
loginMessage.innerText = 'Login successful';
const iconUser = $.querySelector('.bxs-user')
const iconEmail = $.querySelector('.bxs-envelope');
const iconLock  = $.querySelector('.bxs-lock-alt');
const showPassword = $.querySelector('.show')
const lockConfi = $.querySelector('.confi')




userName.addEventListener('blur', function(){
  
    if(userName.value == ""){
        userNameValid.style.display = 'block'
        userNameValid.style.color = 'red'
        userNameValid.innerText = 'please enter your username'
        userName.style.border = '1px  solid red'
        iconUser .style.color = 'red'
    }
    if(!userName.value.match(usernameRegex)){
        userNameValid.style.display = 'block'
        userNameValid.style.color = 'red'
        userNameValid.innerText = 'please enter correct username'
        userName.style.border = '1px  solid red'
        iconUser .style.color = 'red'
        
       
    }
    if( userName.value.length > 15 || userName.value.length < 4 ){
        userNameValid.style.display = 'block'
        userNameValid.style.color = 'red'
        userNameValid.innerText = 'username must be 15 character'
        userName.style.border = '1px  solid red'
        iconUser .style.color = 'red'
    }else{
        userNameValid.style.display = 'block'
        userNameValid.style.color = 'green'
        userNameValid.innerText = 'username is correct'
        userName.style.border = '1px  solid green'
        iconUser .style.color = 'green'
    }
 
        setTimeout(() =>{
        userNameValid.style.display = 'none'
        userName.style.border = '1px  solid #ccc'
        iconUser .style.color = '#ccc'
    },5000)
})



email.addEventListener('blur', function(){
  
    if(email.value == ""){
        emailValid.style.display = 'block'
        emailValid.style.color = 'red'
        emailValid.innerText = 'please enter your email address'
        email.style.border = '1px  solid red'
        iconEmail.style.color = 'red'
    }
    if(!email.value.match(emailRegex)){
        emailValid.style.display = 'block'
        emailValid.style.color = 'red'
        emailValid.innerText = 'please enter correct email addres'
        email.style.border = '1px  solid red'
        iconEmail.style.color = 'red'
       
    }else{
        emailValid.style.display = 'block'
        emailValid.style.color = 'green'
        emailValid.innerText = 'email addres is correct'
        email.style.border = '1px  solid green'
        iconEmail.style.color = 'green'
    }
    setTimeout(() =>{
        emailValid.style.display = 'none'
        email.style.border = '1px  solid #ccc'
        iconEmail.style.color = '#ccc'
    },5000)
})



password.addEventListener('blur', function(){
  
    if(password.value == ""){
        passwordValid.style.display = 'block';
        passwordValid.style.color = 'red'
        passwordValid.innerText = 'please enter your password'
        password.style.border = '1px  solid red'
        iconLock.style.color = 'red'
    }
    if(!password.value.match(passwordRegex)){
        passwordValid.style.display = 'block'
        passwordValid.style.color = 'red'
        passwordValid.innerText = 'please enter correct password'
        password.style.border = '1px  solid red'
        iconLock.style.color = 'red'
       
    }
    if(password.value.length < 8){
        passwordValid.style.display = 'block'
        passwordValid.style.color = 'red'
        passwordValid.innerText = 'password min character must be 8'
        password.style.border = '1px  solid red'
        iconLock.style.color = 'red'
       
    } else{
        passwordValid.style.display = 'block'
        passwordValid.style.color = 'green'
        passwordValid.innerText = 'password is correct'
        password.style.border = '1px  solid green'
        iconLock.style.color = 'green'
    }
   
    setTimeout(() =>{
        passwordValid.style.display = 'none'
        password.style.border = '1px  solid #ccc'
        iconLock.style.color = '#ccc'
    },5000)
})


configPassword.addEventListener('keyup', function(){
    if(configPassword.value == ""){
        configValid.style.display = 'block';
        configValid.style.color = 'red'
        configValid.innerText = 'please enter your password'
        configPassword.style.border = '1px  solid red'
        lockConfi.style.color = 'red'
    }
    if(configPassword.value !== password.value){
        configValid.style.display = 'block'
        configValid.style.color = 'red'
        configValid.innerText = 'password not match'
        configPassword.style.border = '1px  solid red'
        lockConfi.style.color = 'red'
    }else{
        configValid.style.display = 'block'
        configValid.style.color = 'green'
        configValid.innerText = 'password is correct'
        configPassword.style.border = '1px  solid green'
        lockConfi.style.color = 'green'
    }
    setTimeout(() =>{
        configValid.style.display = 'none'
        configPassword.style.border = '1px  solid #ccc'
        lockConfi.style.color = '#ccc'
    },2000)
    
})

btn.addEventListener('click', function(){
    if(userName.value == "" || email.value == "" || password.value == ""){
        userNameValid.style.display = 'block';
        userNameValid.style.color = 'red'
        userNameValid.innerText = 'you must fill username filde '
        userName.style.border = '1px  solid red'
        emailValid.style.display = 'block'
        emailValid.style.color = 'red'
        emailValid.innerText = 'you must fill email filde'
        email.style.border = '1px  solid red'
        passwordValid.style.display = 'block';
        passwordValid.style.color = 'red'
        passwordValid.innerText = 'you must fill password filde'
        password.style.border = '1px  solid red'

    }else{
        loginMessage.style.opacity = '1'
        loginMessage.style.color = 'green'
    }
    setTimeout(()=>{
        loginMessage.style.opacity = '0'
    },2000)
   

})


showPassword.addEventListener('click', function(){
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);

    const configType = configPassword.getAttribute('type') === 'password' ? 'text' : 'password';

    configPassword.setAttribute('type', configType)
    
})