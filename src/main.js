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
// funcion que se trae todos los pokemon
let datpoke = data.pokemon;
function allPokemon() {
  //recorrido para traer la data y agregarla
  for (let i = 0; i < data.pokemon.length; i++) {

    const imag = document.createElement("img");
    imag.src = data.pokemon[i].img
    document.getElementById("card").appendChild(imag);

    const nameT = document.createElement("p");
    nameT.innerText = data.pokemon[i].name + data.pokemon[i].num;
    document.getElementById("card").appendChild(nameT);

    const types = document.createElement("p");
    types.innerText = data.pokemon[i].type;
    document.getElementById("card").appendChild(types);

    const weaknessesP = document.createElement("p");
    weaknessesP.innerText = data.pokemon[i].weaknesses;
    document.getElementById("card").appendChild(weaknessesP);
  }
}
//allPokemon();

function drawPokemon(cardsPokemons) {
  //recorrido para traer la data y agregarla
  for (let i = 0; i < cardsPokemons.length; i++) {

    const imag = document.createElement("img");
    imag.src = cardsPokemons[i].img
    document.getElementById("card").appendChild(imag);

    const nameT = document.createElement("p");
    nameT.innerText = cardsPokemons[i].name + cardsPokemons[i].num;
    document.getElementById("card").appendChild(nameT);

    const types = document.createElement("p");
    types.innerText = cardsPokemons[i].type;
    document.getElementById("card").appendChild(types);

    const weaknessesP = document.createElement("p");
    weaknessesP.innerText = cardsPokemons[i].weaknesses;
    document.getElementById("card").appendChild(weaknessesP);
  }
}
//allPokemon();

///console.log (data.pokemon["type"])
//recorrido para traer la data y agregarla
//funciones para los selectores

/*let election = document.getElementById('type');
let typePoke = document.getElementById('card');
election.addEventListener('click', valueSelect);
function valueSelect() {
  let valueElect = election.value;
  if (valueElect == 'fire')
  console.log (filterData, typePoke)
  
  /*parrafo = filterData.allPokemon;
  }

}*/

document.getElementById("type").addEventListener("change", () => {
  //valueSelect();//
  const type = document.getElementById("type").value;
  const colum = document.getElementById("colum").value;
  const alfabet = document.getElementById("alfabet").value;
  //alert('type: ' + type + ' colum: ' +  colum + ' alfabet: ' + alfabet);
  const filterPoke = filterData(data, type);
  const orderPoke = sortData (filterPoke,colum,alfabet);
  drawPokemon (orderPoke);
  });

  document.getElementById("colum").addEventListener("change", () => {
    //valueSelect();//
    const type = document.getElementById("type").value;
    const colum = document.getElementById("colum").value;
    const alfabet = document.getElementById("alfabet").value;
    //alert('type: ' + type + ' colum: ' +  colum + ' alfabet: ' + alfabet);
    const filterPoke = filterData(data, colum);
    const orderPoke = sortData (filterPoke,type,alfabet);
    drawPokemon (orderPoke);
    });
    document.getElementById("alfabet").addEventListener("change", () => {
      //valueSelect();//
      const type = document.getElementById("type").value;
      const colum = document.getElementById("colum").value;
      const alfabet = document.getElementById("alfabet").value;
      //alert('type: ' + type + ' colum: ' +  colum + ' alfabet: ' + alfabet);
      const filterPoke = filterData(data, alfabet);
      const orderPoke = sortData (filterPoke,type,colum);
      drawPokemon (orderPoke);
      });


  
/*const election = document.getElementById("type");
function valueSelect() {
  let valueElect = election.value;
  if ( valueElect == "ice") {
    print();
}
}
function print(){
 document.getElementById. innerHTML = filterData;
}*/
