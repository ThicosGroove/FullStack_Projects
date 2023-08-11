// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector("#container");
const baseURL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

// Cria elemento                        createElement("element")
// Adiciona Classe                      classList.add("var element")
// Muda Texto Interno                   .innerText = ""
// Nova Imagem                          .src = ""
// Inserir Novo Elemento como filho     .appendChild("element")

for (let i = 1; i <= 151; i++) {
  const pokemon = document.createElement("div");
  pokemon.classList.add("pokemon");

  const label = document.createElement("span");
  label.innerText = `#${i}`;

  const newImg = document.createElement("img");
  newImg.src = `${baseURL}${i}.png`;

  pokemon.appendChild(newImg);
  pokemon.appendChild(label);
  container.appendChild(pokemon);
}
/* ******************************************************** */

const bodyColor = document.body.style.backgroundColor;
const btnColor = document.querySelector("#changeColor");

const makeRandColor = () => {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);

  return `rgb(${r}, ${b}, ${b})`;
};

btnColor.addEventListener("click", () => {
  const newColor = makeRandColor();
  document.body.style.backgroundColor = newColor;
  console.log(`${r}, ${g}, ${b}`);
});

/* ******************************************************** */
