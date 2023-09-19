// 1. porto gli elementi su js come variabili e creo event list
// 2. reset
// 3. inserire div square da js e resettare quelle esistenti
// 4. creare ciclo per numerare caselle
// 5. inserire classe event listener con toggle su div square in modo da colorare lo sfondo
// 6. stampare numeri visibili al click
// 7. aggiungere difficoltà

// 1.
const btnPlayEl = document.querySelector(".btn-play");
const containerEl = document.querySelector("._container");
const mainEl = document.querySelector("main");
const difficultySelectEl = document.querySelector("#difficulty-select");

let limit;

// 2.
// tolgo gli elementi all'interno del contenitore con funzione reset
reset();

// 3.
btnPlayEl.addEventListener("click", function () {
  //resetto il contenitore al click (evito la creazione di più contenitori)
  reset();

  console.log("cliec");

  // 4.
  for (let i = 1; i <= limit; i++) {
    const square = generateSquare(i);
    // 5.
    square.addEventListener("click", function () {
      this.classList.toggle("clicked");
      console.log(this.innerText);
    });

    containerEl.appendChild(square);
  }
});

// FUNCTIONS

function reset() {
  containerEl.innerHTML = "";
}

// 3.
function generateSquare(index) {

  const newSquare = document.createElement("div");

  // dimensione dinamica degli square dentro il container
  newSquare.style.width =`calc(100% / ${Math.sqrt(limit)})`;

  // do una classe al nuovo elemento creato
  newSquare.className = "square";
  // Creo un elemento <span>
  const span = document.createElement("span");
  // Imposto il testo dello span
  span.innerText = index;
  // Aggiungo lo span alla casella
  newSquare.appendChild(span);
  return newSquare;
}

// funzione per cambiare la difficolta di gioco
function changeDifficulty() {
  return (limit = Number(difficultySelectEl.value));
}
