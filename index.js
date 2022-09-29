const morgan = require("morgan");
const express = require("express");
const app = express();
const path = require("path");
const htmlTemplate = require("html-template-tag");
const port = 3000;
const views = require("./views");

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send(views.main());
});

// app.get("/main", (req, res) => {
//     res.send(views.main());
//   });

// console.log("CONSOLE", views);

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
