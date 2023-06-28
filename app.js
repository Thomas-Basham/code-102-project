"use strict";

function getUserName() {
  let username = prompt("Hello! What is your name?");
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
  }
  
  document.write(message);
}

