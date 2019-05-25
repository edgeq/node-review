const cp = require("child_process");

// cp.exec("open -a iTerm .");
cp.exec("node readsteam", (err, data, stderr) => {

  console.log(stderr);
})