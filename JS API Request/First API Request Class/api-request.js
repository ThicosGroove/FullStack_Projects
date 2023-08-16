// Forma de fazer um API Request com JS puro

// Fazer a request, esperar a promise
// retornar o resultado.
// Pegar o resultado, fazer nova request e esperar a promise
// retornar o resultado
// catch no final para qualquer erro.

// fetch("https://swapi.dev/api/people/1/")
//   .then((res) => {
//     console.log("RESOLVED!", res);
//     return res.json;
//   })
//   .then((data) => {
//     console.log(data);
//     return fetch("https://swapi.dev/api/people/2/");
//   })
//   .then((res) => {
//     console.log("SECOND REQUEST RESOLVED!!!");
//     return res.json;
//   });
// then((data) => {
//   console.log(data);
// }).catch((e) => {
//   console.log("ERROR!", e);
// });

// Melhor forma
// const loadStarWarsPeople = async () => {
//   try {
//     const res = await fetch("https://swapi.dev/api/people/1/");
//     const data = await res.json;
//     console.log(data);
//   } catch (e) {
//     console.log("ERROR!!", e);
//   }
// };

// loadStarWarsPeople();

// ****************************************************** */
// Usando AXIOS para fazer as requests
// axios
//   .get("https://swapi.dev/api/people/1/")
//   .then((res) => {
//     console.log("RESPONSE: ", res);
//   })
//   .catch((e) => {
//     console.log("ERROR!", e);
//   });

// Melhor forma de usar
const getStarWarsPerson = async (id) => {
  try {
    const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
    console.log(res.data);
  } catch (e) {
    console.log("ERROR!", e);
  }
};

getStarWarsPerson(5);
getStarWarsPerson(10);

// **************************************************** //
// Cada API retorna um tipo diferente, algumas retornam json como padrão
// Outros retornam XML, HTML, etc...
// Verificar em cada API, fazer o config de acordo

// Pegando a informação da API
// Transformando a request em json
// retorna apenas o objeto desejado
const getDadJoke = async () => {
  try {
    const config = { headers: { Accept: `application/json` } };
    const res = await axios.get(`https://icanhazdadjoke.com/`, config);
    return res.data.joke;
  } catch (e) {
    console.log("ERROR!", e);
  }
};

// Pega o retorno da API
// Manipula o DOM
// Atualiza a pág de acordo
const jokes = document.querySelector("#jokes");
const jokesBtn = document.querySelector("#jokes-btn");

const addNeWJoke = async () => {
  try {
    const jokeText = await getDadJoke();
    const newLI = document.createElement(`LI`);
    newLI.append(jokeText);
    jokes.append(newLI);
  } catch (e) {
    console.log("ERROR!", e);
  }
};

// Conecta o botão à função desejada
jokesBtn.addEventListener("click", addNeWJoke);
