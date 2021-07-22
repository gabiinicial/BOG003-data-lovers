import {
  filterData,
  sortData
} from './data.js';

import data from './data/pokemon/pokemon.js';
// import data from './data/lol/lol.js';

// import data from './data/rickandmorty/rickandmorty.js';
//Boton descarga la APP

document.getElementById("btngo").addEventListener("click", () => {
  document.getElementById("page1").style.display = 'block';

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
  document.getElementById('card').removeAttribute('hidden');
  });
//recorrido para traer la data y agregarla

function allPokemon(){
  
    for (let i = 0; i < data.pokemon.length; i++) {

      const imag = document.createElement("img");
      imag.src = data.pokemon[i].img;
      document.getElementById("card").appendChild(imag);
    
      const nameT = document.createElement("p");
      nameT.innerText = data.pokemon[i].name + data.pokemon[i].num;
      document.getElementById("card").appendChild(nameT);
    }  
}
// funcion que se trae todos los pokemon
allPokemon();
/*
    const nameT = document.createElement("p");
    nameT.innerText = data.pokemon[i].name + data.pokemon[i].num;
    document.getElementById("information").appendChild(nameT);
  }*/
//console.log(example , data);
