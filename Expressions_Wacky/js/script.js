//Callie Kavourgias
//Sept. 11, 2014
//Expressions_Wacky

//different group the bride needs to invite
var brideGuest = [132, 43, 12];
var momGuest = parseInt(prompt("How many people does your mom want invite to the wedding?"));
var fianceGuest = parseInt(prompt("How many people does your fiance want invite to the wedding?"));

//adds up all the bride's guests from the array
var totalBrideGuest = brideGuest[0] + brideGuest[1] + brideGuest[2];

//adds all the different guests together
var guestList = totalBrideGuest + momGuest + fianceGuest;

//figures out the numbers of tables needed by dividing the guest list by 8, then rounding the number up
var tables = Math.round(guestList/8);

console.log("Good grief! You're inviting " + guestList + " people to your wedding?! You'll need " + tables + " tables!");
