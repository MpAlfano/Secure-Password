// Assignment Code
var generateBtn = document.querySelector("#generate");

var generateNumber
var generateUpper
var generateSize
var generateLower
var generateSpecial

//Ask user for a number between 8 and 128 then validate the number
//Ask user if they want to include each for lowercase, then uppercase, then numeric
//and/or special characters. Then check to make sure at least 1 is selected

var writePassword = function() {
  
  var passSize = window.prompt("Enter a number between 8 and 128 for character length of password:");
  
  generateSize = passSize
  console.log(generateSize);
  
  if (!passSize) {
    return;
  } else if (isNaN(passSize)) {
    writePassword();
  } else if(passSize < 8 || passSize > 128) {
    writePassword();
  } else {
    
    writeLower();
  }
  
}

var writeLower = function() {
  
  var passLower = window.prompt("Do you want to include lowercase letters? (Y/N)", "Y/N");
  passLower = passLower.toUpperCase();

  generateLower = passLower
  console.log(generateLower);

  if (passLower === "Y") {
    writeUpper();
  } else if (passLower === "N") {
    writeUpper();
  } else {
    writeLower();
  }
} 

var writeUpper = function() {
  
  var passUpper = window.prompt("Do you want to include uppercase letters? (Y/N)", "Y/N")
  passUpper = passUpper.toUpperCase()
  
  generateUpper = passUpper
  console.log(generateUpper);

  if (passUpper === "Y") {
    writeNumber();
  } else if (passUpper === "N") {
    writeNumber();
  }else {
    writeUpper();
    console.log(generateUpper);
  }
} 

var writeNumber = function() {
  
  var passNumber = window.prompt("Do you want to include numbers? (Y/N)", "Y/N")
  passNumber = passNumber.toUpperCase();
  
  generateNumber = passNumber
  console.log(generateNumber);

  if (passNumber === "Y") {
    writeSpecial();
  } else if (passNumber === "N") {
    writeSpecial();
  }else {
    writeNumber()
  }
  
} 

var writeSpecial = function() {
  
  var passSpecial = window.prompt("Do you want to include special characters? (Y/N)", "Y/N")
  passSpecial = passSpecial.toUpperCase();

  generateSpecial = passSpecial
  console.log(generateSpecial);

  console.log(generateSize);
  console.log(generateLower);
  console.log(generateUpper);
  console.log(generateNumber);
  console.log(generateSpecial);

  if (passSpecial === "Y") {
    createPassword();
  } else if (passSpecial === "N") {
    createPassword();
  }else {
    writeSpecial();
  } 
} 



var createPassword = function() {

  console.log(generateSize);
  console.log(generateLower);
  console.log(generateUpper);
  console.log(generateNumber);
  console.log(generateSpecial);

  var keyListAlpha = "abcdefghijklmnopqrstuvwxyz",
      keyListAlphaU = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      keyListNum = "1234567890",
      keyListSpec = "'!@#$%^&*()_+~`|}{[]\:;?><,./-='",
      password1 = '';
  
  var len = Math.ceil(generateSize/2);
  len = len - 1;
  var lenSpec = generateSize-2*len;

  for (i=0;i<len;i++) {
    password1+=keyListAlpha.charAt(Math.floor(Math.random()*keyListAlpha.length));
    password1+=keyListNum.charAt(Math.floor(Math.random()*keyListNum.length));
  }

  for (i=0;i<lenSpec;i++)
        password1+=keyListSpec.charAt(Math.floor(Math.random()*keyListSpec.length));
        password1+=keyListAlphaU.charAt(Math.floor(Math.random()*keyListAlphaU.length));

    password1=password1.split('').sort(function(){return 0.5-Math.random()}).join('');
    
    console.log(password1)
    console.log(password1.length)
    return password1;
}

// Write password to the #password input
function writePassword() {
  var password = createPassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//function that takes options to generate random password


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);