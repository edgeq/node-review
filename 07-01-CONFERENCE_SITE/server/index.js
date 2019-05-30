const express = require('express');
const app = express();
const port = 3000;
const routes = require('./routes');

app.use('/', routes());
app.use(express.static('public'));
app.get('/favicon.ico', (req, res, next) => {
  return res.sendStatus(204);
});


app.listen(port, ()=> {
  console.log(`Server running at http://localhost:${port}`);
})

//always a good idea to export your file/module.
module.exports = app;