const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/projectbadminton');

const Schema = mongoose.Schema;

const mixSchema = new Schema({
    rank : Number,
    country : String,
    player1 : String,
    player2 : String,
    points : Number,
    tournament : Number
});

const Mix = mongoose.model("mix", mixSchema);

module.exports = Mix;