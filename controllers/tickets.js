const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    new: newTicket,
    create,
    //addSeats
}

function create(req, res) {
    req.body.flight = req.params.id
    Flight.findById(req.params.id, function(err, flight) {
        Ticket.create(req.body, function(err, ticket) {
            console.log(ticket)
            res.redirect(`/flights/${flight._id}`)
        })
    })
}

function newTicket(req, res) {
    Ticket.find({}, function(err, tickets) {
        res.render('tickets/new', {
            flight: req.params.id
        })
    })
}

// function addSeats(req, res) {
//     req.body.flight = req.params.id
//     Flight.findById(req.params.id, function(err, flight) {
//         res.redirect(`/flights/${flight._id}`)    
//     })
// }