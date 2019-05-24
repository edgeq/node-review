const collectAnswers = require('./lib/collectAnswers');

const questions = [
  "What is your name? ",
  "Where do you live? ",
  "What are your plans for node js? "
];

const answerEvents = collectAnswers(questions);

answerEvents.on("answer", answer => console.log(`questions answered: ${answer}`));
answerEvents.on("complete", answers => {
  console.log("thank u for your answers. ")
  console.log(answers);
});

answerEvents.on("complete", () => process.exit());