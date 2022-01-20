// Assignment Code
var generateBtn = document.querySelector("#generate");

//Ask user for a number between 8 and 128 then validate the number
//Ask user if they want to include each for lowercase, then uppercase, then numeric
//and/or special characters. Then check to make sure at least 1 is selected

var writePassword = function() {
  
  var passSize = window.prompt("Enter a number between 8 and 128:");
  
  

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

  console.log(passLower)

  if (passLower === "Y") {
    writeUpper();
  } else if (passLower === "N") {
    writeUpper();
  } else {
    writeLower();
  }
    console.log(passLower)
    console.log(typeof passLower)
} 

var writeUpper = function() {
  
  var passUpper = window.prompt("Do you want to include uppercase letters? (Y/N)", "Y/N")
  passUpper = passUpper.toUpperCase()

  console.log(passUpper)
  
  if (passUpper === "Y") {
    writeNumber();
  } else if (passUpper === "N") {
    writeNumber();
  }else {
    writeUpper();
  }
    console.log(passUpper)
    console.log(typeof passUpper)
} 

var writeNumber = function() {
  
  var passNumber = window.prompt("Do you want to include numbers? (Y/N)", "Y/N")
  passNumber = passNumber.toUpperCase();

  console.log(passNumber)
  
  if (passNumber === "Y") {
    writeSpecial();
  } else if (passNumber === "N") {
    writeSpecial();
  }else {
    writeNumber();
  }
    console.log(passUpper)
    console.log(typeof passUpper)
} 

var writeSpecial = function() {
  
  var passSpecial = window.prompt("Do you want to include special characters? (Y/N)", "Y/N")
  passSpecial = passSpecial.toUpperCase();

  console.log(passSpecial)
  
  if (passSpecial === "Y") {
    writePassword();
  } else if (passSpecial === "N") {
    writePassword();
  }else {
    writeSpecial();
  }
    console.log(passUpper)
    console.log(typeof passUpper)
} 


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//function that takes options to generate random password


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);