# Password Generator Starter Code


Deployment Link:


Assignment: 
GIVEN I need to sample a potential employee's previous work
WHEN I load their portfolio
THEN I am presented with the developer's name, a recent photo or avatar, and links to sections about them, their work, and how to contact them
WHEN I click one of the links in the navigation
THEN the UI scrolls to the corresponding section
WHEN I click on the link to the section about their work
THEN the UI scrolls to a section with titled images of the developer's applications
WHEN I am presented with the developer's first application
THEN that application's image should be larger in size than the others
WHEN I click on the images of the applications
THEN I am taken to that deployed application
WHEN I resize the page or view the site on various screens and devices
THEN I am presented with a responsive layout that adapts to my viewport



Special Note: 

I worked with a tutor to work on my approach to the problem along with the syntax. The tutor helped me reframe the beginning arugment and this code:

 function generatePassword() {
    var length = 8,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}

I was able to read the code back to determine what it is doing. However, I am revieiwng effiency options -toLowerCase and toUpperCase and trying to extract numbers. I also know that repeating the same code over and over again is not the best approach, so I want to establish a function that can use be for each different scenario to generate the password. I am also revieiwng to see if there is a better way to approach the scenarios. 

Reviewing for assignment: 
https://www.youtube.com/watch?v=iKo9pDKKHnc

Found the .some to find how to choose at least one variable:
https://stackoverflow.com/questions/43851374/javascript-check-if-at-least-one-variable-is-true

I found I don't understand how to connect anything, I had the beginning working before, and now I don't. I will have to study JavaScript and Web APIs over the weekend and try again for submission to hopefully increase the grade and so I don't fall too far behind everyone else.

I am also working a tutor to understand the While Loop function. This way, the While Loops is executed until a certain condition is met so restrictions are placed on the user to generate the password.


My password is coming back as undefined. I know this is from how I initialized the While loop, but I am having trouble now defining it within the function. I know this related to the code's scope, but I can't seem to piece this together.

I have started again on this assignment and tried to re-organize how I thought about the problem. I still want the user to be restricted from moving forward until the prompts are entered correctly. I need to focus more on the actual function for now rather than the restriction.