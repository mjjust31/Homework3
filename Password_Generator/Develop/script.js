// Assignment Code

//var userInput ; //asigned a variable to enter while loop. User is stuck in loop if they don't enter Y. Same concept applied below.
//while (userInput !== "Y"){
  //  userInput = prompt("Enter a letter")
//}
//alert("Thank you. It was Y")


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
      //if requirements do this
      passwordLengthReq > 128 ||
      passwordLengthReq < 8 ||
      passwordLengthReq === NaN
    ) {
      alert("Number is not in between 8 and 128. Try again"); //execute this.
    }

    var passwordLengthRaw = prompt( //this is the variable action to the user. 
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
    var numChar = confirm("Click OK to confirm including numeric characters.");//confirm will return a Boolean
    var numLow = confirm("Click OK to confirm including lowercase characters.");//confirm will return a Boolean
    var numUpper = confirm( "Click OK to confirm including uppercase characters." );//confirm will return a Boolean

    gotAnyCharTypes = specChar || numChar || numLow || numUpper; //if true/true/true/true or even if //true/false/false/false, this will continue to generate password.

    if (gotAnyCharTypes === false) {//if all listed as false. 
      //but if ALL are marked as false. This returns to the var message rather than going back all the way to beginning.
      alert("Did not slect at least one type. Please choose one");
    }
  }

  console.log(
    "specChar",
    specChar,
    "numChar",
    numChar,
    "numLow",
    numLow,
    "numUpper",
    numUpper
  );

  //var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
