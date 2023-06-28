"use strict";

function getUserName() {
  let username = prompt("What is your name?");
  return document.write(username);
}

function getStartDate() {
  let startDate = prompt(
    "How many days until you start your learning journey?"
  );
  return document.write(startDate);
}

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

function guessJavaScriptDate() {
  let userWantsToPlay = confirm("Do you want to play a trivia game?");
  if (userWantsToPlay == true) {
    let guess;
    let correctAnswer = 26;
    while (guess != correctAnswer) {
      guess = prompt("How old is the programming JavaScript?");
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
guessJavaScriptDate()