const fs = require("fs");
const util = require("util");

fs.readdir('./assets', (err, files) => {
  if (err) {
    util.log(err)
  }
  console.log(files);
});

