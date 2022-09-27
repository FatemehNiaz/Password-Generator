// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var lowercase = "abcdefghijklmnopqrstuvwxyz".split("");
var number = "0123456789".split("");
var symbol = ")!@#$%^&*(".split("");
// Write password to the #password input
function writePassword() {
  var prePassword = [];
  var postPasword = "";

  var passwordLength = prompt(
    "How long do you want your password to be? 8-128"
  );
  if (passwordLength < 8 || passwordLength > 128) {
    alert("your password needs to be between 8 and 128");
  } else {
    if (confirm("Do you want uppercase letters?")) {
      prePassword = prePassword.concat(uppercase);
    }
    if (confirm("Do you want lowercase letters?")) {
      prePassword = prePassword.concat(lowercase);
    }
    if (confirm("Do you want numbers?")) {
      prePassword = prePassword.concat(number);
    }
    if (confirm("Do you want symbols?")) {
      prePassword = prePassword.concat(symbol);
    }
    if (prePassword.length === 0) {
      alert("You need atleast one character type to create a password.");
    } else {
      for (let i = 0; i < passwordLength; i++) {
        var random = Math.floor(Math.random() * prePassword.length);
        postPasword += prePassword[random];
      }
    }
  }
  passwordText.innerHTML = postPasword;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
