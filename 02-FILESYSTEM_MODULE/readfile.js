const fs = require("fs");
const util = require("util");

/* Text files can be read */
// fs.readFile("./assets/readme.md", "UTF-8", (err, text) => {
//   if (err) {
//     console.log(err)
//   }

//   console.log("file contenst read");
//   console.log(text);
// });

/* So can  binary files */
fs.readFile("./assets/alex.jpg", (err, text) => {
  if (err) {
    console.log(err);
    process.exit();
  }

  console.log("file contenst read");
  console.log(text);
});



