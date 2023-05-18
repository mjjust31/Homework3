// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
//given to us.



var minRequirement = 8
var maxRequirement = 128
var characterRequirement = ["!","#","$","%","&'"]
var numberRequirement = ["0","1","2","3","4","5","6","7","8","9"]
var lowerLRequirement = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var upperLRequirement = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

var allRequirements = [characterRequirement, numberRequirement, lowerLRequirement, upperLRequirement]
//var characterNumber = this cannot be right creating all the combitionations outcomes arrays. look in notes. 
//var characterLower = 
//var characterUpper =
//var numberLower = 
//var numberUpper =
//var lowerUpper =



//Math.floor(Math.random(). from game, I am assuming we can use random here. 
//The logic is pull from 4 arrays in the agrument to generate the password. pull from more than 1 array.



// Write password to the #password input
function writePassword() {
  var User = prompt("How many characters would you like your password to contain. Enter a number between 8 and 128.");

  if (Number(User) < minRequirement || Number(User) > maxRequirement) {
       alert("Password length must be between 8 and 128 characters. Please try again.");
       writePassword(); }
  else {
   // var password = writePassword()//allRequirements || characterRequirement || numberRequirement || lowerLRequirement || upperLRequirement || );
  
     var cont = confirm("To create your password, please determine what should be included. One option must be selected. Click ok to continue.")

    var specchar= confirm("Click OK to confirm including special characters.");
    var numchar = confirm("Click OK to confirm including numeric characters.");
    var numlow =  confirm("Click OK to confirm including lowercase characters.");
    var numupper = confirm("Click OK to confirm including uppercase characters.");
 
    if (specchar==true && numchar==true && numlow==true && numupper==true)
   {
    
    function generatePassword() {
     
          charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
          retVal = "";
      for (var i = 0, n = charset.length; i < Number(User); ++i) {
          retVal += charset.charAt(Math.floor(Math.random() * n));
      }
      return retVal;
  }
    generatePassword();
  } else {
    console.log ("Testing")
    
  }
    //but what if the user select one requirement and not the others? Create for all conditions first.
  }
  //var password = generatePassword();

  



  var passwordText = document.querySelector("#password");

  passwordText.value = generatePassword() ;

}







//write the function writePassword
//ask for length of a password
     //ask for the prompt. 
     //save it to variable
//check the length prompt to make sure it is between 8 and 128 characters
      //if it is not, alert the user to choose a number between 8 and 128
//confirm prompts: 4 fo uppercase, lowercase, numeric, and special characters.
    //save it to a variable.
//check to make sure at least one of the 4 prompts is true
      //combine the confired arrays. If not alert user to restart.
//create an array for uppercase, lowercase, numeric, and special characters
//create an empty array for the password with length provided by user.
//random item from combined array and puh it to the password array and this step up to the length of the password.
