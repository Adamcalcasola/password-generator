var generateBtn = document.querySelector("#generate");

// Define global variables for program
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var integer = ['0','1','2','3','4','5','6','7','8','9'];
var special = ['!','"','#','$','%','&','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[',']','^','_','`','{','|','}','~'];
var pwLength = 0;
var pwLowerCase = "";
var pwUpperCase = "";
var pwNumber = "";
var pwSpecial = "";
var pwArray = [];

// function to execute random password based on user input
function pwGenerator() {
  // Define local variable within the pwGenerator function
  let randomLower = "";
  let randomUpper = "";
  let randomNumber = "";
  let randomSpecial = "";
  let lowerCount = 0;
  let upperCount = 0;
  let numberCount = 0;
  let specialCount = 0;
  pwArray = [];

  // Generate a random character type based on whether user specified the type to be included in the password
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

    // Randomly selects one of the randomly generated character types
    let charSelect = charType[Math.floor(Math.random()*charType.length)];

    // Counts the number of each type of character selected for the password
    if (charSelect === randomLower) {
        lowerCount++;
    };
    if (charSelect === randomUpper) {
        upperCount++;
    };
    if (charSelect === randomNumber) {
        numberCount++;
    };
    if (charSelect === randomSpecial) {
      specialCount++;
    };

    // Passes the randomly generated character selected into a password array
    pwArray.push(charSelect);
  }
  // excludes passwords that randomly omit one of the user specified character preferences and reruns the random password generator
  if (pwLowerCase && lowerCount === 0 || pwUpperCase && upperCount === 0 || pwNumber && numberCount === 0 || pwSpecial && specialCount === 0) {
    // console.log("PW Exluded", pwArray.join(""));
    pwGenerator();
  }
};

// function to to allow user to define the parameters of the password and execute the password generator
function generatePassword() {
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
    
    // Alerts user if they did not make any character selections for the password
    if (!pwLowerCase && !pwUpperCase && !pwNumber && !pwSpecial) {
      window.alert("You must select at least one of the four character types for your password. Try again.");
      return "Invalid entry. Please try again.";
    };

    pwGenerator();

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