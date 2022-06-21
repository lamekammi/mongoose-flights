const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United']
    },

    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
        default: 'DEN'
    },

    flightNo: {
        type: Number,
        min: 10,
        max: 9999
    },

    departs: {
        type: Date,
        defualt: function() {
            return new Date()
        }
    }
});

module.exports = mongoose.model('Flight', flightSchema);