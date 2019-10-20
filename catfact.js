"use strict";
let factList = [];

// Get A Joke
async function getFact() {
  let res = await fetch("https://cors-anywhere.herokuapp.com/https://catfact.ninja/fact");
  const fact = await res.json();
  return fact.fact;
}

// Event Listener
document.querySelector(".btn-box").addEventListener("click", showFact);

// Display Fact(s)
async function showFact() {
  const fact = await getFact();

  let box = document.createElement("p");
  box.classList.add("text2");
  box.innerHTML = fact;
  factList.push(box);

  for (let i = 0; i < factList.length; i++) {
    document.querySelector(".text").appendChild(factList[i]);
  }
}
