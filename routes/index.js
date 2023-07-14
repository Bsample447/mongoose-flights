const express = require('express');
const router = express.Router();

// route
router.get('/', (req, res) => {
  res.render('index', { title: 'mongoose-flights'});
});

// Other routes...

module.exports = router;
