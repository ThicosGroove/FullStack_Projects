const p1 = {
  score: 0,
  text: document.querySelector("#p1score"),
  btn: document.querySelector("#p1plus"),
};

const p2 = {
  score: 0,
  text: document.querySelector("#p2score"),
  btn: document.querySelector("#p2plus"),
};

const resetBtn = document.querySelector("#reset");
const playToSelect = document.querySelector("#playto");

let scoreToWin = 3;
let isGameover = false;

p1.btn.addEventListener("click", (e) => {
  if (isGameover) return;

  verifyScore(p1, p2);
});

p2.btn.addEventListener("click", (e) => {
  if (isGameover) return;

  verifyScore(p2, p1);
});

playToSelect.addEventListener("change", (e) => {
  scoreToWin = parseInt(playToSelect.value);
  reset();
});

resetBtn.addEventListener("click", reset);

function reset() {
  p1.score = 0;
  p2.score = 0;
  p1.text.innerText = p1.score.toString();
  p2.text.innerText = p2.score.toString();
  toggleClass(this, this);
  isGameover = false;
}

function verifyScore(winner, loser) {
  winner.score++;
  winner.text.innerText = winner.score.toString();

  if (winner.score >= scoreToWin) {
    toggleClass(winner, loser);
    isGameover = true;
  }
}

function toggleClass(winner, loser) {
  if (winner === p1 || winner === p2) {
    winner.text.classList.toggle("has-text-success");
    winner.btn.disabled = true;
    loser.text.classList.toggle("has-text-danger");
    loser.btn.disabled = true;
  } else {
    p1.text.className = "";
    p1.btn.disabled = false;
    p2.text.className = "";
    p2.btn.disabled = false;
  }
}
