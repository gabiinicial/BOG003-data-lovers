/* eslint-disable no-undef */
import {
  filterData,
  sortData,
  computeStats,
} from './data.js';

import data from './data/pokemon/pokemon.js';
// import data from './data/lol/lol.js';
// import data from './data/rickandmorty/rickandmorty.js';
//Boton descarga la APP

document.getElementById("btngo").addEventListener("click", () => { //opcion que devuelve al inicio de la pagina
  document.getElementById("page2").style.display = 'none';
  document.getElementById("page1").style.display = 'block';
})
document.getElementById("btnapp").addEventListener("click", () => { //eventos que llevan a los enlaces de las opciones que representa el menu
  location.href = "https://pokemongolive.com/es/";
})
document.getElementById("btnj").addEventListener("click", () => {
  location.href = "https://pokemongolive.com/es/play-where-you-are/"; //eventos que llevan a los enlaces de las opciones que representa el menu
})
//Boton de Pokebola
document.getElementById("poke").addEventListener("click", () => {
  document.getElementById('page1').style.display = 'none';
  document.getElementById('page2').removeAttribute('hidden');
  document.getElementById('page2').style.display = 'block';
  document.getElementById("rowCard").removeAttribute('hidden'); // atributo que remueve el contenido de ese id de la pantallaprincipal
  // document.getElementById("statistics").removeAttribute('hidden');
  callPoke(datPoke); // Dibuja los Pokemon
});
// Boton Grafica de estadisticas
document.getElementById("statistics").addEventListener("click", () => {
  document.getElementById("mModal").removeAttribute('hidden');
  document.getElementById("mModal").style.display = 'block';
});
document.getElementById("xModal").addEventListener("click", () => {
  document.getElementById("mModal").style.display = 'none';
})
//Cierre de modal
let span = document.getElementById("mModal")[0];
document.getElementById("xModal").addEventListener("click", () => {
  span.style.display = "none";
});


// funcion que se trae todos los pokemon
let datPoke = data.pokemon;
const callPoke = (datPoke) => {
  document.getElementById("rowCard").textContent = ""; //permite que al momento de seleccionar otras opciones los nodos no se sobre pongan
  //recorrido para traer la data y agregarla
  datPoke.forEach((e) => {
    let containCard = document.createElement("div");
    containCard.id = "card";
    const nameT = document.createElement("p");
    nameT.id = "nametClass";
    const imag = document.createElement("img");
    imag.id = "imagClass";
    const types = document.createElement("p");
    types.id = "typesClass";
    const number = document.createElement("p");
    number.id = "numberClass";
    const weaknessesP = document.createElement("p");
    weaknessesP.id = "weakClass";
    const resistands = document.createElement("p");
    resistands .id = "resistClass";
    number.innerText = "# " + e.num;
    nameT.innerText = e.name;
    imag.src = e.img;
    types.innerText = "Tipo: " + e.type;
    resistands.innerText = "Resistencia: " + e.resistant;
    weaknessesP.innerText= "Debilidades: "  +  e.weaknesses;

    containCard.appendChild(nameT);
    containCard.appendChild(number);
    containCard.appendChild(imag);
    containCard.appendChild(types);
    containCard.appendChild(weaknessesP);
    containCard.appendChild(resistands);
    document.getElementById("rowCard").appendChild(containCard);
  });
}

//funcion que se encarga de realizar las acciones dentro de cada evento
function changeFunction() {

  const type = document.getElementById("type").value;
  const colum = document.getElementById("colum").value;
  const alfabet = document.getElementById("alfabet").value;
  const filterPoke = filterData(data, type);
  const orderPoke = sortData(filterPoke, colum, alfabet);
  callPoke(orderPoke);
}

//evento que contendra el filtrado de la data  y el ordenamiento dependiendo de el tipo que se selecione
document.getElementById("type").addEventListener("change", () => {
  changeFunction();
});
//evento de ordenamiento
document.getElementById("colum").addEventListener("change", () => {
  changeFunction();

});
document.getElementById("alfabet").addEventListener("change", () => {
  changeFunction();
});

const y = computeStats(data); // datos estadisticos
const x = ['Minima Resistencia', 'Maxima Resistencia' , 'Minimo Ataque','Maximo Ataque']; // Identficador de resistencia a comparar
const colors = ["rgba(6, 32, 76, 1)", "rgba(252, 244, 44, 1)"];

let myCanva = document.getElementById("myGraph");
new Chart (myCanva, {
  type: "bar",
  data: {
    labels: x,
    datasets: [{
      backgroundColor: colors,
      data: y
    }]
  },
  options: {
    legend: {
      disply: true
    },
    title: {
      display: true,
      text: "Estadistica comparativa de resistencia de Pokémon"
    }
  }
});
/* const imag = document.createElement("img")
      imag.src = e.img;
      document.getElementById("rowCard").appendChild(imag);

      const nameT = document.createElement("p");
      nameT.innerText = e.name + e.num;
      document.getElementById("rowCard").appendChild(nameT);

      const types = document.createElement("p");
      types.innerText = e.type;
      document.getElementById("rowCard").appendChild(types);

      const weaknessesP = document.createElement("p");
      weaknessesP.innerText = e.weaknesses;
      document.getElementById("rowCard").appendChild(weaknessesP);
    });
  }*/
