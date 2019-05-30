const express = require('express');
const router = express.Router();
const speakersRoute = require('./speakers');
const feedbackRoute = require('./feedback');

// starting with an export ensures I can use this logic somehwere else in the application
module.exports = () => {
  router.get('/', (req, res, next) => {
    return res.send('Index Served');
  })

  router.use('/speakers', speakersRoute());
  router.use('/feedback', feedbackRoute());

  // make sure to return whatever work we do with router
  return router;
};