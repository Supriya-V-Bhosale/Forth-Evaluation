//"use strict";

let nameError = false;
let EmailError = false;
let MobileError = false;
let PasswordError = false;
let ConfirmError = false;

document.getElementById("fullname").onblur = checkName;
document.getElementById("emailaddress").onblur = checkEmail;
document.getElementById("phonenumber").onblur = checkMobile;
document.getElementById("password").onchange = checkPassword;
document.getElementById("confirmpassword").onchange = confirmPassword;
document.getElementByClassName("cbtn").onclick=function(event){
    event.preventDefault();
    document.getElementById("fullname").innerHTML="";

}


document.getElementsByClassName("btn").onclick = function ($event) {
  checkName(),
    checkEmail(),
    checkMobile(),
    checkPassword(),
    confirmPassword();

  if (
    nameError == false &&
    EmailError == false &&
    MobileError == false &&
    PasswordError == false &&
    ConfirmError == false

  )
    alert("data submitted successfully");
  else $event.preventDefault();
};

function checkName() {
  let pattern = /^[a-z_A-Z ]+$/;
  console.log("hi..")

  let name = document.getElementById("fullname").value;
  if (name.length === 0) {
    document.getElementById("fullnamevalidation").innerHTML = "enter name";
    nameError = true;
  } else if (!name.match(pattern)) {
    document.getElementById("fullnamevalidation").innerHTML = "enter valid name";
    nameError = true;
  } else {
    document.getElementById("fullnamevalidation").innerHTML = "";
    nameError = false;
  }
}

function checkEmail() {
  let pattern = /^[a-z0-9.%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
  let email = document.getElementById("emailaddress").value;
  if (email.length === 0) {
    document.getElementById("emailvalidation").innerHTML = "enter email";
    EmailError = true;
  } else if (!email.match(pattern)) {
    document.getElementById("emailvalidation").innerHTML = "enter valid email";
    EmailError = true;
  } else {
    document.getElementById("emailvalidation").innerHTML = "";
    EmailError = false;
  }
}

function checkMobile() {
  let pattern = /^[0-9]{10}$/;
  let mobile = document.getElementById("phonenumber").value;

  if (mobile.length === 0) {
    document.getElementById("validphonenumber").innerHTML = "enter mobile";
    MobileError = true;
  } else if (!mobile.match(pattern)) {
    document.getElementById("validphonenumber").innerHTML = "enter valid mobile";
    MobileError = true;
  } else {
    document.getElementById("validphonenumber").innerHTML = "";
    MobileError = false;
  }
}

function checkPassword()
{
    let pattern = /^[a-z_A-Z_0-9]+$/;
    let password = document.getElementById("password").value;

    if (password.length < 4 ) {
        document.getElementById("validpassword").innerHTML = "password should be more than 4 digits";
        PasswordError = true;
      } else if (!password.match(pattern)) {
        document.getElementById("validpassword").innerHTML = "enter valid Password";
        PasswordError = true;
      } else {
            document.getElementById("validpassword").innerHTML = "";
            PasswordError = false;
        }

}
function confirmPassword()
{
    let password = document.getElementById("password").value;
    let confirmpassword = document.getElementById("confirmpassword").value;

    if(password !== confirmpassword)
        {
           
            document.getElementById("validconfirmpassword").innerHTML = "enter correct Password";
            ConfirmError = true;
        }
    else{
            document.getElementById("validconfirmpassword").innerHTML = "";
            ConfirmError = false;

        }

}


