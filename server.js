const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.json({data: "Hello World!"});
});

app.listen(1234, function () {
  console.log("App running on port " +this.address().port);
});
