// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var integer = ['0','1','2','3','4','5','6','7','8','9'];
var special = ['!','"','#','$','%','&','(',')','*','+',',','-','.','/',':',';','>','=','<','?','@','[',']','^','_','`','{','|','}','~'];

var password = [];

// var generatePassword = function () {}
function generatePassword() {
  // Section to define length of password within a limit of 8 to 128
  var pwLength = prompt("How many character will your password have?");
  
  if (pwLength < 8) {
    window.alert("Your passward must have at least 8 characters. Try again.");
    return "incorrect length, please reclick the button."
  } else if (pwLength > 128) {
    window.alert("Your password must have less than 129 characters. Try again");
    return;
  } else {
    window.alert("Please enter an integer between 7 and 129. Try again.");
    return;
  };

  // Section to define the complexity of the password
  var pwCase = window.confirm("Would you like your password to include upper case letter?");
  var pwNum = window.confirm("Would you like your password to include numbers?");
  var pwSpec = window.confirm("Would you like your password to include special characters?");

  // Section to define functions for randomly generated type
  function randomUpper() {
    var upperCase = Math.floor(Math.random() * 20 + 26);
  }

  function randomLower() {
    var lowerCase = Math.floor(Math.random() *40 + 26);
  }

  function randomNumber() {
    var number = 10
  }

  for (var i = 0; i < pwLength; i++) {


  }



}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
