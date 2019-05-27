const express = require('express');
const app = express();
const port = 8888;

app.use(express.static(__dirname));
app.listen(port, () => {
  console.log(`Port listening on port ${port}`);
});

