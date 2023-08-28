const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.post("/post", (req, res) => {
  const { meat, qty } = req.body;
  res.send(`OK, here are ${qty} ${meat}`);
});

app.get("/", (req, res) => {
  res.render("home.ejs");
});

// Passando uma variável para o HTML usando EJS como template
app.get("/rand", (req, res) => {
  const randNum = Math.floor(Math.random() * 10) + 1;
  res.render("rand.ejs", { randNum });
});

app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params;
  res.render("subreddit.ejs", { subreddit });
});

app.get("/cats", (req, res) => {
  const catsList = ["jhonny", "fred", "vitorio", "pepela", "pandora"];
  res.render("cats.ejs", { catsList });
});

app.listen(port, () => {
  console.log("LINKED");
});
