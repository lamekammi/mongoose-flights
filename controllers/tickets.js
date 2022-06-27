const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

models.exports = {
    addSeats
}

// function addSeats(req, res) {
//     Flight.findById(req.params.id, function(err, flight) {
//         Ticket.find({Flight: flight._id}, function(err, tickets) {

//         })
//     })
// }