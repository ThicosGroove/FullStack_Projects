const newMessage = "Hello from our first JS file!!";

console.log(newMessage.toUpperCase());

//#region First Class
/* Definindo Funções*/

//Expressão normal
const isEven = function (num) {
  return num % 2 === 0;
};

//Arrow function normal MELHOR FORMA
const isEven2 = (num) => {
  return num % 2 === 0;
};

//Arrow function sem parentêses
const isEven3 = (num) => {
  return num % 2 === 0;
};

//Implicit return SÓ FUNCIONA QUANDO TEM UMA ÚNICA CONTA
const isEven4 = (num) => num % 2 === 0;

//Uma linha implicit return
const isEven5 = (num) => num % 2 === 0;

/* Default Parameters*/
const rollDie = (numSides = 6) => {
  return Math.floor(Math.random() * numSides) + 1;
};

//********************************************** */

// Função MAP
// Trata os dados de uma Array a partir de uma função definida E
// Cria uma nova Array.

const movies = [
  { title: "Love Bug", score: 99 },
  { title: "Dog Shut", score: 80 },
  { title: "Shaffles", score: 35 },
  { title: "Novles", score: 28 },
  { title: "Magles", score: 66 },
];

// const newMovie = movies.map(function (movie) {
//   return `${movie.title} - ${movie.score / 10}`;
// });

const newMovie = movies.map((m) => {
  return `${m.title} - ${m.score / 10}`;
});

//********************************************** */

// Função Filter
// Filtra os dados de uma Array E
// Cria uma nova Array

const numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

const newNumbers = numbers.filter((n) => {
  return n === 4;
});

const newNumbers2 = numbers.filter((n) => {
  return n < 10;
});

// Combinando Filter + Map
// const goodMovies = movies.filter((m) => m.score > 60);
// const badMovies = movies.filter((m) => m.score < 60);

// const goodTitle = goodMovies.map((m) => {
//   return m.title;
// });

// const badTitle = badMovies.map((m) => {
//   return m.title;
// });

// OU Fazer em uma lionha só
const goodMovies = movies.filter((m) => m.score > 60).map((m) => m.title);

const badMovies = movies.filter((m) => m.score < 60).map((m) => m.title);

//********************************************** */

/* Set Time Out / Set Interval */

const timeOutSeconds = 2000;
const intervalSeconds = 5000;
// setTimeout
setTimeout(() => {
  console.log(`Set Time Out ${timeOutSeconds / 1000} Seconds`);
}, timeOutSeconds);

//setInterval Usado com ClearInterval(id)
// const id = setInterval(() => {
//   console.log(`Set Interval every ${intervalSeconds / 1000} Seconds`);
// }, intervalSeconds);

//********************************************** */

//#endregion
