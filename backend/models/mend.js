const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/projectbadminton');

const Schema = mongoose.Schema;

const mendSchema = new Schema({
    rank : Number,
    country : String,
    player1 : String,
    player2 : String,
    points : Number,
    tournament : Number
});

const Mend = mongoose.model("mend", mendSchema);

module.exports = Mend;