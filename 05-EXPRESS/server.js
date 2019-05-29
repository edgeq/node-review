const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8888;
const http = require('http').Server(app);
const io = require('socket.io')(http);
const mongoose = require('mongoose');

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// define the db connection string
const dbUrl = 'mongodb+srv://user:user@mongedge-4r0of.mongodb.net/test?retryWrites=true';
// set up a data model
const Message = mongoose.model('Message', {
  name: String,
  message: String
})

// let messages = [
//   {name: 'Larry', message: 'Curb Your Enthusiasm'},
//   {name: 'Jerry', message: 'A show about nothing'}
// ];

app.get('/messages', (req, res) => {
  Message.find({}, (err, messages) => {
    res.send(messages)
  })
})

app.post('/messages', async (req, res) => {

  try {
    let message = new Message(req.body);
    let savedMessage = await message.save()
    console.log('saved')
    let censored = Message.findOne({message: 'badword'})

      if(censored)
       await Message.deleteOne({_id: censored.id })
      else
        io.emit('message', req.body)
        res.sendStatus(200)
  } catch (error) {
    res.sendStatus(500);
    return console.error(err);
  } finally {
    console.log('message post called')
  }
})

io.on('connection', socket => {
  console.log('a user is connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  })
})

mongoose.connect(dbUrl, {useNewUrlParser: true}, (err) => {
  console.log('mongoDB connection', err);
})

http.listen(port, () => {
  console.log(`Port listening on port: ${port}`);
});

