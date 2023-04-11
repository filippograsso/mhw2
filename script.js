function ricomincia(){
  map = {};
  container = document.querySelector("#result");
  container.innerHTML = '';
  container.classList.add("invisible");
  let boxes = document.querySelectorAll(".hidden");
  for(let box of boxes){
    box.classList.remove("hidden");
  }
  boxes = document.querySelectorAll(".clicked");
  for(let box of boxes){
    box.classList.remove("clicked");
    box.querySelector(".checkbox").src = "images/unchecked.png";
  }
  for(const cella of celle){
    cella.addEventListener('click', clickCella);
  }
}

function finito(){
  container = document.querySelector("#result");
  title = document.createElement("h1");
  content = document.createElement("p");
  
  if (map['two'] == map['three']) {
    title.textContent = RESULTS_MAP[map['two']].title;
    content.textContent = RESULTS_MAP[map['two']].contents;
  }else{
    title.textContent = RESULTS_MAP[map['one']].title;
    content.textContent = RESULTS_MAP[map['one']].contents;
  }
  button = document.createElement("button");
  button.textContent = "Ricomincia il quiz";
  container.appendChild(title);
  container.appendChild(content);
  container.appendChild(button);
  button.addEventListener('click', ricomincia);
  container.classList.remove("invisible");
  for(const cella of celle){
    cella.removeEventListener('click', clickCella);
  }
}

function clickCella(event){
  let cliccato = event.currentTarget;
  let selezionato = cliccato.parentNode.querySelector(".clicked");
  if (selezionato != null){
    selezionato.classList.add("hidden");
    selezionato.classList.remove("clicked");
    selezionato.querySelector(".checkbox").src = "images/unchecked.png";
  } else{ //Al primo click tutte le box diventano oscure
    let boxes = cliccato.parentNode.querySelectorAll("div");
    for(let box of boxes)
      box.classList.add("hidden");
  }
  cliccato.classList.remove("hidden");
  cliccato.classList.add("clicked");
  cliccato.querySelector(".checkbox").src = "images/checked.png";
  map[cliccato.dataset.questionId] = cliccato.dataset.choiceId;

  if(Object.keys(map).length == numDomande)
    finito();
}

const celle = document.querySelectorAll(".choice-grid div");
let map = {};
const numDomande = 3; //document.querySelectorAll(".choice-grid").length

for(const cella of celle){
  cella.addEventListener('click', clickCella);
}
