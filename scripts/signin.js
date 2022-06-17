
document.querySelector("form").addEventListener("submit", logInfun);
var regUser=JSON.parse(localStorage.getItem("userCreds"));
function logInfun(){
event.preventDefault();
var enteredEmail=document.querySelector("#email").value;
var enteredpass=document.querySelector("#password").value;
for(var i=0;i < regUser.length; i++){
    console.log(regUser[i]);
    
    if(regUser[i].email == enteredEmail && regUser[i].password == enteredpass){
      alert("login sucess")
        window.location.href="payment.html"
        break;
        console.log(enteredEmail,regUser[i].email)
        console.log(enteredpass,regUser.password)
    }
    else{
        alert("incorrect mail or password")
    }
}
}