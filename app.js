"use strict";

let userPoints = 0;

alert("Welcome to my guessing game");

let user = prompt("What is your name?");

while (!user) {
  user = prompt("What is your name? Really, we need it.");
}

if (user !== "stephanie") {
  alert("too bad you're not a stephanie");
}

alert("Hi " + user + "! I am so glad you decided to come to my site.");

let answer = prompt("Is Stephanie's favorite food popcorn.", "type yes or no").toLowerCase();
console.log(answer);

// let foodsILike = ["tatertots", "juanitas tortilla chips", "popcorn", "kale"];

// for (let i = 0; i < foodsILike.length; i++) {
//   console.log(foodsILike[i]);
// }

// let index = foodsILike.indexOf("popcorn");
// console.log(index);

if (answer === "yes" || answer === "y") {
  userPoints++;
} else {
  alert("Wrong! try again");
}

alert("you have " + userPoints + " points.");
