const fs = require("fs");

fs.renameSync("./assets/colors.json", "./assets/colorData.json");
/** 
 * moving files takes 3 arguments. 
 * 1. origin file
 * 2. destination file
 * 3. callback/error check
 *  */ 
fs.rename("./assets/notes.md", "./storage/notes.md", err => {
  if (err) {
    throw err;
  }
});

setTimeout(() => {
  fs.unlinkSync("./assets/alex.jpg");
}, 4000);