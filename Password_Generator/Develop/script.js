// Assignment Code

//var userInput ; //asigned a variable to enter while loop. User is stuck in loop if they don't enter Y. Same concept applied below.
//while (userInput !== "Y"){
//  userInput = prompt("Enter a letter")
//}
//alert("Thank you. It was Y")

//Define your arrays
var charReq = ["!", "#", "$", "%", "&"];
var numReq = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowReq = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var upReq = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
//var allReq = [charReq.concat(numReq, lowReq, upReq)]; not needed because it's not user picked. don't need a version for all picked.

var userPick = [];
var generateBtn = document.querySelector("#generate");
// Write password to the #password input

function writePassword() {
  // Prompt the user for password length and validate the input
  var passwordLengthRaw = prompt(
    "Please indicate a password length, enter a number between 8 and 128 characters"
  );
  var passwordLengthReq = parseInt(passwordLengthRaw);
  //restrict the user with a max and min range. Is the number recevied between 8 and 128?
  while (passwordLengthReq < 8 || passwordLengthReq > 128) {
    //while loop is executing the conditions if they don't meet criteria.   //execute this if..
    alert("Number is not in between 8 and 128. Try again");
    passwordLengthRaw = prompt(
      "Please indicate a password length, enter a number between 8 and 128 characters"
    );
    passwordLengthReq = parseInt(passwordLengthRaw); //parseInt still changes it to number. Received from office hours, originally, was using numbers.
  }

  // Ask the user what types of characters they want to include
  var specChar = confirm("Click OK to confirm including special characters.");
  var numChar = confirm("Click OK to confirm including numeric characters.");
  var numLow = confirm("Click OK to confirm including lowercase characters.");
  var numUpper = confirm("Click OK to confirm including uppercase characters.");

  //if NOT true AND this is not true AND (not or in this case.
  if (!specChar && !numChar && !numLow && !numUpper) {
    alert("Did not select at least one type. Please choose one");
    writePassword(); //take them back to the beginning
  }

  //   gotAnyCharTypes = specChar || numChar || numLow || numUpper; //if true/true/true/true or even if //true/false/false/false, this will continue to generate password.

  //   if (gotAnyCharTypes === false) {
  //     //if all listed as false. or not true
  //     //but if ALL are marked as false. This returns to the var message rather than going back all the way to beginning.
  //     alert("Did not slect at least one type. Please choose one");
  //   }
  // }
  //made this too confusing.
  // var gotAnyCharTypes = undefined; //allows to enter the while Loop as user has not indicated what they want, so undefined.
  // var specChar = undefined;
  // var numChar = undefined;
  // var numLow = undefined;
  // var numUpper = undefined;
  // Add the selected character types to the userPick array
  if (specChar) {
    userPick = userPick.concat(charReq);
    console.log(userPick);
    }
    if (numChar) {
    userPick = userPick.concat(numReq);
    console.log(userPick);
    }
    if (numLow) {
    userPick = userPick.concat(lowReq);
    console.log(userPick);
    }
    if (numUpper) {
    userPick = userPick.concat(upReq);
    console.log(userPick);
    }

  //okay. now we should have a user picked array, which will only concat if true. Now we need to create function that creates the generated password.
  //we will need the iterations here based on the number the user entered. so we will be working with
  //the number the user entered as that is a number. so let's write a function to excecute the picks.
  //What does the function need to do? From here it needs

  //returning undefined because of where my variable is listed in the fuction, it still believes that var is undefined.
  function generatePassword() {
    var thePassword = "";
    for (i = 0; i < passwordLengthReq; i++) {
      thePassword  += userPick[Math.floor(Math.random() * userPick.length)];
    }
    return thePassword;
    }
    

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  }
  
  generateBtn.addEventListener("click", writePassword);