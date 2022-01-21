// Assignment Code
// Global variables
var generateBtn = document.querySelector("#generate");
var passSize
var passLower
var passUpper
var passNumber
var passSpecial
var Alpha = "abcdefghijklmnopqrstuvwxyz";
var AlphaU = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var Num = "1234567890";
var Special = "'!@#$%^&*()_+~`|}{[]\:;?><,./-='";



var generatePassword = function(){
  //Ask user for a number between 8 and 128 then validate the number
  var passSize = window.prompt("Enter a number between 8 and 128 for character length of password:");

  if (!passSize) {
    return;
  } else if (isNaN(passSize)) {
    return generatePassword()
  } else if (passSize < 8 || passSize > 128) {
    return generatePassword()
  }

  var passLower = window.prompt("Type Y if you want lowercase letters, N if you don't. (Y/N)", "Y/N");
  passLower = passLower.toUpperCase();

  if (!(passLower === "Y" )) {
    passLower = "Y"
    console.log(passLower)
  } else {
    passLower = "N";   
  } 
  console.log(passLower)

  var passLower = window.prompt("Type Y if you want uppercase letters, N if you don't. (Y/N)", "Y/N");
  passLower = passLower.toUpperCase();

  if (!(passUpper === "Y" )) {
    passUpper = "Y";
    console.log(passUpper)
  } else {
      passUpper = "N";
  }
  console.log(passUpper)

  var passNumber = window.prompt("Type Y if you want to include numbers, N if you don't. (Y/N)", "Y/N")
  passNumber = passNumber.toUpperCase();
  
  if (!(passNumber === "Y" )) {
    passNumber = "Y";
    console.log(passNumber)
  } else {
      passNumber = "N";
  }
  console.log(passNumber)

  var passSpecial = window.prompt("Type Y if you want to include special characters, N if you don't. (Y/N)", "Y/N")
  passSpecial = passSpecial.toUpperCase();

  if (!(passSpecial !== "Y" )) {
    passSpecial = "Y";
    console.log(passSpecial)
  } else {
    passSpecial = "N";
  }
  console.log(passSpecial)

  var createLogic = passLower + passUpper + passNumber + passSpecial;
  //Check length is correct
  console.log(createLogic)

  if (createLogic === "YYYY") {
    var length = passSize,
    charset = Alpha + AlphaU + Num + Special,
    passVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
      passVal += charset.charAt(Math.floor(Math.random() * n));
    }
    console.log(passVal)
    return;
  } else if (createLogic === "YNYY") {
    var length = passSize,
    charset = Alpha + Num + Special,
    passVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
      passVal += charset.charAt(Math.floor(Math.random() * n));
    }
    console.log(passVal)
    return;
  } else if (createLogic === "YYYN") {
    var length = passSize,
    charset = Alpha + AlphaU + Special,
    passVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
      passVal += charset.charAt(Math.floor(Math.random() * n));
    }
    console.log(passVal)
    return;
  } else if (createLogic === "YYYN") {
    var length = passSize,
    charset = Alpha + AlphaU + Num,
    passVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
      passVal += charset.charAt(Math.floor(Math.random() * n));
    }
    console.log(passVal)
    return;
  } else if (createLogic === "YYYY") {
    var length = passSize,
    charset = Alpha + AlphaU + Num + Special,
    passVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
      passVal += charset.charAt(Math.floor(Math.random() * n));
    }
    console.log(passVal)
    return;
  } else if (createLogic === "NYYY") {
    var length = passSize,
    charset = AlphaU + Num + Special,
    passVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
      passVal += charset.charAt(Math.floor(Math.random() * n));
    }
    console.log(passVal)
    return;
  } else if (createLogic === "NYYN") {
    var length = passSize,
    charset = AlphaU + Num,
    passVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
      passVal += charset.charAt(Math.floor(Math.random() * n));
    }
    console.log(passVal)
    return;
  } else if (createLogic === "YNNY") {
    var length = passSize,
    charset = Alpha + Special,
    passVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
      passVal += charset.charAt(Math.floor(Math.random() * n));
    }
    console.log(passVal)
    return;
  } else if (createLogic === "YNYN") {
    var length = passSize,
    charset = Alpha + Num,
    passVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
      passVal += charset.charAt(Math.floor(Math.random() * n));
    }
    console.log(passVal)
    return;
  } else if (createLogic === "NNYY") {
    var length = passSize,
    charset = Num + Special,
    passVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
      passVal += charset.charAt(Math.floor(Math.random() * n));
    }
    console.log(passVal)
    return;
  } else if (createLogic === "YYYY") {
    var length = passSize,
    charset = Alpha + AlphaU + Num + Special,
    passVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
      passVal += charset.charAt(Math.floor(Math.random() * n));
    }
    console.log(passVal)
    return;
  } else if (createLogic === "NYNY") {
    var length = passSize,
    charset = AlphaU + Special,
    passVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
      passVal += charset.charAt(Math.floor(Math.random() * n));
    }
    console.log(passVal)
    return;
  } else if (createLogic === "YYNN") {
    var length = passSize,
    charset = Alpha + AlphaU,
    passVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
      passVal += charset.charAt(Math.floor(Math.random() * n));
    }
    console.log(passVal)
    return;
  } else if (createLogic === "YNNN") {
    var length = passSize,
    charset = Alpha,
    passVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
      passVal += charset.charAt(Math.floor(Math.random() * n));
    }
    console.log(passVal)
    return;
  } else if (createLogic === "NYNN") {
    var length = passSize,
    charset = AlphaU,
    passVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
      passVal += charset.charAt(Math.floor(Math.random() * n));
    }
    console.log(passVal)
    return;
  } else if (createLogic === "NNYN") {
    var length = passSize,
    charset = Num,
    passVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
      passVal += charset.charAt(Math.floor(Math.random() * n));
    }
    console.log(passVal)
    return;
  } else if (createLogic === "NNNY") {
    var length = passSize,
    charset = Special,
    passVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
      passVal += charset.charAt(Math.floor(Math.random() * n));
      var passwordText = document.querySelector("#password");
      passwordText.value = passVal;
    }
 } 
 var passwordText = document.querySelector("#password");
  passwordText.value = passVal;

}

/* Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
} */
// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);