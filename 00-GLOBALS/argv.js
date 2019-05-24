const grab = flag => {
  let valueAfterFlag = process.argv.indexOf(flag) + 1;
  return process.argv[valueAfterFlag];
}

const greeting = grab("--greeting");
const user = grab("--user");

console.log(`${greeting} ${user}`);