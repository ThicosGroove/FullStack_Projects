const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.json());

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.listen(port, () => {
  console.log("Ligou");
});
