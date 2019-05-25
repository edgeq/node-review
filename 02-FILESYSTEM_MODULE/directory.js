const fs = require("fs");

if (fs.existsSync("storage")) {
  console.log("folder exists")
} else {
  
  fs.mkdir("storage", err => {
    if(err) {
      throw err;
    }
  
    console.log("directory created");
  });

}
