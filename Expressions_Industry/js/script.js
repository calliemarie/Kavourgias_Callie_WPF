//Callie Kavourgias
//Sept. 11, 2014
//Expressions_Industry

var hours = parseInt(prompt("How many hours do you have on your sprint?"));
var articleLength = parseInt(prompt("How many hours does it take you to write an article?"));
var articleNeed = parseInt(prompt("How many articles do you need this sprint?"))

var result = hours/ (articleLength * articleNeed);

console.log("If you have " + hours + " hours in your sprint, then you will be able to finish " + result + " articles");