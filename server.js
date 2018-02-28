const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("client/build"));
app.use(require("./client/controllers/index_controller"));
// this is the route to the uber-controller

app.listen(1234, function () {
  console.log("App running on port " +this.address().port);
});
