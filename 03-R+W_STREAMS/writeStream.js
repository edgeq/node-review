const fs = require("fs");

const readStream = fs.createReadStream("./assets/lorum-ipsum.md", "UTF-8");
const writeStream = fs.createWriteStream("./assets/myFile.txt", "UTF-8");

// writeStream.write("Hello");
// writeStream.write(" World\n");

// process.stdin.on("data", data => {
//   writeStream.write(data);

// readStream.on("data", data => {
//   writeStream.write(data);
// })

readStream.pipe(writeStream);

//   const input = data.toString().trim();
//   if (input === 'exit' || input === 'bye' ) {
//     console.log(' > see ya later!');
//     process.exit();
//   }
// })
