const express = require('express');
const burger = require('../models/burger-model')

const router = express.Router();

// Create all our routes and set up logic within those routes where required.
router.get('/', (req, res) => {
    burger.selectAll((data) => {
      const hbsObject = {
        burgers: data,
      };
      console.log(hbsObject);
      res.render('index', hbsObject);
    });
  });

















// Export routes for server.js to use.
module.exports = router;