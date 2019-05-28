const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8888;
const http = require('http').Server(app);
const io = require('socket.io')(http);

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
  messages.push(req.body);
  io.emit('message', req.body);
  res.sendStatus(200);
})

io.on('connection', socket => {
  console.log('a user is connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  })
})

http.listen(port, () => {
  console.log(`Port listening on port: ${port}`);
});

