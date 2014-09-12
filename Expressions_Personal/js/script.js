//Callie Kavourgias
//Sept. 11, 2014
//Expressions_Personal

var meals = parseInt(prompt("How many times a day do you feed your dogs?"));
var dog1 = parseInt(prompt("How much food does the first dog get each meal?"));
var dog2 = parseInt(prompt("How much food does the second dog get each meal?"));

//adds the amount of food the dogs eat and then multiplies the amount by the meals they get every day
var result = (dog1 + dog2) * meals;

console.log("You will need " + result + " cups of food a day for your dogs.");


