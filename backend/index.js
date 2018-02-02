const express = require("express");
const bodyParser = require("body-parser")
const articleRoutes = require("./routes/article");
const mendRoutes = require("./routes/mend");
const mensRoutes = require("./routes/mens");
const mixRoutes = require("./routes/mix");
const womendRoutes = require("./routes/womend");
const womensRoutes = require("./routes/womens");
const tournamentRoutes = require("./routes/tournament");
const commentsRoutes = require("./routes/comment");
const fileUpload = require("express-fileupload");

const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, HEAD, POST, PUT, PATCH, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));
app.use(fileUpload());
app.use(express.static('collections'));

app.use("/api/article", articleRoutes);
app.use("/api/mend", mendRoutes);
app.use("/api/mens", mensRoutes);
app.use("/api/mix", mixRoutes);
app.use("/api/womend", womendRoutes);
app.use("/api/womens", womensRoutes);
app.use("/api/tournament", tournamentRoutes);
app.use("/api/comment", commentsRoutes);

app.listen(3300);