// Assignment Code

//var userInput ; //asigned a variable to enter while loop. User is stuck in loop if they don't enter Y. Same concept applied below.
//while (userInput !== "Y"){
//  userInput = prompt("Enter a letter")
//}
//alert("Thank you. It was Y")
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
var userPick = [""];

var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword() {
  var passwordLengthReq = undefined; ///this allows us to enter the While Loop.
  //restrict the user with a max and min range. Is the number recevied between 8 and 128?
  while (
    //while loop is executing the conditions if they don't meet criteria.
    passwordLengthReq === undefined || //conditions
    passwordLengthReq > 128 ||
    passwordLengthReq < 8 ||
    passwordLengthReq === NaN
  ) {
    //execute this if..
    if (
      //if user does this
      passwordLengthReq > 128 ||
      passwordLengthReq < 8 ||
      passwordLengthReq === NaN
    ) {
      alert("Number is not in between 8 and 128. Try again"); //then you are going to do this.
    }

    var passwordLengthRaw = prompt(
      //this is the variable action to the user.
      "Please indicate a password length, enter a number between 8 and 128 characters"
    );
    passwordLengthReq = Number(passwordLengthRaw); //converts to number.
    //Not usable. Ask for new number
  }
  //what they gave us is a number in the range
  var message = confirm(
    "To create your password, please determine what should be included. One of the four options must be selected. Click ok to continue."
  );
  var gotAnyCharTypes = undefined; //allows to enter the while Loop as user has not indicated what they want, so undefined.
  var specChar = undefined;
  var numChar = undefined;
  var numLow = undefined;
  var numUpper = undefined;
  //Enters in the While Loop //executes if the user does not define any of the conditions as true.
  while (gotAnyCharTypes === undefined || gotAnyCharTypes === false) {
    var specChar = confirm("Click OK to confirm including special characters."); //confirm will return a Boolean
    var numChar = confirm("Click OK to confirm including numeric characters."); //confirm will return a Boolean
    var numLow = confirm("Click OK to confirm including lowercase characters."); //confirm will return a Boolean
    var numUpper = confirm(
      "Click OK to confirm including uppercase characters."
    ); //confirm will return a Boolean

    gotAnyCharTypes = specChar || numChar || numLow || numUpper; //if true/true/true/true or even if //true/false/false/false, this will continue to generate password.

    if (gotAnyCharTypes === false) {
      //if all listed as false. or not true
      //but if ALL are marked as false. This returns to the var message rather than going back all the way to beginning.
      alert("Did not slect at least one type. Please choose one");
    }
  }
  //now, what do we know? We know if the user returned at least one true value to in either specChar, numChar, numLow, or numUp.
  //what does the computer need to do now. So if, specChar is true || muchar is true || low is true || up || true

  //if statements will say if a character set returns true to combine it into the userPick arrays.
  if (specChar === true) {
    userPick = userPick.concat(specChar);
  }
  if (numChar === true) {
    userPick = userPick.concat(numChar);
  }
  if (numLow === true) {
    userPick = userPick.concat(numLow);
  }
  if (numUpper === true) {
    userPick = userPick.concat(numUpper);
  }
  //okay. now we should have a user picked array, which will only concat if true. Now we need to create function that creates the generated password.
  //we will need the iterations here based on the number the user entered. so we will be working with
  //the number the user entered as that is a number. so let's write a function to excecute the picks.
  //What does the function need to do? From here it needs
  
//returning undefined because of where my variable is listed in the fuction, it still believes that var is undefined.

var userPickLength = Number(passwordLengthReq)
 

  function generatePassword() {
   

    for (indx = 0; indx <= userPickLength.length; i++) {
      var randomUserPick = userPick[Math.floor(Math.random() * userPickLength.length)];
    }
  }
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


