const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/projectbadminton');

const Schema = mongoose.Schema;

const womendSchema = new Schema({
    rank : Number,
    country : String,
    player1 : String,
    player2 : String,
    points : Number,
    tournament : Number
});

const Womend = mongoose.model("womend", womendSchema);

module.exports = Womend;