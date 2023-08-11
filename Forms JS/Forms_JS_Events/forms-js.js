const clubForm = document.querySelector("#clubForm");
const input = document.querySelector("#clubName");
const list = document.querySelector("#list");

clubForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newClub = input.value;
  const newLI = document.createElement("li");
  newLI.innerText = newClub;
  list.append(newLI);

  input.value = "";
});

// Outros tipos de eventos no input

// Só atualiza quando sai do campo de input
// clubForm.addEventListener("change", (e) =>{

//     console.log("Change event");
// })

// Ocorre em tempo real a cada input
// clubForm.addEventListener("input", (e) => {
//   const h1 = document.querySelector("h1");
//   h1.innerText = input.value;
// });

const container = document.querySelector(".hideExemple");
const hide = document.querySelector("#btn-change");

container.addEventListener("click", (e) => {
  container.classList.toggle("hide");
});

hide.addEventListener("click", (e) => {
  container.style.backgroundColor = makeRandColor();
  e.stopPropagation();
});

const makeRandColor = () => {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);

  return `rgb(${r}, ${g}, ${b})`;
};

// Event Delegation

// Isso não funciona poq não atualiza
// const lis = document.querySelectorAll("li");
// for (const li of lis) {
//   li.addEventListener("click", (e) => {
//     li.remove();
//   });
// }

// A melhor forma de fazer é:
// Criar um evento para o pai, no caso Ul
// Pegar a propriedade "target".

list.addEventListener("click", (e) => {
  e.target.nodeName === "LI" && e.target.remove();
});
