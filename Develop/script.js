var generateBtn = document.querySelector("#generate");

function alphabet() {
  for (let i = 0; i < 26; i++) {
    letters = 
  }
} 
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var integer = ['0','1','2','3','4','5','6','7','8','9'];
var special = [' ','!','"','#','$','%','&','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[',']','\\','^','_','`','{','|','}','~'];
var pwLength = 0;
var pwLowerCase = "";
var pwUpperCase = "";
var pwNumber = "";
var pwSpecial = "";
var pwArray = [];
var lowerCount = 0;
var upperCount = 0;
var numberCount = 0;
var specialCount = 0;

function randomGenerator() {
  let randomLower = "";
  let randomUpper = "";
  let randomNumber = "";
  let randomSpecial = "";
  pwArray = [];
  lowerCount = 0;
  upperCount = 0;
  numberCount = 0;
  specialCount = 0;

  for (let i = 0; i < pwLength; i++) {
    let charType = [];
    if (pwLowerCase) {
      randomLower = lowerCase[Math.floor(Math.random()*lowerCase.length)];
      charType.push(randomLower);
    };
    if (pwUpperCase) {
      randomUpper = upperCase[Math.floor(Math.random()*upperCase.length)];
      charType.push(randomUpper);
    };
    if (pwNumber) {
      randomNumber = integer[Math.floor(Math.random()*integer.length)];
      charType.push(randomNumber);
    };
    if (pwSpecial) {
      randomSpecial = special[Math.floor(Math.random()*special.length)]
      charType.push(randomSpecial);
    };

    let charSelect = charType[Math.floor(Math.random()*charType.length)];

    if (charSelect === randomLower) {
        lowerCount++;
    } else if (charSelect === randomUpper) {
        upperCount++;
    } else if (charSelect === randomNumber) {        
        numberCount++;
    } else if (charSelect === randomSpecial) {
      specialCount++;    
    } else if (lowerCount === 0 || upperCount === 0 || numberCount === 0 || specialCount === 0) {
      randomGenerator();
    }
    pwArray.push(charSelect);
  }
};

function pwExcluder() {
  
    randomGenerator();
};

function generatePassword() {
  pwArray = [];
  // Section to define length of password within a limit of 8 to 128
  pwLength = prompt("How many characters will your password have?");

  // This section accounts for user not entering a valid entry
  if (pwLength < 8 || pwLength > 128 || pwLength > Math.trunc(pwLength) || isNaN(pwLength)) {
    window.alert("Please enter an integer between 7 and 129. Try again.");
    return "Invalid entry. Please try again.";
  } else if (pwLength > 7 && pwLength < 129) {
    // Section to define the types of characters the user will choose for the password
    pwLowerCase = window.confirm("Would you like your password to include lower case letters?");
    pwUpperCase = window.confirm("Would you like your password to include upper case letters?");
    pwNumber = window.confirm("Would you like your password to include numbers?");
    pwSpecial = window.confirm("Would you like your password to include special characters?");
    
    if (!pwLowerCase && !pwUpperCase && !pwNumber && !pwSpecial) {
      window.alert("You must select at least one of the four character types for your password. Try again.");
      return "Invalid entry. Please try again.";
    };

    randomGenerator();

    pwExcluder();

    console.log(lowerCount);
    console.log(upperCount);
    console.log(numberCount);
    console.log(specialCount);

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
