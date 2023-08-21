const express = require("express");
const app = express();
const port = 3000;

// Liga o servidor no Port
app.listen(port, () => {
  console.log("LISTENING ON PORT 3000!");
});

// Escuta todos od requests do servidor
// app.use(() => {
//   console.log("WE GOT A NEW REQUEST!");
// });

// request and response
// app.use((req, res) => {
//   res.send("PRIMEIRO SERVIDOR FUNCIONANDO");
// });

app.get("/", (req, res) => {
  res.send("THIS IS HOME PAGE!!!!");
});

app.get("/cats", (req, res) => {
  console.log("CAT REQUEST!!");
  res.send("WE GOT CATS");
});

app.post("/cats", (req, res) => {
  res.send("WE GOT CATS! THIS IS A POST REQUEST!");
});

// Melhor forma de fazer a url
app.get("/t/:subreddit/:postId", (req, res) => {
  const { subreddit, postId } = req.params;
  res.send(`<h1>${postId} Browsing for ${subreddit}</h1>`);
});

// * pega qualquer route
// SEMPRE por último
app.get("*", (req, res) => {
  res.send("I DON'T KNOW THAT PATH");
});
