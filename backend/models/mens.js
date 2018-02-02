const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/projectbadminton');

const Schema = mongoose.Schema;

const mensSchema = new Schema({
    rank : Number,
    country : String,
    player : String,
    points : Number,
    tournament : Number
});

const Mens = mongoose.model("mens", mensSchema);

module.exports = Mens;