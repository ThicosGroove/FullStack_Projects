const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(port, () => {
  console.log("LIGOU");
});

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/forum", (req, res) => {
  res.render("forum", { publishes });
});

app.get("/details/:id", (req, res) => {
  const { id } = req.params;
  const p = publishes.find((p) => p.id === parseInt(id));
  res.render("publisheDetails", { p });
});

app.get("/new", (req, res) => {
  res.render("new");
});

app.post("/forum", (req, res) => {
  const { username, comment } = req.body;
  publishes.push({ username, comment });
  res.redirect("forum");
});

const publishes = [
  {
    id: 1,
    username: "Thiago",
    comment: "hahah boa",
  },
  {
    id: 2,
    username: "Renata",
    comment: "meu amor",
  },
  {
    id: 3,
    username: "Dog",
    comment: "Sou um cachorro",
  },
  {
    id: 4,
    username: "Planta",
    comment: "planta faz isso?",
  },
];
