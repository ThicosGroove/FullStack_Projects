// CRUD
// Create, Read, Update, Destroy

const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
const methodOverride = require("method-override");
const { v4: uuid } = require("uuid");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.json());
app.use(methodOverride("_method"));

let comments = [
  {
    id: uuid(),
    username: "Thiago",
    comment: "essa foi boa",
  },
  { id: uuid(), username: "Jorge", comment: "meu deeeus" },
  {
    id: uuid(),
    username: "Renata",
    comment: "Meu amor",
  },
  { id: uuid(), username: "Doguinho", comment: "Au Au" },
];

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/comments/new", (req, res) => {
  res.render("comments/new");
});

app.post("/comments", (req, res) => {
  const { username, comment } = req.body;
  comments.push({ username, comment, id: uuid() });
  res.redirect("/comments");
});

app.get("/comments", (req, res) => {
  res.render("comments/index", { comments });
});

app.get("/comments/:id", (req, res) => {
  const { id } = req.params;
  const comment = comments.find((c) => c.id === id);
  res.render("comments/show", { comment });
});

app.get("/comments/:id/edit", (req, res) => {
  const { id } = req.params;
  const comment = comments.find((c) => c.id === id);
  res.render("comments/edit", { comment });
});

app.patch("/comments/:id", (req, res) => {
  const { id } = req.params;
  const newCommentText = req.body.comment;
  const foundComment = comments.find((c) => c.id === id);
  foundComment.comment = newCommentText;
  res.redirect("/comments");
});

app.delete("/comments/:id", (req, res) => {
  const { id } = req.params;
  comments = comments.filter((c) => c.id !== id);
  res.redirect("/comments");
});

app.listen(port, () => {
  console.log("Ligou");
});
