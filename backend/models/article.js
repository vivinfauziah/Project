const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/projectbadminton');

const Schema = mongoose.Schema;

const articleSchema = new Schema({
    source : String,
    title : String,
    photo : String,
    description : String
});

const Article = mongoose.model("article", articleSchema);

module.exports = Article;