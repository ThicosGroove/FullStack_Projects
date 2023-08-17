const math = require("./math");
console.log(math.square(6));

// Quando faz um require de uma pasta
// o Node busca o module.export do arquivo principal
// SEMPRE com o nome de index.js
const cats = require("./Shelter");
console.log(cats);
