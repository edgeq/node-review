const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8888;

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

let messages = [
  {name: 'Larry', message: 'Curb Your Enthusiasm'},
  {name: 'Jerry', message: 'A show about nothing'}
];

app.get('/messages', (req, res) => {
  res.send(messages)
})
app.post('/messages', (req, res) => {
  // console.log(req.body);
  messages.push(req.body);
  res.sendStatus(200);
})

app.listen(port, () => {
  console.log(`Port listening on port ${port}`);
});

