import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';
//Boton descarga la APP
document.getElementById("btngo").addEventListener("click", () => {
    document.getElementById("page1").style.display='block';
})
document.getElementById("btnapp").addEventListener("click", () => {
    location.href = "https://pokemongolive.com/es/";
})
document.getElementById("btnj").addEventListener("click", () => {
    location.href = "https://pokemongolive.com/es/play-where-you-are/";

})

//Boton de Pokebola/
document.getElementById("poke").addEventListener("click", () => {
    document.getElementById('page1').style.display = 'none';
    document.getElementById('page2').removeAttribute('hidden');
    document.getElementById('page2').style.display = 'block';
  });




console.log(example, data);
