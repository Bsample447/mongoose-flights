const express = require('express');
const router = express.Router();

const ticketsController = require('../controllers/tickets');

// Example route to get all tickets
router.get('/', ticketsController.getAllTickets);

// Example route to create a new ticket
router.post('/', ticketsController.createTicket);

// Other ticket routes...

module.exports = router;
