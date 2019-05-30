/**
 * THIS IS A SIMPLE SCRIPT SHOWCASING WHY EXPRESS IS GREAT
 */

const express = require('express');
const app = express();
const port = 3000;

app.use((req, res, next) => {
  res.setHeader('x-server-date', new Date());
  return next();
})

app.get('/throw', (req, res, next) => {
  throw new Error('Something is wrong'); // don't do this
})

// this is a better practice
// always use next() or err() for error handling
// what it's called doesn't matter, but it's always the 3rd argument
app.get('/next', (req, res, err) => {
  setTimeout(() => {
  // throw new Error('Something is wrong');
  err(new Error('Something next wrong'));
  }, 1000)
})

app.get('/', (req, res, next) => {
  return res.send('Hello, I am a web server')
})

app.get('/time', (req, res, next) => {
  return res.send(new Date().toLocaleString());
})

app.get('/hello', (req, res, next) => {
  if (!req.query.name) {
    return res.status(400).end();
  }

  res.send(`Hello, ${req.query.name}`)
})

app.get('/user/:name', (req, res, next) => {
  return res.send(`User profile of ${req.params.name}`);
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  console.log(process.env);
})