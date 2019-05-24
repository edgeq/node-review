// console.log(`Process ID: ${process.pid}`);
// console.log(`Node Version: ${process.versions.node}`);
// console.log(process.argv);

const [, , firstName, lastName] = process.argv;

console.log(`Your name is ${firstName} ${lastName}`);




