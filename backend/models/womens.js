const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/projectbadminton');

const Schema = mongoose.Schema;

const womensSchema = new Schema({
    rank : Number,
    country : String,
    player : String,
    points : Number,
    tournament : Number
});

const Womens = mongoose.model("womens", womensSchema);

module.exports = Womens;