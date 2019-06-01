const express = require('express');
const router = express.Router();

// starting with an export ensures I can use this logic somehwere else in the application
module.exports = () => {
  router.get('/', (req, res, next) => {
    return res.render('speakers', {
      page: 'All Speakers',
    });
  });

  router.get('/:name', (req, res, next) => {
    return res.render('speakers/detail', {
      page: req.params.name,
    });
  });
  // make sure to return whatever work we do with router
  return router;
};