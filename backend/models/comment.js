const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/projectbadminton');

const Schema = mongoose.Schema;

const commentsSchema = new Schema({
    name : String,
    email : String,
    comments : String
});

const Comments = mongoose.model("comments", commentsSchema);

module.exports = Comments;