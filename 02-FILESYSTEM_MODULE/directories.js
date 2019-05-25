const fs = require("fs");

fs.readdirSync("./storage-files").forEach(filename => {
  fs.unlinkSync(`./storage-files/${filename}`);
})

fs.rmdir("./storage-files", err => {
  if (err) {
    throw err;
  }

  console.log("directory removed");
})