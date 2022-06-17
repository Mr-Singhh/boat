function myfunction(){
    window.location.href="signIn.html"
}
document.querySelector("form").addEventListener("submit",signUpfun)
var userData=JSON.parse(localStorage.getItem("userCreds")) || []
function signUpfun(){
    event.preventDefault();
    var userObj={
        email:document.querySelector("#email").value,
        password : document.querySelector("#password").value,
    
    }
    userData.push(userObj);
    localStorage.setItem("userCreds",JSON.stringify(userData))
}