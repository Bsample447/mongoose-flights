const express = require('express');
const router = express.Router();

const ticketsController = require('../controllers/tickets');

// route to get all tickets
router.get('/', ticketsController.getAllTickets);

// route to create a new ticket
router.post('/', ticketsController.createTicket);

// Other ticket routes...

module.exports = router;
