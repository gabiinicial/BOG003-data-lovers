import {
  filterData,
  sortData,computeStats
} from './data.js';

import data from './data/pokemon/pokemon.js';
// import data from './data/lol/lol.js';

// import data from './data/rickandmorty/rickandmorty.js';
//Boton descarga la APP

document.getElementById("btngo").addEventListener("click", () => { //opcion que devuelve al inicio de la pagina
  document.getElementById("page1").style.display = 'block';

})
document.getElementById("btnapp").addEventListener("click", () => {//eventos que llevan a los enlaces de las opciones que representa el menu
  location.href = "https://pokemongolive.com/es/";
})
document.getElementById("btnj").addEventListener("click", () => {
  location.href = "https://pokemongolive.com/es/play-where-you-are/";//eventos que llevan a los enlaces de las opciones que representa el menu
})
//Boton de Pokebola/
document.getElementById("poke").addEventListener("click", () => {
  document.getElementById('page1').style.display = 'none';
  document.getElementById('page2').removeAttribute('hidden');
  document.getElementById('page2').style.display = 'block';
  document.getElementById("cont").removeAttribute('hidden');// atributo que remueve el contenido de ese id de la pantallaprincipal
  callPoke(datPoke);
});
// funcion que se trae todos los pokemon
let datPoke = data.pokemon;
const callPoke = (datPoke) => {   
  document.getElementById("rowCard").textContent = "";//permite que al momento de seleccionar otras opciones los nodos no se sobre pongan
  
  //recorrido para traer la data y agregarla
  datPoke.forEach((e) => {
  let re= document.createElement("div"); re.id= "card";
      const imag = document.createElement("img").createElement("div");
      const nameT = document.createElement("p");
      const types = document.createElement("p");
      const weaknessesP = document.createElement("p");
      imag.src = e.img;
      nameT.innerText = e.name + " #" + e.num;
      types.innerText = e.type;
      weaknessesP.innerText = e.weaknesses;
      
      re.appendChild(imag);

      re.appendChild(nameT);

      re.appendChild(types);

      re.appendChild(weaknessesP);
      document.getElementById("rowCard").appendChild(re);
    });
  }
   //funcion que se encarga de realizar las acciones dentro de cada evento
   function changeFunction(){

    const type = document.getElementById("type").value;
    const colum = document.getElementById("colum").value;
    const alfabet = document.getElementById("alfabet").value;
    const filterPoke = filterData(data, type);
    const orderPoke = sortData(filterPoke, colum,alfabet);
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
 
  
  
 let f = computeStats(data);
 console.log(f);

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