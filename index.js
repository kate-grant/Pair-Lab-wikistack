const morgan = require("morgan");
const express = require("express");
const app = express();
const path = require("path");
const htmlTemplate = require("html-template-tag");
const port = 3000;
const views = require("./views");
const layout = require("./views/layout");
const { db, Page, User } = require("./models");

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));

//console.log(db);

db.authenticate().then(() => {
  console.log("connected to the database");
});

app.get("/", (req, res) => {
  res.send(layout(""));
});

const init = async () => {
  await db.sync({ force: true });

  app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
  });
};

init();
