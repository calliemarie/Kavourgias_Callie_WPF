//Callie Kavourgias
//Sept. 11, 2014
//Expressions_Wacky

var brideGuest = [132, 43, 12];
var momGuest = parseInt(prompt("How many people does your mom want invite to the wedding?"));
var fianceGuest = parseInt(prompt("How many people does your fiance want invite to the wedding?"));

var totalBrideGuest = brideGuest[0] + brideGuest[1] + brideGuest[2];

var guestList = totalBrideGuest + momGuest + fianceGuest;

console.log("Good grief! You're inviting " + guestList + " people to your wedding?!" );
