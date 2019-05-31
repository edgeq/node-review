const express = require('express');
const router = express.Router();

// starting with an export ensures I can use this logic somehwere else in the application
module.exports = () => {
  router.get('/', (req, res, next) => {
    return res.render('speakers');
  });

  router.get('/:name', (req, res, next) => {
    return res.send(`Speaker details for ${req.params.name}`);
  });
  // make sure to return whatever work we do with router
  return router;
};