const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/projectbadminton');

const Schema = mongoose.Schema;

const tournamentSchema = new Schema({
    time : String,
    status : String,
    player1 : String,
    player2 : String,
    set1 : Number,
    set2 : Number,
    score1 : Number,
    score2 : Number,
    score3 : Number,
    score4 : Number
});

const Tournament = mongoose.model("tournament", tournamentSchema);

module.exports = Tournament;