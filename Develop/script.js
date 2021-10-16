// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var integer = ['0','1','2','3','4','5','6','7','8','9'];
var special = [' ','!','"','#','$','%','&','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[',']','\\','^','_','`','{','|','}','~'];

function generatePassword() {
  var pwArray = [];
  // Section to define length of password within a limit of 8 to 128
  var pwLength = prompt("How many characters will your password have?");

  // This section accounts for user not entering a valid entry
  if (pwLength < 8 || pwLength > 128 || pwLength > Math.trunc(pwLength) || isNaN(pwLength)) {
    window.alert("Please enter an integer between 7 and 129. Try again.");
    return "Invalid entry. Please try again.";
  } else if (pwLength > 7 && pwLength < 129) {
    // Section to define the types of characters the user will choose for the password
    var pwLowerCase = window.confirm("Would you like your password to inclue lower case letters?");
    var pwUpperCase = window.confirm("Would you like your password to include upper case letters?");
    var pwNumber = window.confirm("Would you like your password to include numbers?");
    var pwSpecial = window.confirm("Would you like your password to include special characters?");
    
    if (!pwLowerCase && !pwUpperCase && !pwNumber && !pwSpecial) {
      window.alert("You must select at least one of the four character types for your password. Try again.");
      return "Invalid entry. Please try again.";
    };

    for (let i = 0; i < pwLength; i++) {
      let charType = [];
      
      if (pwLowerCase) {
        charType.push(lowerCase[Math.floor(Math.random()*lowerCase.length)]);
      };
      if (pwUpperCase) {
        charType.push(upperCase[Math.floor(Math.random()*upperCase.length)]);
      };
      if (pwNumber) {
        charType.push(integer[Math.floor(Math.random()*integer.length)]);
      };
      if (pwSpecial) {
        charType.push(special[Math.floor(Math.random()*special.length)]);
      };
      let charSelect = charType[Math.floor(Math.random()*charType.length)];
      pwArray.push(charSelect);
      
    };
    return pwArray.join(""); 
  };
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
