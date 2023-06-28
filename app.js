"use strict";

// prompt the user for their name and write it to the DOM
function getUserName() {
  let username = prompt("What is your name?");
  return document.write(username);
}

// prompt the user for a number of days and write it to the DOM
function getStartDate() {
  let startDate = prompt(
    "How many days until you start your learning journey?"
  );
  return document.write(startDate);
}

/* Prompt the user for a number of years and send a different message
   depending on how many years of experience they have
*/
function getFinalMessage() {
  let message;

  let yearsExperience = prompt(
    "How many years of experience coding do you have?"
  );

  if (yearsExperience < 2) {
    message = "Congratulations on starting learning how to code!";
  } else if (yearsExperience < 4) {
    message =
      "Hopefully this helps as you start your next steps in your learning journey!";
  } else if (yearsExperience < 6) {
    message =
      "You probably know most of this already since you have " +
      yearsExperience +
      " of coding, but hopefully something was helpful!";
  } else {
    yearsExperience = prompt(
      "How many years of experience coding do you have?"
    );
  }

  return document.write(message);
}

/* Confirm if the user wants to play a game.
   If so, prompt the user to guess a number. 
   Alert if too high or too low.
   When the guess is correct, alert the user and stop the game.
*/
function guessJavaScriptDate() {
  let userWantsToPlay = confirm("Do you want to play a trivia game?");
  if (userWantsToPlay == true) {
    let guess;
    let correctAnswer = 26;
    while (guess != correctAnswer) {
      guess = prompt(
        "How many years old is the programming language JavaScript?"
      );
      if (guess < correctAnswer) {
        alert("Too low! Guess again");
      } else if (guess > correctAnswer) {
        alert("Too High! Guess again.");
      } else
        alert(
          "That's correct! JavaScript was invented by Brendan Eich in 1995, making it 26 years old!"
        );
    }
  }
}
