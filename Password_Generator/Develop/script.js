// Assignment code here
//write the function writePassword


//ask for length of a password X 
     //ask for the prompt. X
     //save it to variable X
//check the length prompt to make sure it is between 8 and 128 characters X
      //if it is not, alert the user to choose a number between 8 and 128 X
//confirm prompts: 4 fo uppercase, lowercase, numeric, and special characters. X
    //save it to a variable. X
    //if the user does not choose at least one of the 4 prompts, alert the user to choose at least one. X

//check to make sure at least one of the 4 prompts is true 
      //combine the confirmed arrays. If not alert user to restart.
//create an array for uppercase, lowercase, numeric, and special characters
//create an empty array for the password with length provided by user.
//random item from combined array and push it to the password array and this step up to the length of the password


// Get references to the #generate element
//var generateBtn = document.querySelector("#generate");
// Add event listener to generate button

//given to us.

//function makeRandom () {
       // for (var i = 0, a = charset.length; i < Number(User); ++i) 
       // {retVal += charset.charAt(Math.floor(Math.random() * a));}}
          



var minReq= 8
var maxReq = 128

var charReq= ["!","#","$","%","&'"]  //separated out arrays.
var numReq = ["0","1","2","3","4","5","6","7","8","9"]
var lowReq= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var upReq= ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var allReq = [charReq, numReq, lowReq, upReq]


//Do what you know first:
//console.log. 
//User has to put in a number. The condition must be a comparison between two numbers. If not, restart.
//User needs to confirm at least one of the four options. If not, restart.
//User can make any combinations of the four options. 



var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var User = prompt("How many characters would you like your password to contain. Enter a number between 8 and 128.");
     if (Number(User) < minReq || Number(User) > maxReq ){
          alert("Password length must be between 8 and 128 characters. Please try again.");
          writePassword();
     } else {
      var message = confirm("To create your password, please determine what should be included. One of the four options must be selected. Click ok to continue."); 
      var specChar= confirm("Click OK to confirm including special characters.");
      var numChar = confirm("Click OK to confirm including numeric characters.");
      var numLow =  confirm("Click OK to confirm including lowercase characters.");
      var numUpper = confirm("Click OK to confirm including uppercase characters."); 
    }
                        //false       //false      //false      //false
    if (Number(User) === !specChar || !numChar|| !numLow|| !numUpper)  {
      alert ("Must contain at least one. Try again"); 
      writePassword();
    } 

    if (Number(User)=== allReq) {    //all conditions met
      generatePassword();
    }


  var password = generatePassword();

  function generatePassword() {
  var retVal = "";
          for (var i = 0, x = allReq.length; i <= Number(User); ++i) 
          {retVal += allReq.charAt(Math.floor(Math.random() * x));}
          return retVal;
  }



  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// function generatePassword() 



// // Write password to the #password input
// function writePassword() {
//   var User = prompt("How many characters would you like your password to contain. Enter a number between 8 and 128.");
   
//   if (Number(User) < minRequirement && Number(User) > maxRequirement) {
//        alert("Password length must be between 8 and 128 characters. Please try again.");
//        writePassword(); } //stops user from continuing and re-sets the generatePassword function.
//       else {
//           var message = confirm("To create your password, please determine what should be included. One of the four options must be selected. Click ok to continue.")
//           var specChar= confirm("Click OK to confirm including special characters.");
//           var numChar = confirm("Click OK to confirm including numeric characters.");
//           var numLow =  confirm("Click OK to confirm including lowercase characters.");
//           var numUpper = confirm("Click OK to confirm including uppercase characters."); //if any, and, or of these are true, the user should go to the next phase.
//           var allCon = [specChar, numChar, numLow, numUpper] //this is an array of the user's choices.
       


//           if (Number(User) === !specChar || !numChar|| !numLow|| !numUpper)  { //if it does not contain one of these 4. I need a variable because it must contain either one, two, three, and or all four.
//           alert("Must contatin at least one. Try again");
//           writePassword();}
          
//           else if (Number(User) === specChar|| numChar || numLow || numUpper) { //if it does not contain one of these 4)}


//         } 
         
//       }
 
//          var passwordText = document.querySelector("#password");
//          passwordText.value = generatePassword() ;
//     }

//     generateBtn.addEventListener("click", generatePassword);



    

//When I click the button, I want the password to generate.
//the password should be between 8 and 128 characters.
    //if the password is not between 8-128 characters, alert the user to choose a number between 8 and 128. got back to function.


//If the choser chooses the correct characters, then they should be asked for number, lower, upper, and special character requirements. 
    //if the user does not choose at least one of the 4 prompts, alert the user to choose at least one. go back to function.

//statement should be if user chooses all, or at least one array, the password then should generate.
    //if the user choses all 4, then the password should be a random combination of all 4 arrays.

//How do we tie the value to the users choice?








    //if (specChar==true && numChar==true && numLow==true && numUpper==true){  //writing out each scenario.I wonder if there is a way to make an object to assign in the sceanior and have it equal to the user's choice.
         // function generatePassword() {
/*      
         // var retVal = "";
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
 */





  
