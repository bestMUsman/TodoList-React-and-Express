const express = require("express");
const path = require("path");
const logger = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 3001;
app.listen(PORT, function() {
  console.log(`listening on port ${PORT}`);
});

app.use(cors());
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "client/build")));

// app.use('/static', express.static(path.join(__dirname, 'public')));

// app.get("/", function(req, res) {
//   res.sendFile(__dirname + "/public/index.html");
// });

const todolistRoutes = require("./routes/todolistRoute");
app.use("/api/todolist", todolistRoutes);
app.get("/api", function(req, res) {
  res.send('working');
});
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});
