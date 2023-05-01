var btnSignin = document.querySelector('#singin');
var btnSignup = document.querySelector('#singup');

var body = document.querySelector("body");

btnSignin.addEventListener("click", function(){
    body.className = "sing-in-js";
});

btnSignup.addEventListener("click", function(){
    body.className = "sing-up-js";
});