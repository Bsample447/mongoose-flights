const express = require('express');
const router = express.Router();

// Example root route
router.get('/', (req, res) => {
  res.render('index');
});

// Other common routes...

module.exports = router;
