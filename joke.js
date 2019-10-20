"use strict";
let jokeList = [];

// Get A Joke
async function getJoke() {
  let res = await fetch("https://api.icndb.com/jokes/random");
  const joke = await res.json();
  return joke.value.joke;
}
// Event Listener
document.querySelector(".btn-box").addEventListener("click", showJoke);

//
async function showJoke() {
  const joke = await getJoke();

  let box = document.createElement("p");
  box.classList.add("text2"); 
  box.innerHTML = joke;
  jokeList.push(box);

  for (let i = 0; i < jokeList.length; i++) {
    document.querySelector(".text").appendChild(jokeList[i]);
  }
}
