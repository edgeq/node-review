const express = require('express');
const router = express.Router();

// starting with an export ensures I can use this logic somehwere else in the application
module.exports = () => {
  router.get('/', (req, res, next) => {
    return res.send('Feedback Goes Here');
  });

  router.post('/', (req, res, next) => {
    return res.send('Form Sent');
  });
  // make sure to return whatever work we do with router
  return router;
};