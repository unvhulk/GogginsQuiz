var readlineSync = require("readline-sync");
const chalk = require("chalk");

var score = 0;

const play = (questionObj) => {
  var question = questionObj.question;
  var answer = questionObj.answer;

  console.log(question);

  var userAns = readlineSync.question("Enter your answer: ");

  if (userAns.toUpperCase() === answer.toUpperCase()) {
    console.log(chalk.green("Correct\n"));
    score += 1;
  } else {
    console.log(chalk.red("Wrong. The correct answer is " + answer + "\n"));
  }
};

console.log("Welcome to the " + chalk.italic.red("Goggins Quiz.\n"));

const questions = [
  {
    question: `Who is the hardest man on the planet?`,
    answer: "David Goggins",
  },
  {
    question: `How many times did David Goggins go through BUDS training in Hell Week?`,
    answer: "Three",
  },
  {
    question: `How many pull-ups did he do to break the World Record for Most Pull-ups in 24 hours?`,
    answer: "4030",
  },
  {
    question: `Is listening to music considered cheating while working out?`,
    answer: "Yes",
  },
  {
    question: `Is David Goggins a practitioner or a theorist?`,
    answer: "Practitioner",
  },
];

for (var i = 0; i < questions.length; i++) {
  play(questions[i]);
}

console.log("Your final score is : " + score);
// if(hs<=score){
//   console.log(chalk.bold.yellow("Congrats you've beaten your record!!!"));
// }
// hs = score;
