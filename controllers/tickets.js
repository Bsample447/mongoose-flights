// const Ticket = require('../models/ticket');

// // function to get all tickets
// exports.getAllTickets = async (req, res) => {
//   try {
//     const tickets = await Ticket.find();
//     res.json(tickets);
//   } catch (error) {
//     res.status(500).json({ error: 'Internal server error' });
//   }
// };

// // function to create a new ticket
// exports.createTicket = async (req, res) => {
//   try {
//     const newTicket = new Ticket(req.body);
//     const savedTicket = await newTicket.save();
//     res.json(savedTicket);
//   } catch (error) {
//     res.status(500).json({ error: 'Internal server error' });
//   }
// };

// // Other ticket-related functions...
