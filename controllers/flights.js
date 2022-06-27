const Flight = require('../models/flight');
const Ticket = require('../models/ticket');


module.exports = {
    new: newFlight,
    create,
    index,
    show
}

function newFlight(req, res) {
    res.render('flights/new')
}

function create(req, res) {
    console.log(req.body)
    req.body.flightNo = parseInt(req.body.flightNo)
    //add key here
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
    const flight = new Flight(req.body);
    flight.save(function(err) {
        if (err) return res.redirect('/flights/new');
        console.log(flight);
        res.redirect('/flights');
    })
}

function index(req, res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/index', {
            flights
        })
    })
}

function show(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        Ticket.find({flight: flight._id}, function(err, tickets) {
            console.log(flight)
            res.render('flights/show', {
                flight, tickets
            })
        })
    })
}