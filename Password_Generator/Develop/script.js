// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
//given to us.



var minRequirement = 8
var maxRequirement = 128
charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&'()*+,-./:;<=>?@^_`{|}~";

function makeRandom () {
        for (var i = 0, a = charset.length; i < Number(User); ++i) 
        {retVal += charset.charAt(Math.floor(Math.random() * a));}}
          




//var characterRequirement = ["!","#","$","%","&'"]
//var numberRequirement = ["0","1","2","3","4","5","6","7","8","9"]
//var lowerLRequirement = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
//var upperLRequirement = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

//var allRequirements = [characterRequirement, numberRequirement, lowerLRequirement, upperLRequirement]
//var characterNumber = this cannot be right creating all the combitionations outcomes arrays. look in notes. 
//var characterLower = 
//var characterUpper =
//var numberLower = 
//var numberUpper =
//var lowerUpper =



//Math.floor(Math.random(). from game, I am assuming we can use random here. 
//The logic is pull from 4 arrays in the agrument to generate the password. pull from more than 1 array.



// Write password to the #password input
function generatePassword() {
  var User = prompt("How many characters would you like your password to contain. Enter a number between 8 and 128.");

  if (Number(User) < minRequirement || Number(User) > maxRequirement) {
       alert("Password length must be between 8 and 128 characters. Please try again.");
       generatePassword(); } //stops user from continuing and re-sets the generatePassword function.
  else {

    var message = confirm("To create your password, please determine what should be included. One of the four options must be selected. Click ok to continue.")
    var specChar= confirm("Click OK to confirm including special characters.");
    var numChar = confirm("Click OK to confirm including numeric characters.");
    var numLow =  confirm("Click OK to confirm including lowercase characters.");
    var numUpper = confirm("Click OK to confirm including uppercase characters."); //if any, and, or of these are true, the user should go to the next phase.
    //var allConditions = [specChar, numChar, numLow, numUpper] //this is an array of the user's choices.

    if (Number(User) === !specChar|| !numChar || !numLow || numUpper)  //if it does not contain one of these 4
      alert("Must contatin at least one. Try again");
      generatePassword();} 
     
  else if{


  }  


 
    
    if (specChar==true && numChar==true && numLow==true && numUpper==true){  //writing out each scenario.I wonder if there is a way to make an object to assign in the sceanior and have it equal to the user's choice.
          function generatePassword() {
     
          var retVal = "";
          for (var i = 0, a = charset.length; i < Number(User); ++i) //having difficulty making this a fuction that is ran through multiple times.
          {retVal += charset.charAt(Math.floor(Math.random() * a));}
          return retVal;
        }
      }
  else { 
    if (specChar==true && numChar==true && numLow==true && numUpper==false){
      
          function generatePassword() {
     
        charset.toLowerCase();//this worked only pullin in lower cae letters. Search for others. 
        retVal = "";
        for (var i = 0, b = charset.length; i < Number(User); ++i)//make this a function to pull in repeatedlyin all scenarios.
        {retVal += charset.charAt(Math.floor(Math.random() * b));}
        return retVal;}     
          } 

  else 
     if (specChar==false && numChar==true && numLow==false && numUpper==false){
            
              function generatePassword() {
              
              charset.match(numberOnly); //match. replace
              retVal = "";
              for (var i = 0, b = charset.length; i < Number(User); ++i)
              {retVal += charset.charAt(Math.floor(Math.random() * b));}
              return retVal;}     
     } 

  else 
     if (specChar==false && numChar==false && numLow==false && numUpper==true){
            
              function generatePassword() {
              
              charset.toUppercase(); //match. replace
              retVal = "";
              for (var i = 0, b = charset.length; i < Number(User); ++i)
              {retVal += charset.charAt(Math.floor(Math.random() * b));}
              return retVal;}      






  
  
      } else {
    console.log ("Testing")
    
  }
  
  }

  var passwordText = document.querySelector("#password");

  passwordText.value = generatePassword() ;

}


//((userInput === "r" && compPick === "s") || (userInput === "s" && compPick === "p") || (userInput === "p" && compPick === "r"))
//this was a faster way, but limited outcomes, but can we apply the same concept for shorter code?

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
//random item from combined array and puh it to the password array and this step up to the length of the password
